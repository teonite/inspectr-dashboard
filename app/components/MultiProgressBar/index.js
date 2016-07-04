import React from 'react';

import styles from './styles.css';


function MultiProgressBar({items, width=2, fill='#D9D9D9'}) {

  let itemsMapped = items.map((item, index) => ({
      segmentStart: items.map(item => item.percent).slice(0, index).reduce((i1, i2) => parseFloat(i1) + parseFloat(i2), 0),
      segmentStop: items.map(item => item.percent).slice(0, index).reduce((i1, i2) => parseFloat(i1) + parseFloat(i2), 0) + parseFloat(item.percent),
      color: item.color
  }));

  const lastItem = itemsMapped[itemsMapped.length - 1];
  if(lastItem.segmentStop > 100) {
    throw Error('Invalid percent value (out of range)');
  }

  itemsMapped.push({
    segmentStart: lastItem.segmentStop,
    segmentStop: 100,
    color: fill
  });

  itemsMapped = itemsMapped.reverse();

  const viewBoxString = `0 0 100 ${width}`;

  return (
    <svg className={styles.multiProgressBar} viewBox={viewBoxString}>
      {itemsMapped.map((item) =>
        <line
          x1={item.segmentStart}
          x2={item.segmentStop}

          y1={width / 2}
          y2={width / 2}

          stroke={item.color} />)}
    </svg>
  );

}

MultiProgressBar.propTypes = {
  items: React.PropTypes.array.isRequired,
  width: React.PropTypes.number,
  fill: React.PropTypes.string
};

export default MultiProgressBar;
