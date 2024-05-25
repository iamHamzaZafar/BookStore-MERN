import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useForm } from "react-hook-form"

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <Navbar />
      <div className=" min-h-screen flex items-center justify-center">
        <div className=" w-full md:w-1/2  md:mt-32  ">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
          <br />
          {errors.text && (
                  <span className="text-sm text-red-500 ">
                    This field is required
                  </span>
                )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
          <br />
          {errors.email && (
                  <span className="text-sm text-red-500 ">
                    This field is required
                  </span>
                )}
        </div>

        <div className="mb-4">
          <label htmlFor="contactNo" className="block text-gray-700 font-bold mb-2">Contact No</label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            {...register("text", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
          <br />
          {errors.text && (
                  <span className="text-sm text-red-500 ">
                    This field is required
                  </span>
                )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;

