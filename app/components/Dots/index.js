import React from 'react';

import styles from './styles.css';

const COLS_TO_ROWS_RATIO = 15,
  SPACING = 3,
  R = 4;

function Dots({segments}) {
  // find total number of dots
  const dotsTotal = segments.map(segment => segment.items).reduce((i1, i2) => i1 + i2, 0);
  // calculate number of columns (it's a kind of magic)
  const columns = Math.ceil(Math.sqrt(dotsTotal * COLS_TO_ROWS_RATIO));

  // map segments to array of arrays objects with color property (dots)...
  const coloredDots =
    segments
      .map(({items, color}) =>
        Array(items).fill().map((_, i) => i)
          .map(_ => ({color})) // eslint-disable-line no-unused-vars
      )
      // ...and concatenate arrays to get one array with all colored dots
      .reduce((array1, array2) => array1.concat(array2), []);

  // map dots array adding coordinates for each dot
  const dots = coloredDots
    .map((dot, index) => ({
      color: dot.color,
      cx: R + (index % columns) * (2 * R + SPACING),
      cy: R + Math.floor(index / columns) * (2 * R + SPACING),
      r: R
    }));

  // calculate svg viewBox
  const maxX = (2 * R + SPACING) * Math.max(columns, COLS_TO_ROWS_RATIO),
    maxY = 2 * R + Math.floor(dots.length / columns) * (2 * R + SPACING),
    viewBox = `0 0 ${maxX} ${maxY}`;

  return (
    <svg className={styles.dots} viewBox={viewBox}>
      {dots.map((dot, index) => <circle cx={dot.cx} cy={dot.cy} fill={dot.color} r={dot.r} key={index} /> )}
    </svg>
  );
}

Dots.propTypes = {
  segments: React.PropTypes.array.isRequired,
};

export default Dots;