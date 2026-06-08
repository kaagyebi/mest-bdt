import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesService } from './companies.service';
import { getModelToken } from '@nestjs/mongoose';
import { mockModel } from '../common/mocks/model';
import { ConflictException, NotFoundException } from '@nestjs/common';

const companyModelMock = { ...mockModel };
const responseModelMock = { ...mockModel };
const userModelMock = { ...mockModel };

const VALID_ID = 'a'.repeat(24);

describe('CompaniesService', () => {
  let service: CompaniesService;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompaniesService,
        { provide: getModelToken('Company'), useValue: companyModelMock },
        { provide: getModelToken('Response'), useValue: responseModelMock },
        { provide: getModelToken('User'), useValue: userModelMock },
      ],
    }).compile();

    service = module.get<CompaniesService>(CompaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a company', async () => {
    const dto = { name: 'Company 1' };
    companyModelMock.insertOne.mockResolvedValue(dto);
    const result = await service.create(dto);
    expect(result).toEqual(dto);
    expect(companyModelMock.insertOne).toHaveBeenCalledWith(dto);
  });

  it('should count companies', async () => {
    companyModelMock.countDocuments.mockResolvedValue(10);
    const result = await service.countDocuments({});
    expect(result).toEqual(10);
    expect(companyModelMock.countDocuments).toHaveBeenCalledWith({});
  });

  it('should find all companies', async () => {
    const companies = [{ name: 'Company 1' }];
    companyModelMock.find.mockResolvedValue(companies);
    const result = await service.findAll({});
    expect(result).toEqual(companies);
    expect(companyModelMock.find).toHaveBeenCalledWith({});
  });

  it('should find one company', async () => {
    const company = { name: 'Company 1' };
    companyModelMock.findOne.mockResolvedValue(company);
    const result = await service.findOne({ _id: '1' });
    expect(result).toEqual(company);
    expect(companyModelMock.findOne).toHaveBeenCalledWith({
      _id: '1',
    });
  });

  it('should update a company', async () => {
    const company = { name: 'Updated Company' };
    companyModelMock.updateOne.mockResolvedValue(company);
    const result = await service.updateOne({ _id: '1' }, company);
    expect(result).toEqual(company);
    expect(companyModelMock.updateOne).toHaveBeenCalledWith(
      { _id: '1' },
      company,
    );
  });

  describe('findResponsesByCompany', () => {
    it('returns the responses for an existing company', async () => {
      const responses = [{ id: 'r1' }, { id: 'r2' }];
      companyModelMock.findById.mockResolvedValue({ _id: VALID_ID });
      responseModelMock.find.mockResolvedValue(responses);

      const result = await service.findResponsesByCompany(VALID_ID);

      expect(result).toEqual(responses);
      expect(companyModelMock.findById).toHaveBeenCalledWith(VALID_ID);
      expect(responseModelMock.find).toHaveBeenCalledWith({
        company: VALID_ID,
      });
    });

    it('throws 404 for a malformed id without querying', async () => {
      await expect(
        service.findResponsesByCompany('not-an-id'),
      ).rejects.toBeInstanceOf(NotFoundException);
      expect(companyModelMock.findById).not.toHaveBeenCalled();
    });

    it('throws 404 when the company does not exist', async () => {
      companyModelMock.findById.mockResolvedValue(null);
      await expect(
        service.findResponsesByCompany(VALID_ID),
      ).rejects.toBeInstanceOf(NotFoundException);
      expect(responseModelMock.find).not.toHaveBeenCalled();
    });
  });

  describe('deleteOne', () => {
    it('should delete company if no responses or users exist', async () => {
      const company = { _id: 'cid1', name: 'Company 1' };
      companyModelMock.findOne.mockResolvedValue(company);
      responseModelMock.countDocuments.mockResolvedValue(0);
      userModelMock.countDocuments.mockResolvedValue(0);
      companyModelMock.deleteOne.mockResolvedValue({ deletedCount: 1 });

      const result = await service.deleteOne({ _id: 'cid1' });
      expect(result).toEqual({ deletedCount: 1 });
    });

    it('should throw ConflictException if responses exist for company', async () => {
      const company = { _id: 'cid1', name: 'Company 1' };
      companyModelMock.findOne.mockResolvedValue(company);
      responseModelMock.countDocuments.mockResolvedValue(2);

      await expect(service.deleteOne({ _id: 'cid1' })).rejects.toThrow(
        ConflictException,
      );
    });

    it('should throw ConflictException if users exist for company', async () => {
      const company = { _id: 'cid1', name: 'Company 1' };
      companyModelMock.findOne.mockResolvedValue(company);
      responseModelMock.countDocuments.mockResolvedValue(0);
      userModelMock.countDocuments.mockResolvedValue(2);

      await expect(service.deleteOne({ _id: 'cid1' })).rejects.toThrow(
        ConflictException,
      );
    });

    it('should still delete if company not found', async () => {
      companyModelMock.findOne.mockResolvedValue(null);
      companyModelMock.deleteOne.mockResolvedValue({ deletedCount: 0 });

      const result = await service.deleteOne({ _id: 'non-existent' });
      expect(result).toEqual({ deletedCount: 0 });
    });
  });
});
