import {
  BattleShipState,
  BattleShipActionTypes,
  SET_OPPONENT_SHIPS,
  SET_OPPONENT_CELLS,
  SET_SHIPS_DICTIONARY,
  CLEAR_PLAYER_DATA,
  HIT_CELL,
  UPDATE_SHIP_HIT,
  SET_MAX_POINTS,
} from './types';
import { CellType } from 'types/cell';
import { ShipLayout, Layout, ShipTypes } from 'types/game';

const initialState: BattleShipState = {
  shipsDictionary: {} as ShipTypes,
  opponentShips: {} as ShipLayout,
  opponentCells: [],
  playerPoints: 0,
  maxPoints: 0,
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
    case HIT_CELL: {
      const cells = hitCell(state.opponentCells, action.payload);
      return {
        ...state,
        opponentCells: cells,
      };
    }
    case UPDATE_SHIP_HIT: {
      const shipId = action.payload;
      const { hittedShip, points } = updateShipHit(state, shipId);
      return {
        ...state,
        opponentShips: { ...state.opponentShips, [shipId]: hittedShip },
        playerPoints: points,
      };
    }
    case SET_MAX_POINTS:
      return {
        ...state,
        maxPoints: action.payload,
      };
    case CLEAR_PLAYER_DATA:
      return {
        ...state,
        shipsDictionary: {} as ShipTypes,
        opponentShips: {} as ShipLayout,
        opponentCells: [],
        playerPoints: 0,
        maxPoints: 0,
      };
    default:
      return state;
  }
}

function hitCell(cells: CellType[][], cell: CellType): CellType[][] {
  const newCells = [...[...cells]];
  const updatedCell = newCells[cell.coordinates[0]][cell.coordinates[1]];
  if (updatedCell) {
    updatedCell.hit = true;
  }

  return newCells;
}

function updateShipHit(state: BattleShipState, shipId: string) {
  const { shipsDictionary, opponentShips, playerPoints } = state;
  const hittedShip = { ...opponentShips[shipId] } as Layout;
  let points = playerPoints;

  hittedShip.hits += 1;

  if (hittedShip.hits === hittedShip.maxHits) {
    points += shipsDictionary[hittedShip.shipName].count;
  }

  return {
    hittedShip,
    points,
  };
}
