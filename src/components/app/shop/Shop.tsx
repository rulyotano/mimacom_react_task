import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Switch, Route } from "react-router-dom";
import List from "./list";
import Cart from "./cart";
import Wishlist from "./wishlist";

const Shop: React.FunctionComponent<RouteComponentProps> = ({ match }: RouteComponentProps) => (
  <Switch>
    <Route exact path={`${match.path}/`} component={List} />
    <Route path={`${match.path}/cart`} component={Cart} />
    <Route path={`${match.path}/wish-list`} component={Wishlist} />
  </Switch>
);

export default Shop;
