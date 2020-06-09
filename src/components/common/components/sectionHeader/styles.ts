import { Theme, createStyles } from "@material-ui/core/styles";

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
