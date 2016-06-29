import React from 'react';

import styles from './styles.css';
import ProgressBar from 'components/ProgressBar';


function KarmaCoverageVis({summary}) {
  return (
    <div className={styles.karmaCoverageVis}>
      <h3>Test Coverage (Lines): <b>{summary.lines_percent}%</b></h3>
      <ProgressBar percent={summary.lines_percent} />
    </div>
  );
}

KarmaCoverageVis.propTypes = {
  summary: React.PropTypes.object.isRequired
}

export default KarmaCoverageVis;
