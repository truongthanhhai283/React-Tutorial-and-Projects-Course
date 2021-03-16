import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import Testing from "./Testing";

import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  Private,
} from "./pages";

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

      {/* <Testing /> */}

      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/products">
            <Products />
          </Route>

          <Route exact path="/singleProduct">
            <SingleProduct />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/error">
            <Error />
          </Route>

          <Route exact path="/checkout">
            <Checkout />
          </Route>

          <Route exact path="/private">
            <Private />
          </Route>

          <Route exact path="/product/:id" children={<SingleProduct />}>
            <Private />
          </Route>

          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
