import React from 'react';

import styles from './styles.css';

function Flake8Vis({summary}) {
  return (
    <div className={styles.flake8Vis}>
      <h3>Linter errors: {summary.total_errors}</h3>
    </div>
  );
}

export default Flake8Vis;
