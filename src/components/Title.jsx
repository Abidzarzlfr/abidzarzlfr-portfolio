import React from "react";

const Title = (props) => {
  return (
    <div className="title">
      <code className="text-2xl font-semibold text-secondary">{props.value}</code>
    </div>
  );
};

export default Title;
