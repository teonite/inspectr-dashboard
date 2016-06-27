import React from 'react';

import { Line } from 'rc-progress';

import styles from './styles.css';

function PytestVis({summary}) {

  const progress = 100 * (1 - summary.failed_tests / (summary.failed_tests + summary.passed_tests));

  return (
    <div className={styles.pytestVis}>
      <h3>Passed tests: <b>{summary.passed_tests}</b> Failed: <b>{summary.failed_tests}</b></h3>
      <Line percent={progress} strokeWidth='4'  />
    </div>
  );
}

export default PytestVis;
