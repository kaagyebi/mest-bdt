import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export class HankoUser {
  aud: string[];
  email: {
    address: string;
    is_primary: boolean;
    is_verified: boolean;
  };
  exp: number;
  iat: number;
  iss: string;
  session_id: string;
  sub: string;
}

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.user as HankoUser;
  },
);
