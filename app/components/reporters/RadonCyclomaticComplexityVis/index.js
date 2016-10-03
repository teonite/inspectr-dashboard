import React from 'react';

import ReportHeader from 'components/ReportHeader';
import Dots from 'components/Dots';
import { colors } from 'utils/constants';

function RadonCyclomaticComplexityVis({summary}) {

  const segments = [
    {items: summary.A, color: colors.ok},
    {items: summary.B, color: colors.ok},
    {items: summary.C, color: colors.warning},
    {items: summary.D, color: colors.warning},
    {items: summary.E, color: colors.error},
    {items: summary.F, color: colors.error}
  ];

  return (
    <div className="chart">
     <ReportHeader tip="The count of the linearly independent paths in code" name="Radon Cyclomatic Complexity">
       <p className="test-result">
         <span className="text-green">A: {summary.A} </span>
         <span className="text-green">B: {summary.B} </span>
         <span className="text-orange">C: {summary.C} </span>
         <span className="text-orange">D: {summary.D} </span>
         <span className="text-red">E: {summary.E} </span>
         <span className="text-red">F: {summary.F}</span>
       </p>
      </ReportHeader>
      <Dots segments={segments}/>
    </div>
  );
}

RadonCyclomaticComplexityVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default RadonCyclomaticComplexityVis;
