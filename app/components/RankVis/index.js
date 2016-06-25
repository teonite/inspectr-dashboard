import React from 'react';

import styles from './styles.css';
import { rankProject } from 'utils/ranking';

function RankVis({report}) {
  return (
    <span>({rankProject(report)})</span>
  );
}

export default RankVis;
