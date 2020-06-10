import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import {
  ArrowBackIosSharp as BackIcon,
  ArrowForwardIosSharp as NextIcon
} from "@material-ui/icons";
import styles from "./styles";

const useStyles = makeStyles(styles);

const SectionHeader: React.FunctionComponent<SectionHeaderProps> = (props: SectionHeaderProps) => {
  const {
    title,
    backToUrl,
    nextToUrl,
    backCustomComponent,
    nextCustomComponent,
    backOnClick = () => {},
    nextOnClick = () => {}
  } = props;

  const classes = useStyles();

  const BackComponent = backCustomComponent || (
    <IconButton onClick={() => backOnClick()}>
      <BackIcon />
    </IconButton>
  );

  const NextComponent = nextCustomComponent || (
    <IconButton onClick={() => nextOnClick()}>
      <NextIcon />
    </IconButton>
  );

  return (
    <div className={classes.sectionHeader}>
      <div>
        {backToUrl ? (
          <Hidden mdUp>
            <Link to={backToUrl}>{BackComponent}</Link>
          </Hidden>
        ) : null}
      </div>
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      <div>
        {nextToUrl ? (
          <Hidden mdUp>
            <Link to={nextToUrl}>{NextComponent}</Link>
          </Hidden>
        ) : null}
      </div>
    </div>
  );
};

interface SectionHeaderProps {
  title?: string;
  backToUrl?: string;
  nextToUrl?: string;
  backCustomComponent?: React.ReactNode;
  nextCustomComponent?: React.ReactNode;
  backOnClick?: Function;
  nextOnClick?: Function;
}

export default SectionHeader;
