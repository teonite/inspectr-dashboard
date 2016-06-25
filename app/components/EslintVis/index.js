import React from 'react';

import { Line } from 'rc-progress';

import styles from './styles.css';
import { invertedArctanAsymptote } from 'utils/ranking';


function EslintVis({summary}) {

  const progress = 100 * invertedArctanAsymptote(summary.total_problems);

  return (
    <div className={styles.eslintVis}>
      <h3>Eslint warnings: <b>{summary.total_warnings}</b> Errors: <b>{summary.total_errors}</b></h3>
      <Line percent={progress} strokeWidth='4' />
    </div>
  );
}

export default EslintVis;
