import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export default (theme: Theme) =>
  createStyles({
    overflowText: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    containerSpaceBetween: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    favoriteColor: {
      color: theme.palette.error.light
    }
  });
