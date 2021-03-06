import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

export default (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    container: {
      [theme.breakpoints.up("lg")]: {
        maxWidth: "100%"
      }
    }
  });
