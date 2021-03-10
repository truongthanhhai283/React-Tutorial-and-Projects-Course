import React from "react";
import ReactDom from "react-dom";
import './index.css';

//Js

function BookList() {
  return (
    <section className="content">
      <Book />
    </section>
  );
}

const author="Truong Thanh Hai"

const Book = () => {
  const title="Title book"
  return (
    <article>
      <h1>{title}</h1>
      <h1>{author.toUpperCase()}</h1>
      <img
      src="https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-mobileMasterAt3x.jpg"
      alt=""
    />
    <p>{6+12}</p>
    </article>
  );
};


const Author = () => <h3 style={{color:'blue',fontSize:'20px'}}>Hai</h3>



ReactDom.render(<BookList />, document.getElementById("root"));
