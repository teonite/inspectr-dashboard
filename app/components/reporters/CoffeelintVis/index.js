import React from 'react';

import { colors } from 'utils/constants';

import { invertedArctanAsymptote } from 'utils/ranking';
import MultiProgressBar from 'components/MultiProgressBar';


function CoffeelintVis({summary}) {
  const totalOk = 100 * invertedArctanAsymptote(summary.total_problems);
  const segments = [
    {percent: totalOk, color: colors.ok},
    {percent: (100 - totalOk) * summary.total_warnings / summary.total_problems, color: colors.warning},
    {percent: (100 - totalOk) * summary.total_errors / summary.total_problems, color: colors.error}
  ];

  return (
    <div className="chart">
      <h3>Coffeelint</h3>
      <MultiProgressBar segments={segments}/>
      <p className="test-result">
        <span className="text-orange">Warnings: {summary.total_warnings} </span>
        <span className="text-red">Errors: {summary.total_errors} </span>
      </p>
    </div>
  );
}

CoffeelintVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default CoffeelintVis;
