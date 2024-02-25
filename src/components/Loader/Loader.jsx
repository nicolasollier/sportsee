import React from 'react';
import styles from './Loader.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spinner_container}>
      <div className={styles.spinner}></div>
      <p>Chargement des données...</p>
    </div>
  );
};

export default Spinner;
