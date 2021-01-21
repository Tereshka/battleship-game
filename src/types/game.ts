export type Game = {
  shipTypes: ShipTypes;
  layout: ShipLayout[];
};

export type Ship = {
  size: number;
  count: number;
};

export enum ShipNames {
  DESTROYER = 'destroyer',
  BATTLESHIP = 'battleship',
  CRUISER = 'cruiser',
  SUBMARINE = 'submarine',
  CARRIER = 'carrier',
}

export type ShipName =
  | ShipNames.BATTLESHIP
  | ShipNames.CARRIER
  | ShipNames.CRUISER
  | ShipNames.DESTROYER
  | ShipNames.SUBMARINE;

export type ShipTypes = {
  [T in ShipName]: Ship;
};

export type Coordinate = [number, number];

export type ShipLayout = {
  [id: string]: Layout;
};

export type Layout = {
  shipName: ShipName;
  positions: Coordinate[];
  hits: number;
  maxHits: number;
};
