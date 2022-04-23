import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: '200',
    padding: 2,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },

  button: {
    fontFamily: 'Open Sans',
    backgroundColor: '#859AA4',
    color: 'black',
  },
}));
