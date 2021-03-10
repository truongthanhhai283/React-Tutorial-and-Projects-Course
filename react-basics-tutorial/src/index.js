import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hai Kute")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
