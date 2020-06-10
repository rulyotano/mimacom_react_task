import React from "react";
import _ from "lodash";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import { Product } from "../../../../helpers/types";
import ListItem from "./ListItem";
import styles from "./styles";

const useStyles = makeStyles(styles);

const ListItemsCollection: React.FunctionComponent<ItemsProps> = ({
  data,
  addToCart,
  favoriteSubmitItemId,
  toggleFavorite
}) => {
  const PAGE_SIZE = 12;
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const classes = useStyles();

  const [ page, setPage ] = React.useState(1);
  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const pageIndex = page - 1;
  const pagedItems = _(data).drop(PAGE_SIZE * pageIndex).take(PAGE_SIZE).value();

  return (
    <React.Fragment>
      <div className={classes.listFullHeightContainer}>
        <div className={classes.listFullHeightBody}>
          <Grid container spacing={1}>
            {pagedItems.map(it => (
              <Grid key={it.id} item lg={3} md={4} sm={6}>
                <ListItem
                  product={it}
                  addToCart={addToCart}
                  favoriteSubmitItemId={favoriteSubmitItemId}
                  toggleFavorite={toggleFavorite}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.listFullHeightFooter}>
          <Box display="flex" alignItems="center" justifyContent="center" padding={2}>
            <Pagination count={totalPages} page={page} onChange={onPageChange} size="small" />
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
};

interface ItemsProps {
  data: Product[];
  addToCart: Function;
  favoriteSubmitItemId: string | null;
  toggleFavorite: Function;
}

export default ListItemsCollection;
