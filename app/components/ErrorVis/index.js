import React from 'react';

import { Line } from 'rc-progress';
import styles from './styles.css';

function ErrorVis({report}) {
  return (
    <div className={styles.errorVis}>
      <h3>{report.type} - error</h3>
      <Line percent='100' strokeWidth='2' strokeColor='#ff6868' />
    </div>
  );
}

export default ErrorVis;
