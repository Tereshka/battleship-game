import React from 'react';
import { useAppSelector } from 'store/index';

import Colors from 'styles/Colors';
import Counter from './Counter';
import styles from './counter.module.scss';

const PlayersCounter = () => {
  const playerPoints = useAppSelector((state) => state.app.playerPoints);

  return (
    <div className={styles.playersCounter}>
      <Counter
        points={playerPoints}
        playerName={'player 1'}
        color={Colors.primary}
      />
      <Counter points={0} playerName={'player 2'} color={Colors.secondary} />
    </div>
  );
};

export default PlayersCounter;
