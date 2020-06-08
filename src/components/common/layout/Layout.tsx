import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import styles from "./styles";

const useStyles = makeStyles(styles);

export default (props: { children?: React.ReactNode }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Container>{props.children}</Container>
      </div>
    </React.Fragment>
  );
};
