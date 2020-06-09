import React from "react";
import { Box } from "@material-ui/core";
import { Product } from "../../../../helpers/types";
import Loading from "../../../common/components/loading";
import SectionHeader from "../../../common/components/sectionHeader";

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
      {isLoading ? (
        <Loading />
      ) : (
        <div>{data.map(it => <span key={it.id}>{JSON.stringify(it)}</span>)}</div>
      )}
    </Box>
  );
};

interface ListPropsProps {
  isLoading: boolean;
  data: Product[];
  load: Function;
}

export default List;
