import React from 'react';

import styles from './styles.css';
import ProgressBar from 'components/ProgressBar';


function RadonMaintainabilityVis({summary}) {

  const progress = 100 * (1 * summary.A + 0.5 * summary.B + 0 * summary.C) / summary.total;

  return (
    <div className={styles.radonMaintainabilityVis}>
      <h3>Maintainability A: <b>{summary.A}</b> B: <b>{summary.B}</b> C: <b>{summary.C}</b></h3>
      <ProgressBar percent={progress} />
    </div>
  );

}

RadonMaintainabilityVis.propTypes = {
  summary: React.PropTypes.object.isRequired
}


export default RadonMaintainabilityVis;
