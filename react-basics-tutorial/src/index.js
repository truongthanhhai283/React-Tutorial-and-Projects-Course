import React from "react";
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
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>Test</h1>;
const Message = () => {
  return <h1>This's a message</h1>
};

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hai Kute")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
