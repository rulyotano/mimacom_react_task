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
  const { title, backToUrl, nextToUrl } = props;
  const classes = useStyles();

  return (
    <div className={classes.sectionHeader}>
      <div>
        {backToUrl ? (
          <Hidden mdUp>
            <Link to={backToUrl}>
              <IconButton>
                <BackIcon />
              </IconButton>
            </Link>
          </Hidden>
        ) : null}
      </div>
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      <div>
        {nextToUrl ? (
          <Hidden mdUp>
            <Link to={nextToUrl}>
              <IconButton>
                <NextIcon />
              </IconButton>
            </Link>
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
}

export default SectionHeader;
