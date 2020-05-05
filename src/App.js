import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/style/index.sass";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header";
import Home from "./pages/ProductsPage";
import AuthPage from "./pages/AuthPage";
import ConfigPage from "./pages/ConfigPage";
import ProductPage from "./pages/ProductPage";
import api from "./services/api";

function App() {

  const dispatch = useDispatch();

  const user = useSelector(state => state.User);

  const setUser = (User) => {
    dispatch({ type: "CHANGE_USER_DATA", User });
  };

  const setSyncs = (Syncs) => {
    dispatch({ type: "CHANGE_SYNCS_DATA", Syncs });
  };
  
  useEffect(() => {
    if (!user.token) {
      if (!localStorage.getItem("token")) {
        if (document.location.pathname !== "/auth") {
          document.location.replace("/auth");
        }
      }
      
      api.get("/user/info")
        .then(response => {
          setUser(response.data);
        
          api.get("/user/syncs")
            .then(response => {
              if (!response.data.error) {
                setSyncs(response.data);
              }
            });
        })
        .catch(() => {
          if (document.location.pathname !== "/auth")
            document.location.replace("/auth");
        });
    }
  }, []);
    
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route exact path="/auth">
          <Header type='auth'/>
          <AuthPage/>
        </Route>
        <Route path="/product/:platform/:product">
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
