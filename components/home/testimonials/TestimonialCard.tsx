import { initAOS } from '@/utils/aos';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'

function TestimonialCard() {
    useEffect(() => {
        initAOS();
      }, []);
  return (
    <section>
    <div className="min-h-[400px]  max-w-[400px]">
      <RiDoubleQuotesR
        data-aos="zoom-in-up"
        className="text-6xl text-megamind_red"
      />
      <p
        data-aos="zoom-in-up"
        className=" text-3xl leading-9 font-Jost pb-8 pt-2 text-megamind_black/80 dark:text-megamind_white/80 "
      >
        “On the other hand we denounce with righteous indignationes dislike
        men who beguiled and demoralize by the charms of pleasure of the
        moment blinde by desire that they cannot foresee”
      </p>
      <hr className="dark:border-megamind_red border-megamind_black/20" />
      <div data-aos="zoom-in-up" className="h-24 mt-6 grid grid-cols-4">
        <div className="flex justify-start items-center">
          <Image
            src={"/images/user.jpeg"}
            alt=""
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
        <div className="col-span-3 flex flex-col justify-center items-start">
          <h1 className="dark:text-megamind_white text-xl font-semibold">Randy K. Yazzie</h1>
          <h3 className="text-megamind_red text-sm">CEO & Founder</h3>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TestimonialCard