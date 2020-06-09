import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export default (theme: Theme) =>
  createStyles({
    card: {},
    cardActions: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    content: {
    },
    textDescription: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      height: theme.spacing(10)
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    }
  });
