import React from 'react';

import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';


function ErrorVis({ report }) {
  const segments = [{percent: 100, color: colors.error}];
  return (
    <div className="chart">
      <h3>{ report.type }</h3>
      <MultiProgressBar segments={segments}/>
      <p className="test-result">
        <span className="text-red">REPORTER FAILED</span>
      </p>
    </div>
  );
}

ErrorVis.propTypes = {
  report: React.PropTypes.object.isRequired,
}

export default ErrorVis;
