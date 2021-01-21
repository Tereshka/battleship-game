import React, { useEffect } from 'react';
import { useAppDispatch } from 'store/index';
import { loadData } from 'store/app/actions';

import BattleField from 'components/battlefield/BattleField';
import styles from './app.module.scss';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <div className={styles.appItem}>
        <BattleField />
      </div>
    </div>
  );
};

export default App;
