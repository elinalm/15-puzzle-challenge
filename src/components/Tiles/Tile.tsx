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
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
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
