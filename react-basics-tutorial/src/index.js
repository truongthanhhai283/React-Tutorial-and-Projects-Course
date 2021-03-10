import React from "react";
import ReactDom from "react-dom";
import './index.css';

//css

function BookList() {
  return (
    <section className="content">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article>
      <BookTitle />
      <Author />
      <ImageBook />
    </article>
  );
};

const ImageBook = () => (
  <article>
    <img
      src="https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-mobileMasterAt3x.jpg"
      alt=""
    />
  </article>
);

const BookTitle = () => (
  <article>
    <h1>The 10 Best Books of 2019</h1>
  </article>
);

const Author = () => <h3>Hai</h3>



ReactDom.render(<BookList />, document.getElementById("root"));
