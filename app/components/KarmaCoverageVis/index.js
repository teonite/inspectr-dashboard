import React from 'react';

import { Line } from 'rc-progress';

import styles from './styles.css';

function KarmaCoverageVis({summary}) {
  return (
    <div className={styles.karmaCoverageVis}>
      <h3>Test Coverage (Lines): <b>{summary.lines_percent}%</b></h3>
      <Line percent={summary.lines_percent} strokeWidth='4'  />
    </div>
  );
}

export default KarmaCoverageVis;
