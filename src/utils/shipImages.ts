import { ShipNames } from 'types/game';

import battleship from 'assets/Battleship Shape.png';
import carrier from 'assets/Carrier Shape.png';
import cruiser from 'assets/Cruiser Shape.png';
import destroyer from 'assets/Aircraft Shape.png';
import submarine from 'assets/Submarine Shape.png';

const shipImages = {
  [ShipNames.BATTLESHIP]: battleship,
  [ShipNames.CARRIER]: carrier,
  [ShipNames.CRUISER]: cruiser,
  [ShipNames.DESTROYER]: destroyer,
  [ShipNames.SUBMARINE]: submarine,
};

export default shipImages;
