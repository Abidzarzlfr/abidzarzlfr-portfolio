import React from "react";

const Card = (props) => {

  // console.log("ini props card", props);

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={props.img}
          alt="Project-Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-accent btn-outline">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
