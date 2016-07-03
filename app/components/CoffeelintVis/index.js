import React from 'react';

import styles from './styles.css';

import { invertedArctanAsymptote } from 'utils/ranking';
import ProgressBar from 'components/ProgressBar';


function CoffeelintVis({summary}) {
  const progress = 100 * invertedArctanAsymptote(summary.total_problems);

  return (
    <div className={styles.coffeelintVis}>
      <h3>Coffeelint warnings: <b>{summary.total_warnings}</b> Errors: <b>{summary.total_errors}</b></h3>
      <ProgressBar percent={progress} />
    </div>
  );
}

CoffeelintVis.propTypes = {
  summary: React.PropTypes.object.isRequired
}

export default CoffeelintVis;
