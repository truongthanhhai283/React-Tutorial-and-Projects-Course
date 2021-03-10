import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//Js

//setup vars
const bookVar1 = {
  imgLink:
    "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-mobileMasterAt3x.jpg",
  title: "Title book",
  AuthorBook: "Hai",
};

const bookVar2 = {
  imgLink:
    "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-mobileMasterAt3x.jpg",
  title: "Title book",
  AuthorBook: "Hai",
};

const bookVar3 = {
  imgLink:
    "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-mobileMasterAt3x.jpg",
  title: "Title book",
  AuthorBook: "Hai",
};

const bookVar4 = {
  imgLink:
    "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-mobileMasterAt3x.jpg",
  title: "Title book",
  AuthorBook: "Hai",
};

// const title = "Title book";
// const AuthorBook = "Hai";
// const linkImage =
//   "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-mobileMasterAt3x.jpg";

function BookList() {
  return (
    <section className="content">
      <Book
        job="dev"
        img={bookVar1.imgLink}
        title={bookVar1.title}
        author={bookVar1.AuthorBook}
      >
        <p>lorem.........</p>
      </Book>
      <Book
        job="dev"
        img={bookVar2.imgLink}
        title={bookVar2.title}
        author={bookVar2.AuthorBook}
      />
      <Book
        job="dev"
        img={bookVar3.imgLink}
        title={bookVar3.title}
        author={bookVar3.AuthorBook}
      />
      <Book
        job="dev"
        img={bookVar4.imgLink}
        title={bookVar4.title}
        author={bookVar4.AuthorBook}
      />
    </section>
  );
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
