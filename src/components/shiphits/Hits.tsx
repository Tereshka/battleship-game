import React from 'react';
import HitIcon from 'assets/Hit small.png';
import RestIcon from 'assets/Miss small.png';
import styles from './ship.module.scss';

type HitsProps = {
  length: number;
  hits: number;
};

const Hits = (props: HitsProps) => {
  const { length, hits } = props;
  const restParts = length - hits;

  return (
    <div className={styles.hits}>
      {[...Array(hits)].map((el, i) => (
        <img src={HitIcon} key={`hits-${i}`} alt="hit" />
      ))}
      {[...Array(restParts)].map((el, i) => (
        <img src={RestIcon} key={`rest-${i}`} alt="rest" />
      ))}
    </div>
  );
};

export default Hits;
