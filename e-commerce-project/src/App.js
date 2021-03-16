import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import Testing from "./Testing";

/*import styled from "styled-components";

const Button = styled.button`
  background: green;
  color: white;
  font-size: 20px;
`;

const Container = styled.div`
  color: white;
  background: red;
  .hero {
    color: blueviolet;
  }
`;

const Container2 = styled.div`
  background: red;
  color: white;
  .hero {
    font-size: 1rem;
  }
`;*/

function App() {
  return (
    <div>
      <h4>comfy sloth starter</h4>
      {/* <Button>Click me</Button>
      <Container>
        <div>
          <h1 className="hero">Hero text</h1>
        </div>
      </Container>

      <Container2>
        <div>
          <h1 className="hero">Hero world</h1>
        </div>
      </Container2> */}

      <Testing />
    </div>
  );
}

export default App;
