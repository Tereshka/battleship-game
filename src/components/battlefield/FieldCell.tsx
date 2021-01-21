import React from 'react';
import { useAppDispatch } from 'store/index';
import { CellType } from 'types/cell';

import HitIcon from 'assets/Hit.png';
import MissIcon from 'assets/Miss.png';
import styles from './field.module.scss';

type FieldCellProps = {
  cell: CellType;
};

const FieldCell = (props: FieldCellProps) => {
  const dispatch = useAppDispatch();
  const { cell } = props;

  const renderHit = () => {
    return cell.shipId ? (
      <img src={HitIcon} alt="hit the ship" />
    ) : (
      <img src={MissIcon} alt="miss the ship" />
    );
  };

  const handleCellClick = () => {
    if (cell.hit) return;
    console.log('hit');
  };

  return (
    <div className={styles.cell} onClick={handleCellClick}>
      {cell.hit && renderHit()}
    </div>
  );
};

export default FieldCell;
