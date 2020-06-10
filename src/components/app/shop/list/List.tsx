import React from "react";
import urlJoin from "url-join";
import Box from "@material-ui/core/Box";
import { useRouteMatch } from "react-router";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Product } from "../../../../helpers/types";
import Loading from "../../../common/components/loading";
import SectionHeader from "../../../common/components/sectionHeader";
import Items from "./ListItemsCollection";

export const List: React.FunctionComponent<ListPropsProps> = (props: ListPropsProps) => {
  const { isLoading, data = [], load, addToCart, cartCount } = props;
  const match = useRouteMatch();

  React.useEffect(
    () => {
      load();
    },
    [ load ]
  );

  const GoToCartButton = (
    <IconButton>
      <Badge color="secondary" badgeContent={cartCount}>
        <ShoppingCart />
      </Badge>
    </IconButton>
  );

  const cartUrl = urlJoin(match.url, "cart");

  return (
    <Box>
      <SectionHeader
        title="Product List"
        nextCustomComponent={GoToCartButton}
        nextToUrl={cartUrl}
      />
      {isLoading ? <Loading /> : <Items data={data} addToCart={addToCart} />}
    </Box>
  );
};

interface ListPropsProps {
  isLoading: boolean;
  data: Product[];
  load: Function;
  addToCart: Function;
  cartCount?: number;
}

export default List;
