import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  regWrapper: {
    background: "#4A76A8",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    position: 'relative',
  },
  animationWrapper: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    transition: "all 0.6s ease",
  },
  animationWrapper2: {
    position: "absolute",
    top: "3300px",
    left: "3300px",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    transition: "all 0.6s ease",
  },
  '@media (max-width: 520px)': {
    flexDirection: 'column',
  },
  block: {
    width: "400px",
    height: "400px",
    background: "red",
  },
  titleSide: {
    width: "50%",
    height: "100%",
  },
  formSide: {
    width: "50%",
    height: "100%",
    background: "#fff",
    padding: '5px 20px',
  },
  signUpTitle: {
    fontWeight: "700",
    fontSize: "29px",
    lineHeight: "25px",
    display: "flex",
    alignItems: "flex-end",
    color: "#fff",
  },
});
