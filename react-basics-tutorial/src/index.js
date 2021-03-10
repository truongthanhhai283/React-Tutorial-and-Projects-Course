import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { data } from "./books";
import SpecificBook from "./book";
import { greeing } from "./testing/testing";

//Js

//setup vars

const names1 = ["join", "susan"];
const newNames = names1.map((x) => {
  return <h1>{x}</h1>;
});
console.log(newNames);

// const title = "Title book";
// const AuthorBook = "Hai";
// const linkImage =
//   "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-mobileMasterAt3x.jpg";

function BookList() {
  console.log(greeing);
  return (
    <section className="content">
      {data.map((b, i) => {
        const { img, title, author } = b;
        return (
          //key={b.id}
          //book={b} || {...b}
          <SpecificBook key={i} {...b}></SpecificBook>
        );
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
