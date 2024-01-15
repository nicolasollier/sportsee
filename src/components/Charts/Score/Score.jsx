import React from 'react';
import styles from './Score.module.scss';

const Score = ({ score }) => {
  return (
    <div className={styles.score}>
      <h2 className={styles.score__title}>Score</h2>

      <div className={styles.score__circle}>
        <span className={styles.score__circle__score}>{score}%</span>
        <span className={styles.score__circle__description}>de votre <br /> objectif</span>
        <div className={styles.score__circle__border}>
        </div>
      </div>
    </div>
  );
};

export default Score;
