import React from 'react';

import { invertedArctanAsymptote } from 'utils/ranking';
import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';

function Flake8Vis({summary}) {

  const totalOk = 100 * invertedArctanAsymptote(summary.total_errors);
  const segments = [
    {percent: totalOk, color: colors.ok},
    {percent: (100 - totalOk), color: colors.error}
  ];

  return (
    <div className="chart">
      <h3>Flake8</h3>
      <MultiProgressBar segments={segments}/>
      <p className="test-result">
        <span className="text-red">Errors: {summary.total_errors} </span>
      </p>
    </div>
  );
}

Flake8Vis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default Flake8Vis;
