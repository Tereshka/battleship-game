import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/index';
import { loadData, clearGameData } from 'store/app/actions';

import BattleField from 'components/battlefield/BattleField';
import PlayersCounter from 'components/counter/PlayersCounter';
import ShipHits from 'components/shiphits/ShipHits';
import styles from './app.module.scss';

const App = () => {
  const dispatch = useAppDispatch();
  const playerPoints = useAppSelector((state) => state.app.playerPoints);
  const maxPoints = useAppSelector((state) => state.app.maxPoints);

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  useEffect(() => {
    if (playerPoints && playerPoints === maxPoints) {
      alert('The Game is finished!');
      dispatch(clearGameData());
    }
  }, [maxPoints, playerPoints, dispatch]);

  return (
    <div className={styles.app}>
      <div className={`${styles.appItem} ${styles.pointsShips}`}>
        <PlayersCounter />
        <ShipHits />
      </div>
      <div className={styles.appItem}>
        <BattleField />
      </div>
    </div>
  );
};

export default App;
