import React from 'react';

import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';


function ErrorVis({ report }) {
  const segments = [{percent: 100, color: colors.error}];
  return (
    <div>
      <h3>{report.type} - error</h3>
      <MultiProgressBar segments={segments} />
    </div>
  );
}

ErrorVis.propTypes = {
  report: React.PropTypes.object.isRequired,
}

export default ErrorVis;
