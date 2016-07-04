import React from 'react';

import styles from './styles.css';
import { invertedArctanAsymptote } from 'utils/ranking';
import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';

function Flake8Vis({summary}) {

  const total = 100 * invertedArctanAsymptote(summary.total_errors);
  const items = [
    {percent: total, color: colors.ok},
    {percent: (100 - total), color: colors.error}
  ];

  return (
    <div className={styles.flake8Vis}>
      <h3>Linter errors: <b>{summary.total_errors}</b></h3>
      <MultiProgressBar items={items} />
    </div>
  );
}

Flake8Vis.propTypes = {
  summary: React.PropTypes.object.isRequired
};

export default Flake8Vis;
