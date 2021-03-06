import React from 'react';

import ReportHeader from 'components/ReportHeader';
import Dots from 'components/Dots';
import { colors } from 'utils/constants';

function JasmineTestsVis({summary}) {

  const segments = [
    {items: summary.passed_tests, color: colors.ok},
    {items: summary.failed_tests, color: colors.error}
  ];

  return (
    <div className="chart">
      <ReportHeader tip="BDD testing framework for JS" name="Jasmine Tests">
        <span className="pull-right">
          <span className="text-green">Passed: {summary.passed_tests} </span>
          <span className="text-red">Failed: {summary.failed_tests}</span>
        </span>
      </ReportHeader>
      <Dots segments={segments}/>
    </div>
  );
}

JasmineTestsVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default JasmineTestsVis;
