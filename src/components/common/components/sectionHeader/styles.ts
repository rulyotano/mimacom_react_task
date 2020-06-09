import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export default (theme: Theme) =>
  createStyles({
    sectionHeader: {
      height: theme.spacing(8),
      display: "flex",
      backgroundColor: theme.palette.background.paper,
      justifyContent: "space-between",
      alignItems: "center"
    },
    headerItem: {
      
    },
    title: {
    },
  });
