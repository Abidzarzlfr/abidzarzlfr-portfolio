import React from "react";
import { LuExternalLink } from "react-icons/lu";

const Card = (props) => {
  const handleButtonClick = () => {
    if (props.url) {
      window.open(props.url, "_blank");
    } else {
      window.location.href = window.location.origin;
    }
  };

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={props.img} alt="Project-Image" />
      </figure>
      <div className="card-body">
        <h2 className="text-lg font-bold">{props.title}</h2>
        <p>{props.body}</p>
        <div className="card-bottom flex">
          <div className="card-bottom-start pt-2 px-2 flex gap-3 rounded-md bg-base-300">
            {props.firstIcon}
            {props.secondIcon}
            {props.thirdIcon}
            {props.fourthIcon}
          </div>
          <div className="card-bottom-end ml-auto">
            <button
              className="btn btn-accent btn-outline"
              onClick={handleButtonClick}
            >
              <LuExternalLink className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
