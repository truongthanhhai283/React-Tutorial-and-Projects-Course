import React from "react";

// const Book = (props) => {
const SpecificBook = ({ img, title, author }) => {
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

export default SpecificBook;
