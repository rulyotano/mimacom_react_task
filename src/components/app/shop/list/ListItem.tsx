import React from "react";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import { Product } from "../../../../helpers/types";
import Price from "../../../common/components/price";
import globalStyles from "../../../../styles";
import styles from "./styles";

const useStyles = makeStyles(styles);
const useGlobalStyles = makeStyles(globalStyles);

const ListItem: React.FunctionComponent<ListItemProps> = (props: ListItemProps) => {
  const { product, addToCart, toggleFavorite, favoriteSubmitItemId } = props;
  const classes = useStyles();
  const classesGlobal = useGlobalStyles();

  const isSubmittingFavorite = Boolean(favoriteSubmitItemId);
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={product.image_url} title={product.productName} />
      <CardContent className={classes.content}>
        <Box className={classesGlobal.containerSpaceBetween}>
          <Typography className={classesGlobal.overflowText} variant="h6">
            {product.productName}
          </Typography>
          <Price value={product.price} />
        </Box>
        <Tooltip title={product.productDescription}>
          <Typography
            className={classes.textDescription}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {product.productDescription}
          </Typography>
        </Tooltip>
      </CardContent>
      <CardActions className={clsx(classesGlobal.containerSpaceBetween, classes.cardActions)}>
        <IconButton
          onClick={() => toggleFavorite(product.id)}
          className={clsx({ [classesGlobal.favoriteColor]: product.favorite })}
          disabled={isSubmittingFavorite}
        >
          <FavoriteIcon />
        </IconButton>
        <Typography className={classesGlobal.overflowText}>{product.stock} left</Typography>
        <Button onClick={() => addToCart(product)}>
          <AddIcon /> Add
        </Button>
      </CardActions>
    </Card>
  );
};

interface ListItemProps {
  product: Product;
  addToCart: Function;
  favoriteSubmitItemId: string | null;
  toggleFavorite: Function;
}

export default ListItem;
