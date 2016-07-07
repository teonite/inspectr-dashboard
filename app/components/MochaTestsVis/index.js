import React from 'react';

import styles from './styles.css';
import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';

function MochaTestsVis({summary}) {

  const totalOk = 100 * (1 - summary.failed_tests / summary.total_tests);
  const segments = [
    {percent: totalOk, color: colors.ok},
    {percent: 100 - totalOk, color: colors.error}
  ];

  return (
    <div className={styles.mochaTestsVis}>
      <h3>Total tests: <b>{summary.total_tests}</b> Passed: <b>{summary.passed_tests}</b> Failed: <b>{summary.failed_tests}</b></h3>
      <MultiProgressBar segments={segments} />
    </div>
  );
}

MochaTestsVis.propTypes = {
  summary: React.PropTypes.object.isRequired
}

export default MochaTestsVis;
