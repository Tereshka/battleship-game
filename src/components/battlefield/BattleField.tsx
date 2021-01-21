import React from 'react';
import { useAppSelector } from 'store/index';

import FieldCell from './FieldCell';
import styles from './field.module.scss';

const BattleField = () => {
  const opponentCells = useAppSelector((state) => state.app.opponentCells);

  return (
    <div className={styles.battlefield}>
      {opponentCells.map((el) =>
        el.map((cell) => (
          <FieldCell
            key={`cel-${cell.coordinates[0]}-${cell.coordinates[1]}`}
            cell={cell}
          />
        )),
      )}
    </div>
  );
};

export default BattleField;
