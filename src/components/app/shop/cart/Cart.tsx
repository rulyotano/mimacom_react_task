import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SectionHeader from "../../../common/components/sectionHeader";
import CartItem from "../../../../helpers/types/CartItem";
import styles from "./styles";
import Price from "../../../common/components/price";
import CartListItem from "./CartListItem";
import NoItems from "../../../common/components/noItems";

const useStyles = makeStyles(styles);

const Cart: React.FunctionComponent<CartProps> = props => {
  const { items, totalPrice, addItem, removeItem } = props;

  const classes = useStyles();

  const showNoItemsText = items.length === 0;
  return (
    <Box>
      <SectionHeader title="Cart" backToUrl="/shop" />
      <div className={classes.cartListContainer}>
        <div className={classes.cartItemsContainer}>
          {items.map(it => (
            <CartListItem key={it.id} item={it} addItem={addItem} removeItem={removeItem} />
          ))}
          {showNoItemsText ? <NoItems text="Your shopping cart is empty"/> : null}
        </div>
        <div className={classes.cartCheckoutContainer}>
          <Button variant="outlined">Checkout</Button>
          <Price className={classes.cartCheckoutPrice} value={totalPrice} />
        </div>
      </div>
    </Box>
  );
};

interface CartProps {
  addItem: Function;
  removeItem: Function;
  items: CartItem[];
  totalPrice: number;
}

export default Cart;
