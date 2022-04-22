import React, { useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { useMediaQuery, useTheme } from '@material-ui/core';

import useStyles from './styles';
import { Tile } from '../Tiles/Tile';
import { TileIndex, useControls } from '../../context/ControlContext';
import { WinModal } from '../WinModal/WinModal';
import { SHUFFLE } from '../../utils';

export const PuzzleBoard = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { tiles, shuffle, moveTile, win } = useControls();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const boardWidth = matches ? 350 : 500;

  useEffect(() => {}, [shuffle]);

  const positionOfClickedTile = (index: TileIndex) => {
    moveTile(index);
  };

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
                shuffle={shuffle}
                positionOfClickedTile={positionOfClickedTile}
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
