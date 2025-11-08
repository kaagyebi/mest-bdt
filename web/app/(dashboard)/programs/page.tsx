import { Eye,   Trash2, Users, Dot, Calendar } from "lucide-react";
import Image from 'next/image';






export default function Programs() {
  return (
    <>
      <div className="flex flex-col bg-gray-200 p-6">
        <section className=" flex justify-between ">
          <div>
            <h1 className="text-xl text-black font-bold">Programs Management</h1>
            <p className="mt-2 text-black text-lg">list of Programs</p>
          </div>
          <div>
            <button className="bg-black p-2 text-white rounded-lg cursor-pointer"> +  Add Program</button>
          </div>
        </section>
        <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
          <div className="relative bg-white rounded-lg shadow-md space-y-3 p-4 " >
            <div>
              <Image src={'https://i.pinimg.com/1200x/40/6d/46/406d46cfab7c97768870aaf287d89b5b.jpg'} alt="image complete" width={500} height={500} quality={100} style={{objectFit: 'cover', borderRadius: "12px"}} />
            </div>
           <div className="flex mt-4 items-center justify-between">
             <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold text-gray-800">Leadership development Program</h2>
              <p className="bg-blue-100 absolute top-6 left-6 text-blue-900 px-2 py-1 rounded-full text-xs">upcoming </p>
            </div>
            <div className=" absolute top-6  right-6 flex items-center gap-3">
              <Eye className="w-8 h-8 text-gray-600 bg-white p-1.5 rounded-full hover:text-blue-500 cursor-pointer transition"/>
              <Trash2 className="text-red-600 w-8 h-8 bg-white p-1.5 rounded-full shadow-sm hover:text-red-500 cursor-pointer transition" />
            </div>
           </div>
            <p className="text-gray-700 text-base leading-relaxed">
            An intensive 12-week program designed to develop leadership skills and strategic thinking for mid-level managers.
          </p>
          <div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Users /> 
                <p>Cohort: 2025 Spring Cohort </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Dot />
                <p>24 participants</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <p className="text-gray-600 text-sm">March 17, 2025 - Jun 7, 2025</p>
              </div>
          </div>
          </div>
         
          <div className="relative bg-white rounded-lg shadow-md space-y-3 p-4 " >
            <Image src={'https://i.pinimg.com/1200x/a3/51/30/a35130edc8113b0b747ed58f84fa3f8c.jpg'} alt="image completed" width={500} height={500} quality={100} style={{objectFit: 'cover', borderRadius: "12px"}}/>
           <div className="flex items-center mt-2 justify-between">
             <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold text-gray-800">Technical Skills Bootcamp</h2>
              <p className="bg-green-100 text-green-700 px-2 py-1 absolute top-6 left-5 rounded-full text-xs ">active </p>
            </div>
            <div className="absolute top-6 right-6 flex items-center gap-3">
              <Eye className="w-8 h-8 bg-white rounded-full p-1.5 text-gray-600 hover:text-blue-500 cursor-pointer transition"/>
              <Trash2 className="text-red-600 w-8 h-8 bg-white rounded-full p-1.5 hover:text-red-500 cursor-pointer transition" />
            </div>
           </div>
            <p className="text-gray-700 text-base leading-relaxed">
            An intensive 12-week program designed to develop leadership skills and strategic thinking for mid-level managers.
          </p>
          <div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Users /> 
                <p>Cohort: 2025 Spring Cohort </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Dot />
                <p>24 participants</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <p className="text-gray-600 text-sm">March 17, 2025 - Jun 7, 2025</p>
              </div>
          </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-md space-y-3 p-4 " >
            <Image src={'https://i.pinimg.com/1200x/2f/94/e1/2f94e1314b23dda5338f32b587489d90.jpg'} alt="image complete" width={500} height={500} quality={100} style={{objectFit: 'cover', borderRadius: "12px"}}/>
           <div className="flex items-center mt-2 justify-between">
             <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold text-gray-800">Product Management Fellowship</h2>
              <p className="bg-white absolute top-6 left-6 text-black px-2 py-1 rounded-full text-xs">completed </p>
            </div>
            <div className="flex top-6 right-6 absolute items-center gap-3">
              <Eye className="w-8 h-8 bg-white p-1.5 rounded-full text-gray-600 hover:text-blue-500 cursor-pointer transition"/>
              <Trash2 className="text-red-600 w-8 h-8 bg-white p-1.5 rounded-full hover:text-red-500 cursor-pointer transition" />
            </div>
           </div>
            <p className="text-gray-700 text-base leading-relaxed">
            An intensive 12-week program designed to develop leadership skills and strategic thinking for mid-level managers.
          </p>
          <div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Users /> 
                <p>Cohort: 2025 Spring Cohort </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Dot />
                <p>24 participants</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <p className="text-gray-600 text-sm">March 17, 2025 - Jun 7, 2026</p>
              </div>
          </div>
          </div>
        </section>
      </div>
    </>
  );
}
