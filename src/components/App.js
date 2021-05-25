import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import Layout from "./Layout";
import  Error404  from "./Error404";
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route path="/404" component={Error404} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
