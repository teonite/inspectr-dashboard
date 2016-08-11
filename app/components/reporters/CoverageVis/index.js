import React from 'react';

import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';

function CoverageVis({ summary }) {
  const segments = [
    {percent: summary.coverage_percent, color: colors.ok},
    {percent: 100 - summary.coverage_percent, color: colors.error}
  ];
  return (
    <div className="chart">
      <h3>
        Coverage.py
        <span className="pull-right">
          <span className="text-gray">Coverage: {summary.coverage_percent}%</span>
        </span>
      </h3>
      <MultiProgressBar segments={segments}/>
    </div>
  );
}

CoverageVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default CoverageVis;
