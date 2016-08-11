import React from 'react';

import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';


function ErrorVis({ report }) {
  const segments = [{percent: 100, color: colors.error}];
  return (
    <div className="chart">
      <h3>
        { report.type }
        <span className="pull-right">
          <span className="text-red">REPORTER FAILED</span>
        </span>
        </h3>
      <MultiProgressBar segments={segments}/>
    </div>
  );
}

ErrorVis.propTypes = {
  report: React.PropTypes.object.isRequired,
}

export default ErrorVis;
