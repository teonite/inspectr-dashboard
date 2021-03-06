import React from 'react';

import ReportHeader from 'components/ReportHeader';
import Dots from 'components/Dots';
import { colors } from 'utils/constants';


function PytestVis({summary}) {

  const segments = [
    {items: summary.passed_tests, color: colors.ok},
    {items: summary.failed_tests, color: colors.error}
  ];

  return (
    <div className="chart">
      <ReportHeader tip="Python testing tool" name="Pytest Tests">
        <span className="pull-right">
          <span className="text-green">Passed: {summary.passed_tests} </span>
          <span className="text-red">Failed: {summary.failed_tests}</span>
        </span>
      </ReportHeader>
      <Dots segments={segments}/>
    </div>
  );
}

PytestVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default PytestVis;
