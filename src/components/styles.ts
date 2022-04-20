import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#435861',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#607d8b',
    padding: 20,
    maxWidth: 500,
  },
}));
