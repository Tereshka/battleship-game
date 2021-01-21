import React from 'react';
import { useAppSelector } from 'store/index';

import styles from './hello.module.scss';

const Hello = () => {
  const hello = useAppSelector((state) => state.app.hello);

  return <div className={styles.hello}>{hello}</div>;
};

export default Hello;
