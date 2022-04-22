import React from 'react';
import { Grid, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

interface ITile {
  tile: string;
  positionOfClickedTile: any;
  shuffle: any;
  index: {
    row: number;
    column: number;
  };
}

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  fontFamily: 'Open Sans',
}));

export const Tile = ({ tile, index, positionOfClickedTile }: ITile) => {
  return (
    <Grid item xs={3}>
      <Item
        onClick={() => positionOfClickedTile(index)}
        style={{
          opacity: tile === 'empty' ? 0 : 1,
        }}
      >
        {tile}
      </Item>
    </Grid>
  );
};
