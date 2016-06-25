import React from 'react';

import styles from './styles.css';

function UnittestVis({summary}) {
  return (
    <div className={styles.unittestVis}>
      <h3>Unittest results</h3>
      <p>Total tests: {summary.total_tests}</p>
      <p>Failed tests: {summary.failed_tests}</p>
    </div>
  );
}

export default UnittestVis;
