import React from "react";
import { CircularProgress, Typography, makeStyles } from "@material-ui/core";

const Loading: React.FunctionComponent<LoadingProps> = (props: LoadingProps) => {
  const { text } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress />
      <Typography>{text}</Typography>
    </div>
  );
};

interface LoadingProps {
  text?: string;
}

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center",
    padding: theme.spacing(6)
  }
}));

export default Loading;
