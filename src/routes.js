import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import MainLayout from "./hoc/mainLayout";
const Routes = () => (
  <BrowserRouter>
    <Header />
    <MainLayout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default Routes;
