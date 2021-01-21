import React from 'react';
import Colors from 'styles/Colors';
import styles from './counter.module.scss';

type CounterProps = {
  points: number;
  playerName: string;
  color: Colors.primary | Colors.secondary;
};

const Counter = (props: CounterProps) => {
  const { points, playerName, color } = props;
  return (
    <div
      className={styles.counter}
      style={{
        backgroundColor: color,
      }}>
      <div className={styles.points}>{points}</div>
      <div className={styles.playerName}>{playerName}</div>
    </div>
  );
};

export default Counter;
