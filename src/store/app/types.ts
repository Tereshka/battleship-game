import { ShipLayout, ShipTypes } from 'types/game';
import { CellType } from 'types/cell';

export const SET_SHIPS_DICTIONARY = 'SET_SHIPS_DICTIONARY';
export const SET_OPPONENT_SHIPS = 'SET_OPPONENT_SHIPS';
export const SET_OPPONENT_CELLS = 'SET_OPPONENT_CELLS';
export const CLEAR_PLAYER_DATA = 'CLEAR_PLAYER_DATA';
export const HIT_CELL = 'HIT_CELL';
export const UPDATE_SHIP_HIT = 'UPDATE_SHIP_HIT';
export const SET_MAX_POINTS = 'SET_MAX_POINTS';

export type BattleShipState = {
  shipsDictionary: ShipTypes;
  opponentShips: ShipLayout;
  opponentCells: CellType[][];
  playerPoints: number;
  maxPoints: number;
};

interface SetShipsDictionaryAction {
  type: typeof SET_SHIPS_DICTIONARY;
  payload: ShipTypes;
}

interface SetOpponentsShipsAction {
  type: typeof SET_OPPONENT_SHIPS;
  payload: ShipLayout;
}

interface SetOpponentsCellsAction {
  type: typeof SET_OPPONENT_CELLS;
  payload: CellType[][];
}

interface ClearPlayerDataAction {
  type: typeof CLEAR_PLAYER_DATA;
}

interface HitCellAction {
  type: typeof HIT_CELL;
  payload: CellType;
}

interface UpdateShipHitAction {
  type: typeof UPDATE_SHIP_HIT;
  payload: string;
}

interface SetMaxPointsAction {
  type: typeof SET_MAX_POINTS;
  payload: number;
}

export type BattleShipActionTypes =
  | SetShipsDictionaryAction
  | SetOpponentsShipsAction
  | SetOpponentsCellsAction
  | HitCellAction
  | UpdateShipHitAction
  | ClearPlayerDataAction
  | SetMaxPointsAction;
