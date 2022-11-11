import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  paperWrapper: {
    width: "60%",
    padding: "14px 0",
  },
  profileTItle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "26px",
    lineHeight: "27px",
    color: "#000000",
  },
  activities: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#000000",
    margin: "4px 0 14px 0",
  },
  aboutMe: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "18px",
    color: "#000000",
    margin: "18px 0",
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  postAddIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35px',
    height: '35px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      background: '#D3D9DE',
    },
  },
  postAccPaper: {
    width: '100%',
  },
});
