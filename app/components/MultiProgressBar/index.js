import React from 'react';

import styles from './styles.css';


function MultiProgressBar({segments, width=2, fill='#D9D9D9'}) {

  let segmentsMapped = segments
    .filter(segment => !isNaN(segment.percent))  // filter out NaNs (total problems = 0)
    .map((segment, index) => ({
      segmentStart: segments.map(s => s.percent).slice(0, index).reduce((i1, i2) => parseFloat(i1) + parseFloat(i2), 0),
      segmentStop: segments.map(s => s.percent).slice(0, index).reduce((i1, i2) => parseFloat(i1) + parseFloat(i2), 0) + parseFloat(segment.percent),
      color: segment.color
  }));

  const lastSegment = segmentsMapped[segmentsMapped.length - 1];
  if(lastSegment.segmentStop > 100) {
    throw Error('Invalid percent value (out of range)');
  }

  segmentsMapped.push({
    segmentStart: lastSegment.segmentStop,
    segmentStop: 100,
    color: fill
  });

  segmentsMapped = segmentsMapped.reverse();

  const viewBoxString = `0 0 100 ${width}`;
  return (
    <svg className={styles.multiProgressBar} viewBox={viewBoxString}>
      {segmentsMapped.map((segment, index) =>
        <line key={index}
          x1={segment.segmentStart}
          x2={segment.segmentStop}

          y1={width / 2}
          y2={width / 2}

          stroke={segment.color} />)}
    </svg>
  );

}

MultiProgressBar.propTypes = {
  segments: React.PropTypes.array.isRequired,
  width: React.PropTypes.number,
  fill: React.PropTypes.string
};

export default MultiProgressBar;
