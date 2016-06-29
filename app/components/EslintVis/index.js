import React from 'react';

import styles from './styles.css';
import { invertedArctanAsymptote } from 'utils/ranking';
import ProgressBar from 'components/ProgressBar';


function EslintVis({ summary }) {
  const progress = 100 * invertedArctanAsymptote(summary.total_problems);

  return (
    <div className={styles.eslintVis}>
      <h3>Eslint warnings: <b>{summary.total_warnings}</b> Errors: <b>{summary.total_errors}</b></h3>
      <ProgressBar percent={progress} />
    </div>
  );
}

EslintVis.propTypes = {
  summary: React.PropTypes.object.isRequired
}

export default EslintVis;
