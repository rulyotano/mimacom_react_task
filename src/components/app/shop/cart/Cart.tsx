import React from "react";
import { useHistory } from "react-router";
import Box from "@material-ui/core/Box";
import SectionHeader from "../../../common/components/sectionHeader";

const Cart: React.FunctionComponent = () => {
  const history = useHistory();

  const goBack = () => history.goBack();

  return (
    <Box>
      <SectionHeader title="Cart" backToUrl="#" backOnClick={goBack} />
      Cart
    </Box>
  );
};

export default Cart;
