import React from 'react';

import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';

function KarmaCoverageVis({summary}) {
  const segments = [
    {percent: summary.lines_percent, color: colors.ok},
    {percent: 100 - summary.lines_percent, color: colors.error}
  ];
  return (
    <div className="chart">
      <h3>Karma Coverage</h3>
      <MultiProgressBar segments={segments}/>
      <p className="test-result">
        <span className="text-gray">Coverage: {summary.lines_percent}%</span>
      </p>
    </div>
  );
}

KarmaCoverageVis.propTypes = {
  summary: React.PropTypes.object.isRequired
}

export default KarmaCoverageVis;
