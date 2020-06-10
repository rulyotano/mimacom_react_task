import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export default (theme: Theme) =>
  createStyles({
    card: {},
    cardActions: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    content: {},
    textDescription: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      height: theme.spacing(10)
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    listRoot: {
      display: "flex"
    },
    listContainer: {
      flexGrow: 1,
      position: "relative"
    },
    listCartContainer: {
      width: theme.spacing(60)
    },
    listFullHeightContainer: {
      height: `calc(100vh - ${theme.spacing(8)}px)`,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch"
    },
    listFullHeightBody: {
      flexGrow: 1,
      overflowY: "auto",
      overflowX: "hidden"
    },
    listFullHeightFooter: {
      height: theme.spacing(12)
    },
    verticalDivider: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1)
    },
    favoritesButton: {
      position: "absolute",
      bottom: theme.spacing(10),
      right: theme.spacing(4)
    },
    favoritesButtonActive: {
      color: theme.palette.error.light
    }
  });
