import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./assets/style/index.sass";

import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Modal from './components/Modal'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container main colored">
        {/* <nav>
          <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
              <Link to="/product">Product</Link>
              </li>
              </ul>
            </nav> */}

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/products">
            <ProductsPage />
          </Route>
          <Route exact path="/">
            <Modal title="kkkk" close />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
