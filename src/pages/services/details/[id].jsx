import { data } from "@/utils/serviceData";
import Banner from "components/About/Banner";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillCaretRight, AiFillPlusCircle } from "react-icons/ai";
import Questions2 from '../../../../components/home/dropdown/Questions2'


function ServiceDetails() {
  const [serviceData, setServiceData] = useState({});
  const router = useRouter();
  const { id } = router?.query;
  const [open, setOpen] = useState(10000);
  const togle = (index) => {
    if (open === index) {
      return setOpen(10000);
    }
    setOpen(index);
  };
  useEffect(() => {
    setServiceData(data[id - 1]);
  }, [id]);
  return (
    <div>
      <Head>
        <title>megamind | Service Details</title>
      </Head>
      <Banner pageName={"Service Details"} Active={"service_details"} />
      <div className="dark:bg-megamind_black  w-full  2xl:px-96 px-4 md:px-10 lg:px-20 xl:px-64 pb-16 pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Image
              src={`/images/services/${serviceData?.image1}`}
              alt="image"
              width={750}
              height={500}
            />
            <h1 className="text-4xl font-Red_Hat_Display font-extrabold dark:text-megamind_white mt-12">
              {serviceData?.mainTitle}
            </h1>
            <p className="text-gray-500 break-all mt-2 leading-8"> {serviceData?.para1}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div>
                <Image
                  src={`/images/services/${serviceData?.image2}`}
                  alt="image"
                  width={400}
                  height={400}
                  className="rounded-md"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                {serviceData?.bulletPoints?.map((item, index) => {
                  return (
                    <div key={index} className="flex items-center space-x-2" >
                      <AiFillPlusCircle className="text-megamind_red" />
                      <p className="text-xs text-gray-500">{item}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <p className="text-gray-500 break-all leading-8 mt-10"> {serviceData?.para2}</p>
            <h1 className="text-2xl font-Red_Hat_Display font-extrabold dark:text-megamind_white mt-10">
              {serviceData?.title1}
            </h1>
            <p className="text-gray-500 break-all leading-8 mt-2"> {serviceData?.para3}</p>
            <p className="text-gray-500 break-all leading-8 mt-2"> {serviceData?.para4}</p>
            <div className="mt-6">
              {serviceData?.questions?.map((item, index) => (
                <Questions2
                  key={index}
                  togle={() => togle(index)}
                  open={index === open}
                  question={item?.question}
                  answer={item?.answer}
                />
              ))}
            </div>
          </div>
          <div className="bg-megamind_black/10 dark:bg-megamind_white/10 max-h-[500px] px-6 py-10">
            <h1 className="text-2xl font-semibold dark:text-megamind_white">Services List</h1>
            <div className={`mt-4 dark:text-white font-Red_Hat_Display  space-y-2`}>
              <div className={`flex items-center cursor-pointer ${id == 1 && "text-megamind_red font-semibold"}`}>
                <AiFillCaretRight />
                <Link href={"/services/details/1"}>Digital Marketing</Link>
              </div>
              <div className={`flex items-center cursor-pointer ${id == 2 && "text-megamind_red font-semibold"}`}>
                <AiFillCaretRight />
                <Link href={"/services/details/2"}>Web Development</Link>
              </div>
              <div className={`flex items-center cursor-pointer ${id == 3 && "text-megamind_red font-semibold"}`}>
                <AiFillCaretRight />
                <Link href={"/services/details/3"}>SEO & Content Writing</Link>
              </div>
              <div className={`flex items-center cursor-pointer ${id == 4 && "text-megamind_red font-semibold"}`}>
                <AiFillCaretRight />
                <Link href={"/services/details/4"}>Graphic design</Link>
              </div>
              <div className={`flex items-center cursor-pointer ${id == 5 && "text-megamind_red font-semibold"}`}>
                <AiFillCaretRight />
                <Link href={"/services/details/5"}>Bussiness Agency</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
