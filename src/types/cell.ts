import { Coordinate } from './game';

export interface CellType {
  hit: boolean;
  shipId: string | null;
  coordinates: Coordinate;
}

export class Cell implements CellType {
  hit: boolean;
  shipId: string | null;
  coordinates: Coordinate;

  constructor(x: number, y: number, hit = false, shipId = null) {
    this.coordinates = [x, y];
    this.hit = hit;
    this.shipId = shipId;
  }
}
