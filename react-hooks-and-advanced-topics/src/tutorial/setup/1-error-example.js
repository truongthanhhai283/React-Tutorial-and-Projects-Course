import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    const title = "Hello World";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        Click
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
