import React from 'react';

import styles from './styles.css';
import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';

function KarmaCoverageVis({summary}) {
  const segments = [{percent: summary.lines_percent, color: colors.ok}];
  return (
    <div className={styles.karmaCoverageVis}>
      <h3>Test Coverage (Lines): <b>{summary.lines_percent}%</b></h3>
      <MultiProgressBar segments={segments} />
    </div>
  );
}

KarmaCoverageVis.propTypes = {
  summary: React.PropTypes.object.isRequired
}

export default KarmaCoverageVis;
