import { AppThunk } from '../index';
import {
  BattleShipActionTypes,
  SET_OPPONENT_SHIPS,
  SET_OPPONENT_CELLS,
  SET_SHIPS_DICTIONARY,
  CLEAR_PLAYER_DATA,
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
    dispatch(setOpponentShips(ships));
    dispatch(setOpponentCells(generateField(ships)));
  };
}

export function clearGameData(): AppThunk<void> {
  return (dispatch) => {
    dispatch(loadData());
  };
}
