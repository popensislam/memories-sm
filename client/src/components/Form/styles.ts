import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  paper: {
    padding: '4px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '8px',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
});

export { useStyles }