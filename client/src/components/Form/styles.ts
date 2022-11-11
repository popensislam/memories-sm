import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '8px',
  },
  fileInput: {
    width: '97%',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonSubmit: {
    margin: '10px',
    background: '#4A76A8'
  },
});

export { useStyles }