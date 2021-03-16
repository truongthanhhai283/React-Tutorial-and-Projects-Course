import React from "react";

import styled from "styled-components";

const Testing = () => {
  return (
    <Wrapper>
      <h3>Hello World</h3>

      <div className="article">
        <p>Hello people</p>
      </div>
      <button>Click me</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3 {
    color: purple;
  }

  .article {
    p {
      color: blue;
    }
  }
`;

export default Testing;
