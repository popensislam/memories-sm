import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  mainWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flexWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  flexColumnWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },

  // IMG PAPER

  flexWrapperImg: {
    width: '39%',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  
  paperCatWrapper: {
    width: '60%',
  },
  imageItem: {
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
  },
});
