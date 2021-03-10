import React, { Fragment } from "react";
import ReactDom from "react-dom";

// JSX Rules
// return single Element
// div/section/article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function Greeting() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>

      <ul>
        <li>
          <a href="#">Li 1</a>
        </li>

        <li>
          <a href="#">Li 2</a>
        </li>

        <li>
          <a href="#">Li 3</a>
        </li>
      </ul>

      <div></div>
    </React.Fragment>
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
