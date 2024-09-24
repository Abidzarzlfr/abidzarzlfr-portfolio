import React from "react";

const Card = (props) => {
  // console.log("ini props card", props);

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={props.img} alt="Project-Image" />
      </figure>
      <div className="card-body">
        <h2 className="text-lg font-bold">{props.title}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          autem facilis placeat consequatur eum, sapiente enim sint ab unde
          recusandae voluptatem iusto, excepturi praesentium obcaecati
          similique, aperiam provident modi. Cumque.
        </p>
        <div className="card-bottom flex">
          <div className="card-bottom-start pt-2 px-2 flex gap-3 rounded-md bg-base-300">
            {props.firstIcon}
            {props.secondIcon}
            {props.thirdIcon}
            {props.fourthIcon}
          </div>
          <div className="card-bottom-end ml-auto">
            <button className="btn btn-accent btn-outline">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
