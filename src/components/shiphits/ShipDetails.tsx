import React from 'react';
import shipImages from 'utils/shipImages';
import { ShipName } from 'types/game';

import Hits from './Hits';
import styles from './ship.module.scss';

type ShipDetailsProps = {
  shipName: ShipName;
  length: number;
  hits: number;
};

const ShipDetails = (props: ShipDetailsProps) => {
  const { length, shipName, hits } = props;

  return (
    <div className={styles.ship}>
      <img className={styles.image} src={shipImages[shipName]} alt="ship" />
      <Hits length={length} hits={hits} />
    </div>
  );
};

export default ShipDetails;
