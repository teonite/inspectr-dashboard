import React from 'react';

import styles from './styles.css';
import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';

function JasmineTestsVis({summary}) {

  const totalOk = 100 * (1 - summary.failed_tests / summary.total_tests);
  const items = [
    {percent: totalOk, color: colors.ok},
    {percent: (100 - totalOk), color: colors.error}
  ];

  return (
    <div className={styles.jasmineTestsVis}>
      <h3>Total tests: <b>{summary.total_tests}</b> Executed: <b>{summary.executed_tests}</b> Failed: <b>{summary.failed_tests}</b></h3>
      <MultiProgressBar items={items} />
    </div>
  );
}

JasmineTestsVis.propTypes = {
  summary: React.PropTypes.object.isRequired
}

export default JasmineTestsVis;
