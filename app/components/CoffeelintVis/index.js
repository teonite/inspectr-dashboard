import React from 'react';

import styles from './styles.css';
import { colors } from 'utils/constants';

import { invertedArctanAsymptote } from 'utils/ranking';
import MultiProgressBar from 'components/MultiProgressBar';


function CoffeelintVis({summary}) {
  const total = 100 * invertedArctanAsymptote(summary.total_problems);
  const items = [
    {percent: total, color: colors.ok},
    {percent: (100 - total) * summary.total_warnings / summary.total_problems, color: colors.warning},
    {percent: (100 - total) * summary.total_errors  / summary.total_problems, color: colors.error}
  ];

  return (
    <div className={styles.coffeelintVis}>
      <h3>Coffeelint warnings: <b>{summary.total_warnings}</b> Errors: <b>{summary.total_errors}</b></h3>
      <MultiProgressBar items={items} />
    </div>
  );
}

CoffeelintVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default CoffeelintVis;
