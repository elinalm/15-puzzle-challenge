import React from 'react';
import { EmptyTile } from '../context/ControlContext/types';

export const swapPosition = (
  row: number,
  column: number,
  updatedTilesArray: string[][],
  emptyTile: EmptyTile
) => {
  [
    updatedTilesArray[row][column],
    updatedTilesArray[emptyTile.row][emptyTile.column],
  ] = [
    updatedTilesArray[emptyTile.row][emptyTile.column],
    updatedTilesArray[row][column],
  ];
};
