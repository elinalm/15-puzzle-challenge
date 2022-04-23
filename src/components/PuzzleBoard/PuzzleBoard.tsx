import React, { useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { useMediaQuery, useTheme } from '@material-ui/core';

import useStyles from './styles';
import { useControls } from '../../context/ControlContext';
import { SHUFFLE } from '../../utils';
import { Tile, WinModal } from './components';

export const PuzzleBoard = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { tiles, shuffle, win } = useControls();

  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const boardWidth = matches ? 350 : 500;

  useEffect(() => {
    shuffle();
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid
        container
        width={boardWidth}
        className={classes.container}
        spacing={1}
        columns={12}
      >
        {tiles.map((item, row) => (
          <React.Fragment key={row}>
            {item.map((tile, column) => (
              <Tile
                key={tile}
                tile={tile}
                index={{
                  row: row,
                  column: column,
                }}
              />
            ))}
          </React.Fragment>
        ))}
        {win && <WinModal />}
      </Grid>
      <Grid item className={classes.buttonContainer}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={shuffle}
        >
          {SHUFFLE}
        </Button>
      </Grid>
    </Grid>
  );
};
