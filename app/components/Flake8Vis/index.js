import React from 'react';

import { Line } from 'rc-progress';

import styles from './styles.css';
import { invertedArctanAsymptote } from 'utils/ranking';


function Flake8Vis({summary}) {

  const progress = 100 * invertedArctanAsymptote(summary.total_errors);

  return (
    <div className={styles.flake8Vis}>
      <h3>Linter errors: <b>{summary.total_errors}</b></h3>
      <Line percent={progress} strokeWidth='4' />
    </div>
  );
}

export default Flake8Vis;
