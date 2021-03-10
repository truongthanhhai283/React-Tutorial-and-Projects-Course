import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//Js

//setup vars
const books = [
  {
    imgLink:
      "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-mobileMasterAt3x.jpg",
    title: "Title book",
    AuthorBook: "Hai",
  },

  {
    imgLink:
      "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-mobileMasterAt3x.jpg",
    title: "Title book",
    AuthorBook: "Hai",
  },

  {
    imgLink:
      "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-mobileMasterAt3x.jpg",
    title: "Title book",
    AuthorBook: "Hai",
  },

  {
    imgLink:
      "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-mobileMasterAt3x.jpg",
    title: "Title book",
    AuthorBook: "Hai",
  },
];

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
  return <section className="content">{newNames}</section>;
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;
  console.log(children);
  return (
    <article>
      {/* props... */}
      <h1>{title}</h1>
      <h1>{author}</h1>
      {children}
      <img src={img} alt="" />
      {/* <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p> */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
