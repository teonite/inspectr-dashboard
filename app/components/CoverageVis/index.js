import React from 'react';

import { Line } from 'rc-progress';

import styles from './styles.css';


function CoverageVis({summary}) {
  return (
    <div className={styles.coverageVis}>
      <h3>Test Coverage: <b>{summary.coverage_percent}%</b></h3>
      <Line percent={summary.coverage_percent} strokeWidth='4'  />
    </div>
  );
}

export default CoverageVis;
