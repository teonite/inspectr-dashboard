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
      <h3>
        <p data-tip="Test coverage tool for JS"> Karma Coverage </p>
        <ReactTooltip place="right" type="dark" effect="float"/>
        <span className="pull-right">
          <span className="text-gray">Coverage: {summary.lines_percent}%</span>
        </span>
      </h3>
      <MultiProgressBar segments={segments}/>
    </div>
  );
}

KarmaCoverageVis.propTypes = {
  summary: React.PropTypes.object.isRequired
}

export default KarmaCoverageVis;
