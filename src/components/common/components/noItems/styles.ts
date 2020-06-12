import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export default (theme: Theme) =>
  createStyles({
    textContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: theme.spacing(30)
    }
  });
