import React from 'react';

import styles from './styles.css';
import Dots from 'components/Dots';
import { colors } from 'utils/constants';

function UnittestVis({summary}) {

  const segments = [
    {items: summary.passed_tests, color: colors.ok},
    {items: summary.failed_tests, color: colors.error}
  ];

  return (
    <div className={styles.unittestVis}>
      <h3>Total tests: <b>{summary.total_tests}</b> Failed: <b>{summary.failed_tests}</b></h3>
      <Dots segments={segments} />
    </div>
  );
}

UnittestVis.propTypes = {
  summary: React.PropTypes.object.isRequired,
};


export default UnittestVis;
