import React from "react";

import "./BannerItem.css";
const BannerItem = ({ slide }) => {
  const { image, id, prev, next, descripton } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img w-full">
        <img src={image} alt="" className="w-full  " />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="lg:text-6xl md:text-5xl text-4xl  font-bold text-white">
          Our Shop
        </h1>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 lg:w-2/5 left-24 top-1/2">
        <p className="lg:text-5xl md:text-4xl text-3xl font-bold text-white">
          {descripton}
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <button className="btn btn-primary text-white rounded-md mr-5 btn-outline ">
          Buy NOw
        </button>
        {/* <button className="btn btn-outline btn-warning">Largest Project</button> */}
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
