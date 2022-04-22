import React, { useState } from 'react';

import {
  IControlContext,
  initialControlContext,
  ControlContext,
} from './context';
import { IControlState, initialControlState, TileIndex } from './state';
import { swapPosition } from '../../components/helper';

interface IControlProvider {
  children: React.ReactNode;
}

const ControlProvider = ({ children }: IControlProvider) => {
  const [controlerState, setControlerState] = React.useState<IControlState>({
    ...initialControlState,
    tiles: [
      ['1', '2', '3', '4'],
      ['5', '6', '7', '8'],
      ['9', '10', '11', '12'],
      ['13', '14', '15', 'empty'],
    ],
    emptyTile: {
      row: 3,
      column: 3,
    },
    win: false,
  });

  const findEmptyTile = () => {
    for (let i = 0; i < controlerState.tiles.length; i++) {
      for (let j = 0; j < controlerState.tiles[i].length; j++) {
        if (controlerState.tiles[i][j] === 'empty') {
          return { row: i, column: j };
        }
      }
    }
  };

  const shuffleTiles = () => {
    const shuffledRows = [
      ...controlerState.tiles.sort(() => Math.random() - 0.5),
    ];
    for (let i = 0; i < shuffledRows.length; i++) {
      shuffledRows[i].sort(() => Math.random() - 0.5);
    }
    return shuffledRows;
  };
  const victory = () => {
    setControlerState((state) => ({
      ...state,
      win: controlerState.tiles.every((row, rowI) =>
        row.every((cell, cellI) => {
          return parseInt(cell) === rowI * 4 + cellI + 1 || cell === 'empty';
        })
      ),
    }));
  };

  const moveTile = (clicked: TileIndex) => {
    const updatedTilesArray = [...controlerState.tiles];
    if (
      (clicked.row === controlerState.emptyTile.row + 1 &&
        clicked.column === controlerState.emptyTile.column) ||
      (clicked.row === controlerState.emptyTile.row - 1 &&
        clicked.column === controlerState.emptyTile.column)
    ) {
      swapPosition(
        clicked.row,
        clicked.column,
        updatedTilesArray,
        controlerState.emptyTile
      );
    }
    if (
      (clicked.column === controlerState.emptyTile.column + 1 &&
        clicked.row === controlerState.emptyTile.row) ||
      (clicked.column === controlerState.emptyTile.column - 1 &&
        clicked.row === controlerState.emptyTile.row)
    ) {
      swapPosition(
        clicked.row,
        clicked.column,
        updatedTilesArray,
        controlerState.emptyTile
      );
    }
    if (
      clicked.column === controlerState.emptyTile.column + 2 &&
      clicked.row === controlerState.emptyTile.row
    ) {
      swapPosition(
        clicked.row,
        controlerState.emptyTile.column + 1,
        updatedTilesArray,
        controlerState.emptyTile
      );
    }

    if (
      clicked.row === controlerState.emptyTile.row - 2 &&
      clicked.column === controlerState.emptyTile.column
    ) {
      swapPosition(
        controlerState.emptyTile.row - 1,
        clicked.column,
        updatedTilesArray,
        controlerState.emptyTile
      );
    }

    if (
      clicked.row === controlerState.emptyTile.row + 2 &&
      clicked.column === controlerState.emptyTile.column
    ) {
      swapPosition(
        controlerState.emptyTile.row + 1,
        clicked.column,
        updatedTilesArray,
        controlerState.emptyTile
      );
    }

    if (
      clicked.column === controlerState.emptyTile.column - 2 &&
      clicked.row === controlerState.emptyTile.row
    ) {
      swapPosition(
        clicked.row,
        controlerState.emptyTile.column - 1,
        updatedTilesArray,
        controlerState.emptyTile
      );
    }

    const emptyRowAndCol = findEmptyTile();
    setControlerState((state) => ({
      ...state,
      tiles: updatedTilesArray,
      emptyTile: emptyRowAndCol ?? { column: 0, row: 0 },
    }));
    victory();
  };

  const config: IControlContext = {
    ...initialControlContext,
    ...controlerState,
    shuffle: () => {
      const shuffle = shuffleTiles();
      const emptyRowAndCol = findEmptyTile();
      setControlerState((state) => ({
        ...state,
        tiles: shuffle,
        emptyTile: emptyRowAndCol ?? { row: 0, column: 0 },
      }));
    },
    moveTile,
  };

  return (
    <ControlContext.Provider value={config}>{children}</ControlContext.Provider>
  );
};

export { ControlProvider };
