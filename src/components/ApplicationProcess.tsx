'use client'
import stepsData from "../data/step-required.json"
import { BackgroundGradient } from "./ui/background-gradient";

interface Course{
    id: number,
    title: string,
    description: string,
    isFeatured: boolean,
        
}

function ApplicationProcess() {
    const applicationprocess=stepsData.courses.filter
    ((course:Course) => course.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
        <div>
        <div className="text-center">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Application Process</p>
            </div>
       </div>
       <div className="mt-10">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {applicationprocess.map((course:Course)=>(
                <div key={course.id} className="flex justify-center">
                    <BackgroundGradient
                    className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                            </div>
                    </BackgroundGradient>
                    </div>
            ))}
         </div>
       </div>
      
    </div>
  );
}

export default ApplicationProcess ;
