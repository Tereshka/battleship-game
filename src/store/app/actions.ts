import { AppThunk } from '../index';
import {
  BattleShipActionTypes,
  SET_OPPONENT_SHIPS,
  SET_OPPONENT_CELLS,
  SET_SHIPS_DICTIONARY,
  CLEAR_PLAYER_DATA,
  HIT_CELL,
  UPDATE_SHIP_HIT,
  SET_MAX_POINTS,
} from './types';
import { ShipLayout, ShipName, ShipTypes, Coordinate } from 'types/game';
import { CellType } from 'types/cell';
import { generateField } from 'utils/generateField';

import data from 'mock/data.json';

export function setShipsDictionary(
  shipTypes: ShipTypes,
): BattleShipActionTypes {
  return {
    type: SET_SHIPS_DICTIONARY,
    payload: shipTypes,
  };
}

export function setOpponentShips(
  shipsLayout: ShipLayout,
): BattleShipActionTypes {
  return {
    type: SET_OPPONENT_SHIPS,
    payload: shipsLayout,
  };
}

export function setOpponentCells(cells: CellType[][]): BattleShipActionTypes {
  return {
    type: SET_OPPONENT_CELLS,
    payload: cells,
  };
}

export function clearPlayerData(): BattleShipActionTypes {
  return {
    type: CLEAR_PLAYER_DATA,
  };
}

export function setMaxPoints(points: number): BattleShipActionTypes {
  return {
    type: SET_MAX_POINTS,
    payload: points,
  };
}

export function hitCell(cell: CellType): BattleShipActionTypes {
  return {
    type: HIT_CELL,
    payload: cell,
  };
}

export function updateShipHit(shipId: string): BattleShipActionTypes {
  return {
    type: UPDATE_SHIP_HIT,
    payload: shipId,
  };
}

export function hitFieldCell(cell: CellType): AppThunk<void> {
  return (dispatch) => {
    dispatch(hitCell(cell));
    if (cell.shipId) {
      dispatch(updateShipHit(cell.shipId));
    }
  };
}

/**
 * TODO: change this method for getting data from server
 */
export function loadData(): AppThunk<void> {
  return (dispatch) => {
    let maxPoints = 0;
    const shipTypes = data.shipTypes;
    const ships = {} as ShipLayout;

    data.layout.forEach((el, i) => {
      const id = `ship-${el.ship}-${i}`;
      const layout = {
        shipName: el.ship as ShipName,
        positions: el.positions as Coordinate[],
        hits: 0,
        maxHits: shipTypes[el.ship as ShipName].size,
      };
      ships[id] = layout;

      maxPoints += shipTypes[el.ship as ShipName].count;
    });

    dispatch(setShipsDictionary(shipTypes));
    dispatch(setMaxPoints(maxPoints));
    dispatch(setOpponentShips(ships));
    dispatch(setOpponentCells(generateField(ships)));
  };
}

export function clearGameData(): AppThunk<void> {
  return (dispatch) => {
    dispatch(clearPlayerData());
    dispatch(loadData());
  };
}
