import React from 'react';

import ReportHeader from 'components/ReportHeader';
import Dots from 'components/Dots';
import { colors } from 'utils/constants';

function MochaTestsVis({summary}) {

  const segments = [
    {items: summary.passed_tests, color: colors.ok},
    {items: summary.failed_tests, color: colors.error}
  ];

  return (
    <div className="chart">
      <ReportHeader tip="JS unit testing framework" name="Mocha Tests">
        <span className="pull-right">
          <span className="text-green">Passed: {summary.passed_tests} </span>
          <span className="text-red">Failed: {summary.failed_tests}</span>
        </span>
      </ReportHeader>
      <Dots segments={segments}/>
    </div>
  );
}

MochaTestsVis.propTypes = {
  summary: React.PropTypes.object.isRequired
}

export default MochaTestsVis;
