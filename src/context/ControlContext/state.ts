import { TileIndex } from './types';
export interface IControlState {
  tiles: string[][];
  emptyTile: TileIndex;
  possibleMoves: number[];
  win: boolean;
}

export const initialControlState: IControlState = {
  tiles: [],
  emptyTile: {
    row: 0,
    column: 0,
  },
  possibleMoves: [],
  win: false,
};
