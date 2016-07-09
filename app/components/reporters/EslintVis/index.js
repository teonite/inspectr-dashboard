import React from 'react';

import { invertedArctanAsymptote } from 'utils/ranking';
import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';

function EslintVis({ summary }) {
  const totalOk = 100 * invertedArctanAsymptote(summary.total_problems);
  const segments = [
    {percent: totalOk, color: colors.ok},
    {percent: (100 - totalOk) * summary.total_warnings / summary.total_problems, color: colors.warning},
    {percent: (100 - totalOk) * summary.total_errors  / summary.total_problems, color: colors.error}
  ];
  return (
    <div>
      <h3>Eslint warnings: <b>{summary.total_warnings}</b> Errors: <b>{summary.total_errors}</b></h3>
      <MultiProgressBar segments={segments} />
    </div>
  );
}

EslintVis.propTypes = {
  summary: React.PropTypes.object.isRequired
}

export default EslintVis;