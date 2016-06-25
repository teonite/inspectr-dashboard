import React from 'react';

import { Line } from 'rc-progress';

import styles from './styles.css';


function UnittestVis({summary}) {

  const progress = 100 * (1 - summary.failed_tests / summary.total_tests);

  return (
    <div className={styles.unittestVis}>
      <h3>Total tests: <b>{summary.total_tests}</b> Failed: <b>{summary.failed_tests}</b></h3>
      <Line percent={progress} strokeWidth='4'  />
    </div>
  );
}

export default UnittestVis;
