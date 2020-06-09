import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

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
