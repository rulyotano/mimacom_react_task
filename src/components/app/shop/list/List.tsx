import React from "react";
import urlJoin from "url-join";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { useRouteMatch } from "react-router";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Hidden from "@material-ui/core/Hidden";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Product } from "../../../../helpers/types";
import Loading from "../../../common/components/loading";
import SectionHeader from "../../../common/components/sectionHeader";
import Items from "./ListItemsCollection";
import styles from "./styles";
import Cart from "../cart";

const useStyles = makeStyles(styles);

export const List: React.FunctionComponent<ListPropsProps> = (props: ListPropsProps) => {
  const {
    isLoading,
    data = [],
    load,
    addToCart,
    cartCount,
    toggleFavorite,
    favoriteSubmitItemId
  } = props;
  const match = useRouteMatch();

  const classes = useStyles();

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
    <div className={classes.listRoot}>
      <Box className={classes.listContainer}>
        <SectionHeader
          title="Product List"
          nextCustomComponent={GoToCartButton}
          nextToUrl={cartUrl}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <Items
            data={data}
            addToCart={addToCart}
            toggleFavorite={toggleFavorite}
            favoriteSubmitItemId={favoriteSubmitItemId}
          />
        )}
      </Box>

      <Hidden smDown>
        <Divider orientation="vertical" flexItem className={classes.verticalDivider} />
        <Box className={classes.listCartContainer}>
          <Cart />
        </Box>
      </Hidden>
    </div>
  );
};

interface ListPropsProps {
  isLoading: boolean;
  data: Product[];
  load: Function;
  addToCart: Function;
  cartCount?: number;
  favoriteSubmitItemId: string | null;
  toggleFavorite: Function;
}

export default List;
