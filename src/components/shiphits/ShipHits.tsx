import React from 'react';
import { useAppSelector } from 'store/index';

import ShipDetails from './ShipDetails';
import styles from './ship.module.scss';

const ShipHits = () => {
  const opponentShips = useAppSelector((state) => state.app.opponentShips);

  const getHits = (shipId: string) => {
    return opponentShips[shipId].hits;
  };

  const renderShips = () => {
    const ships = [];

    for (const [key, ship] of Object.entries(opponentShips)) {
      const shipDetails = (
        <ShipDetails
          key={key}
          shipName={ship.shipName}
          length={ship.positions.length}
          hits={getHits(key)}
        />
      );
      ships.push(shipDetails);
    }
    return ships;
  };

  return <div className={styles.shipsWrapper}>{renderShips()}</div>;
};

export default ShipHits;
