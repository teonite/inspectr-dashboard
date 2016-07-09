import React from 'react';

import Dots from 'components/Dots';
import { colors } from 'utils/constants';

function JasmineTestsVis({summary}) {

  const segments = [
    {items: summary.passed_tests, color: colors.ok},
    {items: summary.failed_tests, color: colors.error}
  ];

  return (
    <div>
      <h3>Total tests: <b>{summary.total_tests}</b> Executed: <b>{summary.executed_tests}</b> Failed: <b>{summary.failed_tests}</b></h3>
      <Dots segments={segments} />
    </div>
  );
}

JasmineTestsVis.propTypes = {
  summary: React.PropTypes.object.isRequired
}

export default JasmineTestsVis;
