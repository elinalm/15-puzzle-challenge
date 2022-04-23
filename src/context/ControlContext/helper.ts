import React from 'react';
import { TileIndex } from './types';

export const swapPosition = (
  row: number,
  column: number,
  updatedTilesArray: string[][],
  emptyTile: TileIndex
) => {
  [
    updatedTilesArray[row][column],
    updatedTilesArray[emptyTile.row][emptyTile.column],
  ] = [
    updatedTilesArray[emptyTile.row][emptyTile.column],
    updatedTilesArray[row][column],
  ];
};
