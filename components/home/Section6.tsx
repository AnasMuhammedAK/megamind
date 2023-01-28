import React from "react";

function Section6() {
  return <div>Section6</div>;
}

export default Section6;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";

// function Section6() {
//   return (
//     <div className="bg-megamind_black/10  dark:bg-megamind_black/95">
//       <div>
//         <Swiper
//           breakpoints={{
//             640: {
//               width: 640,
//               slidesPerView: 3,
//             },
//             768: {
//               width: 768,
//               slidesPerView: 4,
//             },
//             1280: {
//               width: 1280,
//               slidesPerView: 5,
//             },
//             1536: {
//               width: 1536,
//               slidesPerView: 6,
//             },
//             1700: {
//               width: 100,
//               slidesPerView: 7,
//             },
//             1900: {
//               width: 1900,
//               slidesPerView: 8,
//             },
//             2000: {
//               width: 2000,
//               slidesPerView: 8,
//             },
//           }}
//           className="mySwiper max-w-[360px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] 4xl:max-w-[1700px] 6xl:max-w-[1900px] 7xl:max-w-[2000px]"
//           spaceBetween={1}
//           slidesPerView={2}
//           autoplay={{
//             delay: 1500,
//             disableOnInteraction: false,
//           }}
//           modules={[Autoplay, Pagination]}
//         >
//           <SwiperSlide className="flex items-center justify-center">
//             <div className="  sm:w-60 flex items-center justify-center mb-[-100px] sm:py-10">
//               hello
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="flex items-center justify-center">
//             <div className="  sm:w-60 flex items-center justify-center mb-[-100px] sm:py-10">
//               hello
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="flex items-center justify-center">
//             <div className="  sm:w-60 flex items-center justify-center mb-[-100px] sm:py-10">
//               hello
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="flex items-center justify-center">
//             <div className="  sm:w-60 flex items-center justify-center mb-[-100px] sm:py-10">
//               hello
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// }





// export default Section6;
// import { initAOS } from "@/utils/aos";
// import Link from "next/link";
// import React, { useEffect } from "react";
// import Carousel from "react-elastic-carousel";

