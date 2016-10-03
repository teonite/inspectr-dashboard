import React from 'react';

import ReportHeader from 'components/ReportHeader';
import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';

function CoverageVis({ summary }) {
  const segments = [
    {percent: summary.coverage_percent, color: colors.ok},
    {percent: 100 - summary.coverage_percent, color: colors.error}
  ];
  return (
    <div className="chart">
      <ReportHeader tip="Tool for measuring code coverage in Python" name="Coverage.py">
        <span className="pull-right">
          <span className="text-gray">Coverage: {summary.coverage_percent}%</span>
        </span>
      </ReportHeader>
      <MultiProgressBar segments={segments}/>
    </div>
  );
}

CoverageVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default CoverageVis;
