import React from 'react';

import { invertedArctanAsymptote } from 'utils/ranking';
import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';

function TslintVis({summary}) {

  const totalOk = 100 * invertedArctanAsymptote(summary.total_errors);
  const segments = [
    {percent: totalOk, color: colors.ok},
    {percent: (100 - totalOk), color: colors.error}
  ];

  return (
    <div className="chart">
      <h3>
        TSLint
        <span className="pull-right">
          <span className="text-red">Errors: {summary.total_errors} </span>
        </span>
      </h3>
      <MultiProgressBar segments={segments}/>
    </div>
  );
}

TslintVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default TslintVis;
