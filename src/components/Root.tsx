import * as React from "react";
import { Route, Redirect, Switch } from "react-router";
import Layout from "./common/layout/Layout";
import Shop from "./app/shop";

const Root: React.FunctionComponent = () => (
  <Layout>
    <Switch>
      <Route exact path="/">
        <Redirect to="shop" />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
    </Switch>
  </Layout>
);

export default Root;
