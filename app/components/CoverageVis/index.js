import React from 'react';

import styles from './styles.css';
import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';

function CoverageVis({ summary }) {
  const items = [{percent: summary.coverage_percent, color: colors.ok}];
  return (
    <div className={styles.coverageVis}>
      <h3>Test Coverage: <b>{summary.coverage_percent}%</b></h3>
      <MultiProgressBar items={items} />
    </div>
  );
}

CoverageVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default CoverageVis;
