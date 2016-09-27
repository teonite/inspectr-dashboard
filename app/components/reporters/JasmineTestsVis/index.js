import React from 'react';

import ReactTooltip from 'react-tooltip'

import Dots from 'components/Dots';
import { colors } from 'utils/constants';

function JasmineTestsVis({summary}) {

  const segments = [
    {items: summary.passed_tests, color: colors.ok},
    {items: summary.failed_tests, color: colors.error}
  ];

  return (
    <div className="chart">
      <h3>
        <span data-tip="BDD testing framework for JS"> Jasmine Tests </span>
        <ReactTooltip place="right" type="dark" effect="float"/>
        <span className="pull-right">
          <span className="text-green">Passed: {summary.passed_tests} </span>
          <span className="text-red">Failed: {summary.failed_tests}</span>
        </span>
      </h3>
      <Dots segments={segments}/>
    </div>
  );
}

JasmineTestsVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default JasmineTestsVis;
