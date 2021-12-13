import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Product } from "./pages/product/Product";
import { ProductList } from "./pages/productlist/ProductList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
