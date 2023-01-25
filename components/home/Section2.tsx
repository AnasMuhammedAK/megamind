import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Section2() {
  return (
    <div className="w-full min-h-[520px] bg-megamind_black/90 2xl:px-80 px-4 md:px-10 lg:px-20 xl:px-64 py-4 pt-16 relative">
    <Image className="absolute xl:left-36 left-[-10px] top-10 animate-my-bounce" src="/images/section2/circle.png"  alt="" width={300} height={300} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
      <div className="max-h-[400px] flex items-center justify-center h-full relative">
        <Image className=" rounded-tr-[80px] xl:absolute bottom-[-150px]" src="/images/section2/service.png" width={700} height={500}/>
      </div>
      <div className="h-96  pl-10 ">
        <div className="flex items-center mt-24">
          <h1 className="border-b-2  border-megamind_red w-8"></h1>
          <h1 className="ml-3  text-xl text-megamind_red">
            Over 20+ Clients
          </h1>
        </div>
        <h1 className="text-megamind_white text-4xl font-Red_Hat_Display font-semibold mt-4 max-w-lg">
          We Created the Most Advanced Technology.
        </h1>
        <p className="text-gray-300 py-5 max-w-lg font-red">
          Sit amet consectetur adipiscing elit sed eiusmod tempors
          incididunt labore dolore magna aliqua sependse.
        </p>
        <button className="transition-all duration-300 text-megamind_white text-lg underline hover:text-megamind_red flex items-center justify-center">
          Our Services
          <BsArrowRight className="text-xl ml-3 mt-1" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default Section2