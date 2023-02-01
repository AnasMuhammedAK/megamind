import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as yup from "yup";
import { initAOS } from "@/utils/aos";
import axios from "axios";

function ContactForm() {
  const initialValues = {
    fullName: "",
    email: "",
    mobile: "",
    companyName: "",
    message: "",
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const nameRegex = /^[a-zA-Z ]*$/;

  const validationSchema = yup.object().shape({
    fullName: yup
      .string()
      .matches(nameRegex, "Only alphabets are allowed")
      .min(4, "Minimum 4 digit required")
      .required("Required"),
    companyName: yup
      .string()
      .min(2, "Minimum 2 digit required")
      .required("Required"),
    mobile: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    email: yup
      .string()
      .email("Please enter your valid email address")
      .required("Required"),
    message: yup.string().min(10, "Minimum 10 digit required"),
  });
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        console.log(values);
        const toastId = toast.loading("Loading...");
        axios
          .post("/api/enquiry/add", values)
          .then((res) => {
            toast.success("Notice Added Successfully...", {
              id: toastId,
            });
            console.log(res);
          })
          .catch((err) => {
            console.log(err?.response?.data?.message);
            toast.error("Somthing went wrong!", {
              id: toastId,
            });
          });
      },
    });
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <div className="md:flex items-center mt-12">
        <div data-aos="zoom-in-up" className="md:w-72 flex flex-col">
          <label className="text-base font-semibold leading-none text-megamind_black/60 dark:text-megamind_white/60">
            Name
          </label>
          <input
            value={values.fullName}
            onChange={handleChange("fullName")}
            onBlur={handleBlur("fullName")}
            tabIndex={0}
            arial-label="Please input name"
            type="name"
            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-megamind_red mt-4 bg-white border rounded border-megamind_black/30 dark:border-megamind_red  placeholder-megamind_black/40"
            placeholder="Please Enter Full Name"
          />
          <p className="text-red-400 text-[13px]">
            {touched?.fullName && errors?.fullName}
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4"
        >
          <label className="text-base font-semibold leading-none text-megamind_black/60 dark:text-megamind_white/60">
            Email Address
          </label>
          <input
            value={values.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            tabIndex={0}
            arial-label="Please Enter Email Address"
            type="email"
            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-megamind_red mt-4 bg-white border rounded border-megamind_black/30 dark:border-megamind_red  placeholder-megamind_black/40"
            placeholder="Please input email address"
          />
          <p className="text-red-400 text-[13px]">
            {touched?.email && errors?.email}
          </p>
        </div>
      </div>
      <div data-aos="zoom-in-up" className="md:flex items-center mt-8">
        <div className="md:w-72 flex flex-col">
          <label className="text-base font-semibold leading-none text-megamind_black/60 dark:text-megamind_white/60">
            Company name
          </label>
          <input
            value={values.companyName}
            onChange={handleChange("companyName")}
            onBlur={handleBlur("companyName")}
            tabIndex={0}
            role="input"
            arial-label="Please input company name"
            type="name"
            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-megamind_red mt-4 bg-white border rounded border-megamind_black/30 dark:border-megamind_red  placeholder-megamind_black/40 "
            placeholder="Please Enter Company Name"
          />
          <p className="text-red-400 text-[13px]">
            {touched?.companyName && errors?.companyName}
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4"
        >
          <label className="text-base font-semibold leading-none text-megamind_black/60 dark:text-megamind_white/60">
            Mobile
          </label>
          <input
            value={values.mobile}
            onChange={handleChange("mobile")}
            onBlur={handleBlur("mobile")}
            tabIndex={0}
            arial-label="Please input country name"
            type="tel"
            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-megamind_red mt-4 bg-white border rounded border-megamind_black/30 dark:border-megamind_red  placeholder-megamind_black/40"
            placeholder="Please Enter Mobile Number"
          />
          <p className="text-red-400 text-[13px]">
            {touched?.mobile && errors?.mobile}
          </p>
        </div>
      </div>
      <div>
        <div data-aos="zoom-in-up" className="w-full flex flex-col mt-8">
          <label className="text-base font-semibold leading-none text-megamind_black/60 dark:text-megamind_white/60">
            Message
          </label>
          <textarea
            value={values.message}
            onChange={handleChange("message")}
            onBlur={handleBlur("message")}
            tabIndex={0}
            aria-label="leave a message"
            role="textbox"
            className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-megamind_red mt-4 bg-white border rounded border-megamind_black/30 dark:border-megamind_red  placeholder-megamind_black/40 resize-none"
            defaultValue={""}
          />
          <p className="text-red-400 text-[13px]">
            {touched?.message && errors?.message}
          </p>
        </div>
      </div>
      <button
        type="submit"
        data-aos="zoom-in-up"
        className=" py-3 animationbutton rounded text-white flex items-center justify-center mt-10"
      >
        SUBMIT <BsArrowRight className="text-xl ml-3 mt-1" />
      </button>
    </form>
  );
}

export default ContactForm;
