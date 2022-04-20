import React from 'react';
import { IControlState, initialControlState, TileIndex } from './state';

export interface IControlContext extends IControlState {
  shuffle: () => void;
  moveTile: (tileIndex: TileIndex) => void;
  findEmptyTile: () => void;
  victory: () => void;
}

const notImplemented = () => {
  console.log('not implemented');
};

export const initialControlContext: IControlContext = {
  ...initialControlState,
  shuffle: notImplemented,
  moveTile: notImplemented,
  findEmptyTile: notImplemented,
  victory: notImplemented,
};

export const ControlContext = React.createContext<IControlContext>(
  initialControlContext
);
