import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  appBar: {
    margin: "0 0 30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: '5px 50px',
    background: '#4A76A8',
  },
  memoriesLogo: {
    marginLeft: "15px",
  },
  heading: {
    color: 'rgba(0,183,255,1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: 'red'
  }
})