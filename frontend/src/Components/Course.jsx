import React from "react";
import List from "../../public/list.json"
import Cards from "./Cards";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We are delighted to have you{" "}
            <span className=" text-pink-500">Here :)</span>
          </h1>
          <p className="mt-12 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            suscipit maxime harum impedit ipsam veniam aperiam sit, numquam ea
            obcaecati nobis vitae similique modi exercitationem beatae nulla
            deserunt excepturi dicta ratione placeat aspernatur aut soluta
            necessitatibus. Aliquid nisi unde placeat.
          </p>
          <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
        </div>
        <div>
         {
          List.map((item)=>(
            <Cards item={item} key={item.id} />
          ))
         }
        </div>
      </div>
    </>
  );
};

export default Course;
