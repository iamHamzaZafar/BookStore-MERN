import React from "react";

const Cards = ({item}) => {
    console.log(item);
  return (
    <>
    <div className="mt-4 mb-4">


      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img
            src={item.image}
            alt="Book image "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{item.price}$</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer duration-200 ">Buy Now</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cards;
