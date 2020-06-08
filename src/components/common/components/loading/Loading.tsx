import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Typography, makeStyles } from "@material-ui/core";

const Loading = (props: LoadingProps) => {
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
  text: string;
}

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center",
    padding: theme.spacing(6)
  }
}));

Loading.propTypes = {
  text: PropTypes.string
};

Loading.defaultProps = {
  text: ""
};

export default Loading;
