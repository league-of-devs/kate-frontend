import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/style/index.sass";


import Header from "./components/Header";
import Home from "./pages/ProductsPage";
import AuthPage from "./pages/AuthPage";
import ConfigPage from "./pages/ConfigPage";
import ProductPage from "./pages/ProductPage";

function App() {
 
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Header type='productsPage'/>
            <Home/>
          </Route>
          <Route exact path="/auth">
            <Header type='auth'/>
            <AuthPage/>
          </Route>
          <Route path="/product">
            <Header/>
            <ProductPage/>
          </Route>
          <Route path="/config">
            <Header/>
            <ConfigPage/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
