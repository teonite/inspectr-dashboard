import React from 'react';

import styles from './styles.css';
import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';


function PytestVis({summary}) {

  const totalOk = 100 * (1 - summary.failed_tests / (summary.failed_tests + summary.passed_tests));
  const segments = [
    {percent: totalOk, color: colors.ok},
    {percent: 100 - totalOk, color: colors.error}
  ];

  return (
    <div className={styles.pytestVis}>
      <h3>Passed tests: <b>{summary.passed_tests}</b> Failed: <b>{summary.failed_tests}</b></h3>
      <MultiProgressBar segments={segments} />
    </div>
  );
}

PytestVis.propTypes = {
  summary: React.PropTypes.object.isRequired
}

export default PytestVis;
