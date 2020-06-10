import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import styles from "./styles";
import CartList from "../../../../helpers/types/CartItem";
import Price from "../../../common/components/price";

const useStyles = makeStyles(styles);

const CartListItem: React.FunctionComponent<CartItemProps> = (props: CartItemProps) => {
  const { item, addItem, removeItem } = props;

  const classes = useStyles();

  return (
    <Card className={classes.listItemContainer}>
      <CardMedia className={classes.listItemImage} image={item.imageUrl} title={item.name} />
      <div className={classes.listItemDetails}>
        <CardContent>
          <Typography className={classes.listItemName} variant="h6">
            {item.name}
          </Typography>
          <ButtonGroup size="small" variant="text">
            <Button onClick={() => addItem(item.id)}>
              <AddIcon />
            </Button>
            <Button>{item.amount}</Button>
            <Button onClick={() => removeItem(item.id)}>
              <RemoveIcon />
            </Button>
          </ButtonGroup>
        </CardContent>
      </div>
      <div className={classes.listItemPrice}>
        <Price value={item.price} />
      </div>
    </Card>
  );
};

interface CartItemProps {
  item: CartList;
  addItem: Function;
  removeItem: Function;
}

export default CartListItem;
