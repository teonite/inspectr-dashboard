import React from 'react';

import ReactTooltip from 'react-tooltip'

import MultiProgressBar from 'components/MultiProgressBar';
import { colors } from 'utils/constants';

function KarmaCoverageVis({report}) {
  const segments = [
    {percent: report.summary.lines_percent, color: colors.ok},
    {percent: 100 - report.summary.lines_percent, color: colors.error}
  ];
  return (
    <div className="section">
      <div className="row">
        <div className="col-xs-6 col-xs-12 title">
          <h3>
            <span data-tip="Test coverage tool for JS" className="reveal"><i className="glyphicon glyphicon-menu-right" /></span>
            Karma Coverage <span className="text-gray">{'{'}...{'}'}</span>
            <ReactTooltip place="right" type="dark" effect="solid"/>
          </h3>
        </div>
        <div className="col-xs-6 col-xs-12 chart">
          <p className="test-result">
            <span className="text-gray">Coverage: {report.summary.lines_percent}%</span>
          </p>
        </div>
      <MultiProgressBar segments={segments}/>
      </div>
    </div>
  );
}

KarmaCoverageVis.propTypes = {
  report: React.PropTypes.object.isRequired
}

export default KarmaCoverageVis;
