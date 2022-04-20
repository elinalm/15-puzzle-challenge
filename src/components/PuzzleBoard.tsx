import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Box, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

import useStyles from './styles';
import { Tile } from './Tile';
import { TileIndex, useControls } from '../context/ControlContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const PuzzleBoard = () => {
  const classes = useStyles();
  const { tiles, shuffle, moveTile, win } = useControls();

  useEffect(() => {}, [shuffle]);

  const positionOfClickedTile = (index: TileIndex) => {
    moveTile(index);
  };

  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.container} spacing={1} columns={12}>
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
                shuffle={shuffle}
                positionOfClickedTile={positionOfClickedTile}
              />
            ))}
          </React.Fragment>
        ))}
        {win && <Typography>DU VANN</Typography>}
      </Grid>

      <Grid item style={{ margin: 20 }}>
        <Button
          color="inherit"
          variant="contained"
          style={{ color: 'black' }}
          onClick={shuffle}
        >
          Shuffle
        </Button>
      </Grid>
    </Grid>
  );
};