// function Section6() {
//   const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 2 },
//     { width: 768, itemsToShow: 3 },
//     { width: 1200, itemsToShow: 4 },
//   ];
//   useEffect(() => {
//     initAOS();
//   }, []);
//   return (
//     <div data-aos="zoom-in-up" className="px-4 py-16 dark:bg-megamind_black">
//       <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000}>
//         <section>
//           <div className="h-[430px] max-h-[430px] w-[430px] mb-10 overflow-hidden  group">
//             <div className="bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/04/profolio-6-min.jpg)]  h-full w-full bg-cover bg-center hover:scale-110 transition-all duration-500 ">
//               <div className="w-full h-full hover:bg-megamind_red opacity-20 "></div>
//               <div className="w-[430px] rounded-b-lg  h-28 bg-megamind_white dark:bg-megamind_black absolute bottom-2 translate-y-36  group-hover:translate-y-[-8px] transition-all duration-300">
//                 <div
//                   data-aos="zoom-in-up"
//                   className="flex items-center my-4 px-10"
//                 >
//                   <h1 className="border-b-2  border-megamind_red w-8 "></h1>
//                   <h1 className="ml-3   text-megamind_red font-Red_Hat_Display text-xl hover:translate-x-2 transition-all duration-200">
//                     <Link href={""}>Digital Marketing Onboarding</Link>
//                   </h1>
//                 </div>
//                 <h3 data-aos="zoom-in-up" className=" px-24  text-gray-500">
//                   XD Design
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section>
//           <div className="h-[430px] max-h-[430px] w-[430px] mb-10 overflow-hidden  group">
//             <div className="bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/04/profolio-7-min.jpg)]  h-full w-full bg-cover bg-center hover:scale-110 transition-all duration-500 ">
//               <div className="w-full h-full hover:bg-megamind_red opacity-20 "></div>
//               <div className="w-[430px] rounded-b-lg  h-28 bg-megamind_white dark:bg-megamind_black absolute bottom-2 translate-y-36  group-hover:translate-y-[-8px] transition-all duration-300">
//                 <div className="flex items-center my-4 px-10">
//                   <h1 className="border-b-2  border-megamind_red w-8 "></h1>
//                   <h1 className="ml-3   text-megamind_red font-Red_Hat_Display text-xl hover:translate-x-2 transition-all duration-200">
//                     <Link href={""}>Web Development</Link>
//                   </h1>
//                 </div>
//                 <h3 className=" px-24  text-gray-500">XD Design</h3>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section>
//           <div className="h-[430px] max-h-[430px] w-[430px] mb-10 overflow-hidden  group">
//             <div className="bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/04/profolio-8-min.jpg)]  h-full w-full bg-cover bg-center hover:scale-110 transition-all duration-500 ">
//               <div className="w-full h-full hover:bg-megamind_red opacity-20 "></div>
//               <div className="w-[430px] rounded-b-lg  h-28 bg-megamind_white dark:bg-megamind_black absolute bottom-2 translate-y-36  group-hover:translate-y-[-8px] transition-all duration-300">
//                 <div className="flex items-center my-4 px-10">
//                   <h1 className="border-b-2  border-megamind_red w-8 "></h1>
//                   <h1 className="ml-3   text-megamind_red font-Red_Hat_Display text-xl hover:translate-x-2 transition-all duration-200">
//                     <Link href={""}>SEO & Content Writing</Link>
//                   </h1>
//                 </div>
//                 <h3 className=" px-24  text-gray-500">XD Design</h3>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section>
//           <div className="h-[430px] max-h-[430px] w-[430px] mb-10 overflow-hidden  group">
//             <div className="bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/04/profolio-9-min.jpg)]  h-full w-full bg-cover bg-center hover:scale-110 transition-all duration-500 ">
//               <div className="w-full h-full hover:bg-megamind_red opacity-20 "></div>
//               <div className="w-[430px] rounded-b-lg  h-28 bg-megamind_white dark:bg-megamind_black absolute bottom-2 translate-y-36  group-hover:translate-y-[-8px] transition-all duration-300">
//                 <div className="flex items-center my-4 px-10">
//                   <h1 className="border-b-2  border-megamind_red w-8 "></h1>
//                   <h1 className="ml-3   text-megamind_red font-Red_Hat_Display text-xl hover:translate-x-2 transition-all duration-200">
//                     <Link href={""}>Graphic Design</Link>
//                   </h1>
//                 </div>
//                 <h3 className=" px-24  text-gray-500">XD Design</h3>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section>
//           <div className="h-[430px] max-h-[430px] w-[430px] mb-10 overflow-hidden  group">
//             <div className="bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/04/profolio-10-min.jpg)]  h-full w-full bg-cover bg-center hover:scale-110 transition-all duration-500 ">
//               <div className="w-full h-full hover:bg-megamind_red opacity-20 "></div>
//               <div className="w-[430px] rounded-b-lg  h-28 bg-megamind_white dark:bg-megamind_black absolute bottom-2 translate-y-36  group-hover:translate-y-[-8px] transition-all duration-300">
//                 <div className="flex items-center my-4 px-10">
//                   <h1 className="border-b-2  border-megamind_red w-8 "></h1>
//                   <h1 className="ml-3   text-megamind_red font-Red_Hat_Display text-xl hover:translate-x-2 transition-all duration-200">
//                     <Link href={""}>Bussiness Agency</Link>
//                   </h1>
//                 </div>
//                 <h3 className=" px-24  text-gray-500">XD Design</h3>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section>
//           <div className="h-[430px] max-h-[430px] w-[430px] mb-10 overflow-hidden  group">
//             <div className="bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/04/profolio-6-min.jpg)]  h-full w-full bg-cover bg-center hover:scale-110 transition-all duration-500 ">
//               <div className="w-full h-full hover:bg-megamind_red opacity-20 "></div>
//               <div className="w-[430px] rounded-b-lg  h-28 bg-megamind_white dark:bg-megamind_black absolute bottom-2 translate-y-36  group-hover:translate-y-[-8px] transition-all duration-300">
//                 <div
//                   data-aos="zoom-in-up"
//                   className="flex items-center my-4 px-10"
//                 >
//                   <h1 className="border-b-2  border-megamind_red w-8 "></h1>
//                   <h1 className="ml-3   text-megamind_red font-Red_Hat_Display text-xl hover:translate-x-2 transition-all duration-200">
//                     <Link href={""}>Digital Marketing Onboarding</Link>
//                   </h1>
//                 </div>
//                 <h3 data-aos="zoom-in-up" className=" px-24  text-gray-500">
//                   XD Design
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section>
//           <div className="h-[430px] max-h-[430px] w-[430px] mb-10 overflow-hidden  group">
//             <div className="bg-[url(https://surielementor.com/bixoswp/wp-content/uploads/2022/04/profolio-7-min.jpg)]  h-full w-full bg-cover bg-center hover:scale-110 transition-all duration-500 ">
//               <div className="w-full h-full hover:bg-megamind_red opacity-20 "></div>
//               <div className="w-[430px] rounded-b-lg  h-28 bg-megamind_white dark:bg-megamind_black absolute bottom-2 translate-y-36  group-hover:translate-y-[-8px] transition-all duration-300">
//                 <div className="flex items-center my-4 px-10">
//                   <h1 className="border-b-2  border-megamind_red w-8 "></h1>
//                   <h1 className="ml-3   text-megamind_red font-Red_Hat_Display text-xl hover:translate-x-2 transition-all duration-200">
//                     <Link href={""}>Web Development</Link>
//                   </h1>
//                 </div>
//                 <h3 className=" px-24  text-gray-500">XD Design</h3>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Carousel>
//     </div>
//   );
// }

// export default Section6;
