import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

export default (theme: Theme) =>
  createStyles({
    cartListContainer: {
      height: `calc(100vh - ${theme.spacing(8)}px)`,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch"
    },
    cartItemsContainer: {
      flexGrow: 1,
      overflow: "auto"
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
      display: "flex",
      marginTop: theme.spacing(1)
    },
    listItemImage: {
      width: theme.spacing(12),
    },
    listItemName: {
      marginBottom: theme.spacing(1),
    },
    listItemDetails: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1
    },
    listItemPrice: {
      width: theme.spacing(8),
      display: "flex",
      alignItems: "center"
    }
  });
