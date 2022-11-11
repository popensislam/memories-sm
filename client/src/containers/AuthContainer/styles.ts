import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles({
  authContainer: {
    height: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    marginTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '26px',
  },
  root: {
    '& .MuiTextField-root': {
      margin: '2px',
    },
  },
  avatar: {
    margin: '2px',
    backgroundColor: 'red',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '16px',
  },
  submit: {
    marginTop: '16px',
  },
  googleButton: {
    marginTop: '12px',
    marginBottom: '6px',
  },
  switch: {
    textDecoration: 'underline',
    cursor: 'pointer',
  }
})