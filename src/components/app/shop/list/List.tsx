import React from "react";
import _ from "lodash";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import { Product } from "../../../../helpers/types";
import Loading from "../../../common/components/loading";
import SectionHeader from "../../../common/components/sectionHeader";
import ListItem from "./ListItem";

export const List: React.FunctionComponent<ListPropsProps> = (props: ListPropsProps) => {
  const { isLoading, data = [], load } = props;

  React.useEffect(
    () => {
      load();
    },
    [ load ]
  );

  return (
    <Box>
      <SectionHeader title="Product List" />
      {isLoading ? <Loading /> : <Items data={data} />}
    </Box>
  );
};

const Items: React.FunctionComponent<ItemsProps> = ({ data }) => {
  const PAGE_SIZE = 12;
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const [ page, setPage ] = React.useState(1);
  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const pageIndex = page - 1;
  const pagedItems = _(data).drop(PAGE_SIZE * pageIndex).take(PAGE_SIZE).value();

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        {pagedItems.map(it => (
          <Grid key={it.id} item md={3} sm={4}>
            <ListItem product={it} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" alignItems="center" justifyContent="center" padding={2}>
        <Pagination count={totalPages} page={page} onChange={onPageChange} />
      </Box>
    </React.Fragment>
  );
};

interface ListPropsProps {
  isLoading: boolean;
  data: Product[];
  load: Function;
}

interface ItemsProps {
  data: Product[];
}

export default List;
