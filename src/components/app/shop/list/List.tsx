import React from "react";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { useParams, useHistory } from "react-router";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import Badge from "@material-ui/core/Badge";
import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
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
  const history = useHistory();
  const classes = useStyles();
  const params = useParams<ExpectedParams>();
  const { favorites } = params;

  const isFavorites = Boolean(favorites);
  const favoriteText = isFavorites ? "Show all items" : "Show favorite items";
  const onFavoriteClick = () => {
    if (isFavorites) {
      history.push("/shop");
    } else {
      history.push("/shop/favorites");
    }
  };

  React.useEffect(
    () => {
      load(isFavorites);
    },
    [ load, isFavorites ]
  );

  const GoToCartButton = (
    <IconButton>
      <Badge color="secondary" badgeContent={cartCount}>
        <ShoppingCart />
      </Badge>
    </IconButton>
  );

  const cartUrl = "/shop/cart";

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
          <React.Fragment>
            <Items
              data={data}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
              favoriteSubmitItemId={favoriteSubmitItemId}
              isFavoriteList={isFavorites}
            />
            <Tooltip title={favoriteText}>
              <Fab
                onClick={onFavoriteClick}
                className={clsx(classes.favoritesButton, {
                  [classes.favoritesButtonActive]: isFavorites
                })}
              >
                <FavoriteIcon />
              </Fab>
            </Tooltip>
          </React.Fragment>
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

interface ExpectedParams {
  favorites?: string;
}

export default List;
