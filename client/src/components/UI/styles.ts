import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  dialogColumn: {
    "& .MuiPaper-root": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  listItemText: {
    "& p": {
      color: "#000",
      fontSize: "18px",
    },
    "& span": {
      color: "#000",
      fontSize: "18px",
      fontWeight: "700",
    },
  },
});
