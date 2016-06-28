import React from 'react';

import styles from './styles.css';
import ProgressBar from 'components/ProgressBar';


function PytestVis({summary}) {

  const progress = 100 * (1 - summary.failed_tests / (summary.failed_tests + summary.passed_tests));

  return (
    <div className={styles.pytestVis}>
      <h3>Passed tests: <b>{summary.passed_tests}</b> Failed: <b>{summary.failed_tests}</b></h3>
      <ProgressBar percent={progress} />
    </div>
  );
}

export default PytestVis;
