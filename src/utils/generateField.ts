import { CellType, Cell } from 'types/cell';
import { ShipLayout } from 'types/game';

const FIELD_SIZE = 10;

export const generateEmptyField = () => {
  const emptyField: CellType[][] = [];

  for (let i = 0; i < FIELD_SIZE; i++) {
    emptyField.push([]);
    for (let j = 0; j < FIELD_SIZE; j++) {
      emptyField[i].push(new Cell(i, j));
    }
  }

  return emptyField;
};

export const generateField = (incomeShips: ShipLayout) => {
  const cells = generateEmptyField();

  for (const [key, ship] of Object.entries(incomeShips)) {
    ship.positions.forEach((coord) => {
      const cell = cells[coord[0]][coord[1]];
      if (cell) {
        cell.shipId = key || null;
      }
    });
  }

  return cells;
};
