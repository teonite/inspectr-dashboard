import React from 'react';

import styles from './styles.css';
import ProgressBar from 'components/ProgressBar';

function CoverageVis({ summary }) {
  return (
    <div className={styles.coverageVis}>
      <h3>Test Coverage: <b>{summary.coverage_percent}%</b></h3>
      <ProgressBar percent={summary.coverage_percent} />
    </div>
  );
}

CoverageVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default CoverageVis;
