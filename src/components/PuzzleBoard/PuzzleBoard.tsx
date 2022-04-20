import React, { useEffect, useState } from 'react';
import { Grid, Button, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

import useStyles from '../styles';
import { Tile } from '../Tiles/Tile';
import { TileIndex, useControls } from '../../context/ControlContext';
import { WinModal } from '../WinModal/WinModal';
import { SHUFFLE } from '../../utils';

export const PuzzleBoard = () => {
  const classes = useStyles();
  const { tiles, shuffle, moveTile, win } = useControls();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        {win && <WinModal />}
      </Grid>

      <Grid item style={{ margin: 20 }}>
        <Button
          color="info"
          variant="contained"
          style={{ color: 'black' }}
          onClick={shuffle}
        >
          {SHUFFLE}
        </Button>
      </Grid>
    </Grid>
  );
};
