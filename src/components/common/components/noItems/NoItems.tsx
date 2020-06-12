import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Loading: React.FunctionComponent<LoadingProps> = (props: LoadingProps) => {
  const { text = "No items" } = props;
  const classes = useStyles();
  return (
    <div className={classes.textContainer}>
      <Typography variant="h5">{text}</Typography>
    </div>
  );
};

interface LoadingProps {
  text?: string;
}

export default Loading;
