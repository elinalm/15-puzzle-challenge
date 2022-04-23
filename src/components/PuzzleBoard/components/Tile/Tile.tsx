import React from 'react';
import { Grid, Paper } from '@mui/material';

import { useControls } from '../../../../context/ControlContext';
import useStyles from './styles';

interface ITile {
  tile: string;
  index: {
    row: number;
    column: number;
  };
}

export const Tile = ({ tile, index }: ITile) => {
  const classes = useStyles();
  const { moveTile } = useControls();

  return (
    <Grid item xs={3}>
      <Paper
        className={classes.tile}
        onClick={() => moveTile(index)}
        style={{
          opacity: tile === 'empty' ? 0 : 1,
        }}
      >
        {tile}
      </Paper>
    </Grid>
  );
};
