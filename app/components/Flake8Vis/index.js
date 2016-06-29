import React from 'react';

import styles from './styles.css';
import { invertedArctanAsymptote } from 'utils/ranking';
import ProgressBar from 'components/ProgressBar';


function Flake8Vis({summary}) {

  const progress = 100 * invertedArctanAsymptote(summary.total_errors);

  return (
    <div className={styles.flake8Vis}>
      <h3>Linter errors: <b>{summary.total_errors}</b></h3>
      <ProgressBar percent={progress} />
    </div>
  );
}

Flake8Vis.propTypes = {
  summary: React.PropTypes.object.isRequired
}

export default Flake8Vis;
