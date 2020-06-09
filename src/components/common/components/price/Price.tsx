import React from "react";
import Typography from "@material-ui/core/Typography";

const SectionHeader: React.FunctionComponent<SectionHeaderProps> = (props: SectionHeaderProps) => {
  const { value = 0, currencySymbol = "$" } = props;

  return (
    <Typography>
      {value}
      {currencySymbol}
    </Typography>
  );
};

interface SectionHeaderProps {
  value?: number;
  currencySymbol?: string;
}

export default SectionHeader;
