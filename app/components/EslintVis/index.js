import React from 'react';

import styles from './styles.css';

function EslintVis({summary}) {
  return (
    <div className={styles.eslintVis}>
      <h3>Eslint</h3>
      <p>Warnings: {summary.total_warnings}</p>
      <p>Errors: {summary.total_errors}</p>
      <p>Total: {summary.total_problems}</p>
    </div>
  );
}

export default EslintVis;
