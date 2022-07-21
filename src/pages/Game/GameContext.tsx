import React from 'react';

export type GameState = {
  inProgress: boolean;
  board: Cell[];
  queen: keyof Players;
  winner: keyof Players | null;
  playersPosition: (keyof Players)[];
  playerMove: number;
  players: Players;
};

type Cell = {
  small: CellInfo | null;
  medium: CellInfo | null;
  large: CellInfo | null;
};
type CellInfo = {
  color: string;
  player: string;
};

type Players = Record<string, Player>;
type Player = {
  score: number;
  color: string;
  connected: boolean;
  chips: {
    small: number;
    medium: number;
    large: number;
  };
};

type GameContextProps = {
  game: GameState;
  cellSelected: number | null;
  setCellSelected: (i: number | null) => void;
};

export const GameContext = React.createContext<GameContextProps>(undefined!);
