import React from 'react';

import styles from './styles.css';
import { rankProject, MAX_RANK } from 'utils/ranking';


// FIXME: that's stupid, but MVP bitch!
import r1 from './rank-images/1.png';
import r2 from './rank-images/4.png';
import r3 from './rank-images/5.png';
import r4 from './rank-images/8.png';
import r5 from './rank-images/9.png';
import r6 from './rank-images/12.png';
import r7 from './rank-images/13.png';
import r8 from './rank-images/16.png';
import r9 from './rank-images/17.png';
import r10 from './rank-images/20.png';
import r11 from './rank-images/21.png';
import r12 from './rank-images/24.png';
import r13 from './rank-images/25.png';
import r14 from './rank-images/28.png';

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
};


function RankVis({ project }) {
  const projectRank = rankProject(project);
  const alt = `${projectRank}/${MAX_RANK}`;

  return (
    <span>
      <img className={styles.rankImage} alt={alt} src={rankImages[projectRank]}></img>
    </span>
  );
}

RankVis.propTypes = {
  project: React.PropTypes.object.isRequired
};

export default RankVis;
