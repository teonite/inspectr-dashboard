import React from 'react';

import styles from './styles.css';
import ProgressBar from 'components/ProgressBar';


function KarmaTestsVis({summary}) {

  const progress = 100 * (1 - summary.failed_tests / summary.total_tests);

  return (
    <div className={styles.karmaTestsVis}>
      <h3>Total tests: <b>{summary.total_tests}</b> Executed: <b>{summary.executed_tests}</b> Failed: <b>{summary.failed_tests}</b></h3>
      <ProgressBar percent={progress} />
    </div>
  );
}

export default KarmaTestsVis;
