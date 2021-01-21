import {
  BattleShipState,
  BattleShipActionTypes,
  SET_OPPONENT_SHIPS,
  SET_OPPONENT_CELLS,
  SET_SHIPS_DICTIONARY,
  CLEAR_PLAYER_DATA,
} from './types';
import { CellType } from 'types/cell';
import { ShipLayout, Layout, ShipTypes } from 'types/game';

const initialState: BattleShipState = {
  shipsDictionary: {} as ShipTypes,
  opponentShips: {} as ShipLayout,
  opponentCells: [],
};

export function appReducer(
  state = initialState,
  action: BattleShipActionTypes,
): BattleShipState {
  switch (action.type) {
    case SET_SHIPS_DICTIONARY:
      return {
        ...state,
        shipsDictionary: action.payload,
      };
    case SET_OPPONENT_SHIPS:
      return {
        ...state,
        opponentShips: action.payload,
      };
    case SET_OPPONENT_CELLS:
      return {
        ...state,
        opponentCells: action.payload,
      };
    case CLEAR_PLAYER_DATA:
      return {
        ...state,
        shipsDictionary: {} as ShipTypes,
        opponentShips: {} as ShipLayout,
        opponentCells: [],
      };
    default:
      return state;
  }
}
