import React from 'react';

import Dots from 'components/Dots';
import { colors } from 'utils/constants';

function UnittestVis({summary}) {

  const segments = [
    {items: summary.passed_tests, color: colors.ok},
    {items: summary.failed_tests, color: colors.error}
  ];

  return (
    <div className="chart">
      <h3>Python Unittests</h3>
      <Dots segments={segments}/>
      <p className="test-result">
        <span className="text-green">Passed: {summary.passed_tests} </span>
        <span className="text-red">Failed: {summary.failed_tests} </span>
      </p>
    </div>

  );
}

UnittestVis.propTypes = {
  summary: React.PropTypes.object.isRequired,
};


export default UnittestVis;
