import React from 'react';

import Dots from 'components/Dots';
import { colors } from 'utils/constants';

function RadonMaintainabilityVis({summary}) {

  const segments = [
    {items: summary.A, color: colors.ok},
    {items: summary.B, color: colors.warning},
    {items: summary.C, color: colors.error}
  ];
  return (
    <div>
      <h3>Maintainability A: <b>{summary.A}</b> B: <b>{summary.B}</b> C: <b>{summary.C}</b></h3>
      <Dots segments={segments} />
    </div>
  );

}

RadonMaintainabilityVis.propTypes = {
  summary: React.PropTypes.object.isRequired
};


export default RadonMaintainabilityVis;
