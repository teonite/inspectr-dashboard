import React from 'react';

import { colors } from 'utils/constants';

import ReactTooltip from 'react-tooltip'

import { invertedArctanAsymptote } from 'utils/ranking';
import MultiProgressBar from 'components/MultiProgressBar';


function Coffeelint({report}) {
  const totalOk = 100 * invertedArctanAsymptote(report.summary.total_problems);
  const segments = [
    {percent: totalOk, color: colors.ok},
    {percent: (100 - totalOk) * report.summary.total_warnings / report.summary.total_problems, color: colors.warning},
    {percent: (100 - totalOk) * report.summary.total_errors / report.summary.total_problems, color: colors.error}
  ];

  return (
    <div className="section">
      <div className="row">
        <div className="col-xs-6 col-xs-12 title">
          <h3>
            <span data-tip="Style checker for CoffeeScript" className="reveal"><i className="glyphicon glyphicon-menu-right" /></span>
            Coffeelint <span className="text-gray">{'{'}...{'}'}</span>
            <ReactTooltip place="right" type="dark" effect="solid"/>
          </h3>
        </div>
        <div className="col-xs-6 col-xs-12 chart">
          <p className="test-result">
            <span className="text-orange">Warnings: {report.summary.total_warnings} </span>
            <span className="text-red">Errors: {report.summary.total_errors}</span>
          </p>
        </div>
      <MultiProgressBar segments={segments}/>
      </div>
    </div>
  );
}

Coffeelint.propTypes = {
  report: React.PropTypes.object.isRequired
};

export default Coffeelint;
