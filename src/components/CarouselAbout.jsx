import React from "react";

const CarouselAbout = ({ imgSrc, date, title }) => {
  return (
    <div className="carousel-item relative">
      <img src={imgSrc} alt="carousel-item" className="rounded-box" />
      <div className="absolute bottom-8 left-1">
        <button className="btn btn-xs btn-primary rounded-xl rounded-tr-none rounded-l-none">{title}</button>
      </div>
      <div className="absolute bottom-1 left-1">
        <button className="btn btn-xs btn-secondary rounded-xl rounded-tl-none">{date}</button>
      </div>
    </div>
  );
};

export default CarouselAbout;
