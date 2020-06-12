import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

export default (theme: Theme) =>
  createStyles({
    cartListContainer: {
      [theme.breakpoints.up("md")]: {
        height: `calc(100vh - ${theme.spacing(8)}px)`
      },
      width: "100%",
      minWidth: theme.spacing(40),
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch"
    },
    cartItemsContainer: {
      flexGrow: 1,
      [theme.breakpoints.up("md")]: {
        overflow: "auto"
      }
    },
    cartCheckoutContainer: {
      height: theme.spacing(12),
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    cartCheckoutPrice: {
      marginLeft: theme.spacing(2),
      fontSize: theme.spacing(3)
    },
    listItemContainer: {
      // display: "flex",
      marginTop: theme.spacing(1),
      height: theme.spacing(10)
    },
    listItemImage: {
      width: theme.spacing(12),
      height: "100%",
      float: "left"
    },
    listItemDetails: {
      display: "flex",
      flexDirection: "column",
      width: `calc(100% - ${theme.spacing(12)}px - ${theme.spacing(8)}px)`,
      float: "left"
    },
    listItemPrice: {
      width: theme.spacing(8),
      height: "100%",
      display: "flex",
      alignItems: "center",
      float: "left"
    },
    listItemName: {
      marginBottom: theme.spacing(1),
      width: "100%"
    }
  });
