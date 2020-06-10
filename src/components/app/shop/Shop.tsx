import * as React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import List from "./list";
import Cart from "./cart";
import Wishlist from "./wishlist";

const Shop: React.FunctionComponent<ShopProps> = ({ loadCart }: ShopProps) => {
  const match = useRouteMatch();

  React.useEffect(
    () => {
      loadCart();
    },
    [ loadCart ]
  );

  return (
    <Switch>
      <Route path={`${match.path}/cart`}>
        <Hidden mdUp>
          <Cart />
        </Hidden>
        <Hidden smDown>
          <Redirect to={match.path} />
        </Hidden>
      </Route>
      <Route exact path={`${match.path}/:favorites?`} component={List} />
      <Route path={`${match.path}/wish-list`} component={Wishlist} />
    </Switch>
  );
};

export interface ShopProps {
  loadCart: Function;
}

export default Shop;
