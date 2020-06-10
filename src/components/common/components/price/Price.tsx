import React from "react";
import Typography from "@material-ui/core/Typography";

const SectionHeader: React.FunctionComponent<SectionHeaderProps> = (props: SectionHeaderProps) => {
  const { value = 0, currencySymbol = "$", className } = props;

  return (
    <Typography className={className}>
      {value}
      {currencySymbol}
    </Typography>
  );
};

interface SectionHeaderProps extends React.HTMLAttributes<SectionHeaderProps> {
  value?: number;
  currencySymbol?: string;
}

export default SectionHeader;
