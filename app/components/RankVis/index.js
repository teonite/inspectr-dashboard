import React from 'react';

import styles from './styles.css';
import { rankProject } from 'utils/ranking';

import { MAX_RANK } from 'utils/ranking';

// FIXME: that's stupid, but MVP bitch!
import r1 from './rank-images/1.png';
import r2 from './rank-images/2.png';
import r3 from './rank-images/3.png';
import r4 from './rank-images/4.png';
import r5 from './rank-images/5.png';
import r6 from './rank-images/6.png';
import r7 from './rank-images/7.png';
import r8 from './rank-images/8.png';
import r9 from './rank-images/9.png';
import r10 from './rank-images/10.png';
import r11 from './rank-images/11.png';
import r12 from './rank-images/12.png';
import r13 from './rank-images/13.png';
import r14 from './rank-images/14.png';
import r15 from './rank-images/15.png';
import r16 from './rank-images/16.png';
import r17 from './rank-images/17.png';
import r18 from './rank-images/18.png';
import r19 from './rank-images/19.png';
import r20 from './rank-images/20.png';
import r21 from './rank-images/21.png';
import r22 from './rank-images/22.png';
import r23 from './rank-images/23.png';
import r24 from './rank-images/24.png';
import r25 from './rank-images/25.png';
import r26 from './rank-images/26.png';
import r27 from './rank-images/27.png';
import r28 from './rank-images/28.png';

const rankImages = {
  1: r1,
  2: r2,
  3: r3,
  4: r4,
  5: r5,
  6: r6,
  7: r7,
  8: r8,
  9: r9,
  10: r10,
  11: r11,
  12: r12,
  13: r13,
  14: r14,
  15: r15,
  16: r16,
  17: r17,
  18: r18,
  19: r19,
  20: r20,
  21: r21,
  22: r22,
  23: r23,
  24: r24,
  25: r25,
  26: r26,
  27: r27,
  28: r28
};


function RankVis({project}) {

  const projectRank = rankProject(project);
  const title = `${projectRank}/${MAX_RANK}`;

  return (
    <span>
      <img className={styles.rankImage} title={title} src={rankImages[projectRank]}></img>
    </span>
  );
}

export default RankVis;
