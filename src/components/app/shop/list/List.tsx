import React from "react";
import { Product } from "../../../../helpers/types";
import Loading from "../../../common/components/loading";

export const List: React.FunctionComponent<ListPropsProps> = (props: ListPropsProps) => {
  const { isLoading, data = [], load } = props;

  React.useEffect(
    () => {
      load();
    },
    [ load ]
  );

  if (isLoading) return <Loading />;

  return <div>{data.map(it => <span key={it.id}>{JSON.stringify(it)}</span>)}</div>;
};

interface ListPropsProps {
  isLoading: boolean;
  data: Product[];
  load: Function;
}

export default List;
