import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  listText: {
    '& span': {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "27px",
      color: "#2A5885",
    }
  },
  notif: {
    width: '20px',
    height: '20px',
    fontSize: '14px',
    background: '#D3D9DE',
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
