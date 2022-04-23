import React from 'react';
import { IControlState, initialControlState } from './state';
import { TileIndex } from './types';

export interface IControlContext extends IControlState {
  shuffle: () => void;
  moveTile: (tileIndex: TileIndex) => void;
  findEmptyTile: () => void;
}

const notImplemented = () => {
  console.log('not implemented');
};

export const initialControlContext: IControlContext = {
  ...initialControlState,
  shuffle: notImplemented,
  moveTile: notImplemented,
  findEmptyTile: notImplemented,
};

export const ControlContext = React.createContext<IControlContext>(
  initialControlContext
);
