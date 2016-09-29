import React from 'react';

import Dots from 'components/Dots';
import ReportHeader from 'components/ReportHeader';
import { colors } from 'utils/constants';

function RadonMaintainabilityVis({summary}) {

  const segments = [
    {items: summary.A, color: colors.ok},
    {items: summary.B, color: colors.warning},
    {items: summary.C, color: colors.error}
  ];

  return (
    <div className="chart">
      <h3>
        <ReportHeader tip="Metric of how maintainable the source code is" name="Radon Maintainability" />
      </h3>
      <Dots segments={segments}/>
      <p className="test-result">
        <span className="text-gray">Maintainability </span>
        <span className="text-green">A: {summary.A} </span>
        <span className="text-orange">B: {summary.B} </span>
        <span className="text-red">C: {summary.C}</span>
      </p>
    </div>
  );

}

RadonMaintainabilityVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default RadonMaintainabilityVis;
