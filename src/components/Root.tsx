import * as React from "react";
import { Route, Redirect } from "react-router";
import Layout from "./common/layout/Layout";
import Shop from "./app/shop";

export default () => (
  <Layout>
    <Route exact path="/" render={() => <Redirect to="shop" />} />
    <Route path="/shop" component={Shop} />
  </Layout>
);
