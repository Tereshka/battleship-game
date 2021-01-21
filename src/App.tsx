import React, { useEffect } from 'react';
import { useAppDispatch } from 'store/index';
import { setHello } from 'store/app/actions';

import Hello from 'components/hello/Hello';
import styles from './app.module.scss';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHello('Hello, everyone!'));
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Hello />
    </div>
  );
};

export default App;
