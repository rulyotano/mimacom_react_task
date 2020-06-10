import * as React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import List from "./list";
import Cart from "./cart";
import Wishlist from "./wishlist";

const Shop: React.FunctionComponent<ShopProps> = ({ loadCart }: ShopProps) => {
  const match = useRouteMatch();

  React.useEffect(() => {
    loadCart();
  }, [ loadCart ]);

  return (
    <Switch>
      <Route exact path={`${match.path}/`} component={List} />
      <Route path={`${match.path}/cart`} component={Cart} />
      <Route path={`${match.path}/wish-list`} component={Wishlist} />
    </Switch>
  );
};

export interface ShopProps {
  loadCart: Function;
}

export default Shop;
