import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//Js

//setup vars
const books = [
  {
    id: 1,
    img:
      "https://static01.nyt.com/images/2019/11/21/books/best-books-2019/best-books-2019-mobileMasterAt3x.jpg",
    title: "Title book4",
    author: "Hai1",
  },

  {
    id: 2,
    img:
      "data:image/jpeg;base64,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",
    title: "Title book1",
    author: "Hai2",
  },

  {
    id: 3,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvC2WyxVQWvTLjQ_37kYGy7jjszxjRtS7M3Q&usqp=CAU",
    title: "Title book2",
    author: "Hai3",
  },

  {
    id: 4,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBstXAmkzVK-Ze6Lg_gZMVl57-7Oyvpw6QA&usqp=CAU",
    title: "Title book3",
    author: "Hai4",
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
  return (
    <section className="content">
      {books.map((b, i) => {
        const { img, title, author } = b;
        return (
          //key={b.id}
          //book={b} || {...b}
          <Book key={i} {...b}></Book>
        );
      })}
    </section>
  );
}

// const Book = (props) => {
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;

  // attribute, eventHandle
  // onClick...

  const clickHandle = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };

  const getAuthor = (author) => {
    alert(author);
  };

  const complexExample = (author) => {
    console.log(author);
  };

  const getTitle = (title) => {
    console.log(title);
  };
  

  return (
    <article onMouseOver={() => getTitle(title)}>
      {/* props... */}
      <h1>{title}</h1>
      <h1 onClick={() => getAuthor(author)}>{author}</h1>
      <img src={img} alt="" />
      <button type="button" onClick={() => clickHandle(author)}>
        Click1
      </button>

      <button type="button" onClick={() => complexExample(author)}>
        Click2
      </button>
      {/* <h1>{props.children}</h1> */}
      {/* <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p> */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
