import React from 'react';

import styles from './styles.css';

function CoverageVis({summary}) {
  return (
    <div className={styles.coverageVis}>
      <h3>Test Coverage</h3>
      <p>Total Statements: {summary.total_statements}</p>
      <p>Missing Statements: {summary.total_missing}</p>
      <p>Coverage: {summary.coverage_percent}%</p>
    </div>
  );
}

export default CoverageVis;
