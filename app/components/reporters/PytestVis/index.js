import React from 'react';

import Dots from 'components/Dots';
import { colors } from 'utils/constants';


function PytestVis({summary}) {

  const segments = [
    {items: summary.passed_tests, color: colors.ok},
    {items: summary.failed_tests, color: colors.error}
  ];

  return (
    <div>
      <h3>Passed tests: <b>{summary.passed_tests}</b> Failed: <b>{summary.failed_tests}</b></h3>
      <Dots segments={segments} />
    </div>
  );
}

PytestVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default PytestVis;
