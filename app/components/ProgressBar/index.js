import React from 'react';
import { Line } from 'rc-progress';

import styles from './styles.css';


function ProgressBar({percent}) {
  return (
    <Line className={styles.progressBar} percent={percent} strokeWidth='2' strokeColor='#337ab7' />
  );
}

export default ProgressBar;
