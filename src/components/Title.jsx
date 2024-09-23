import React from "react";

const Title = (props) => {
  return (
    <div className="title">
      <button className="btn btn-wide btn-outline btn-secondary">
        <code className="text-lg font-extrabold">
          {props.value}
        </code>
      </button>
    </div>
  );
};

export default Title;
