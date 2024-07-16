// import Link from "next/link"
// import { Spotlight } from "./ui/Spotlight"
// import { Button } from "./ui/moving-border";

// function Banner() {
//   return (
//     <div
//     className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
//     >
//         <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />
//         <div className="p-4 relative z-10 w-full text-center" >
//             <h1
//             className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
//             >Welcome to Finance Website</h1>
//             <p
//             className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
//             >At our company, we empower individuals and communities by providing access to microloans, savings accounts, and financial education. We believe financial inclusion is key to building a brighter future, and we are dedicated to helping people achieve their entrepreneurial dreams</p>
//         </div>
        
//         </div>
//   )
// }

// export default Banner
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function Banner({ id }: { id?: string }) {
  return (
    <div
      id={id}
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Welcome to Finance Website
        </h1>
        <p
          className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >
          At our company, we empower individuals and communities by providing access to microloans, savings accounts, and financial education. We believe financial inclusion is key to building a brighter future, and we are dedicated to helping people achieve their entrepreneurial dreams
        </p>
      </div>
    </div>
  );
}

export default Banner;
