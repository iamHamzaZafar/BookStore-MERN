import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const About = () => {
  return (
    <>
     <Navbar /> 
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 mb-4">
            Welcome to MERN Book store , your go-to destination for book
            lovers everywhere. Our mission is to provide a vast selection of
            books across all genres, ensuring that every reader can find
            something to enjoy.
          </p>
          <p className="text-gray-700 mb-4">
            Our platform is built using the latest technologies, including the
            MERN stack (MongoDB, Express.js, React, and Node.js), to deliver a
            seamless and enjoyable browsing and shopping experience.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you are looking for the latest bestseller or a rare classic,
            we are here to help you discover your next great read. Join our
            community of readers and experience the joy of finding and sharing
            books with others.
          </p>
          <p className="text-gray-700">
            Thank you for choosing [Your Book Store Name]. We are committed to
            making your book shopping experience as enjoyable and rewarding as
            possible.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
