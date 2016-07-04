import React from 'react';

import styles from './styles.css';
import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';

function RadonMaintainabilityVis({summary}) {

  const total = summary.A + summary.B + summary.C;
  const items = [
    {percent: summary.A * 100 / total, color: colors.ok},
    {percent: summary.B * 100 / total, color: colors.warning},
    {percent: summary.C * 100 / total, color: colors.error}
  ];
  return (
    <div className={styles.radonMaintainabilityVis}>
      <h3>Maintainability A: <b>{summary.A}</b> B: <b>{summary.B}</b> C: <b>{summary.C}</b></h3>
      <MultiProgressBar items={items} />
    </div>
  );

}

RadonMaintainabilityVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};


export default RadonMaintainabilityVis;
