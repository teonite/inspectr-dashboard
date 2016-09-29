import React from 'react';

import ReactTooltip from 'react-tooltip'

import Dots from 'components/Dots';
import { colors } from 'utils/constants';

function Unittest({report}) {

  const segments = [
    {items: report.summary.passed_tests, color: colors.ok},
    {items: report.summary.failed_tests, color: colors.error}
  ];

  return (
    <div className="section">
      <div className="row">
        <div className="col-xs-6 col-xs-12 title">
          <h3>
            <span data-tip="The Python unit testing framework" className="reveal"><i className="glyphicon glyphicon-menu-right" /></span>
            Python Unittests <span className="text-gray">{'{'}...{'}'}</span>
            <ReactTooltip place="right" type="dark" effect="solid"/>
          </h3>
        </div>
        <div className="col-xs-6 col-xs-12 chart">
          <p className="test-result">
            <span className="text-green">Passed: {report.summary.passed_tests} </span>
            <span className="text-red">Errors: {report.summary.failed_tests}</span>
          </p>
        </div>
      <Dots segments={segments}/>
      </div>
    </div>
  );
}

Unittest.propTypes = {
  report: React.PropTypes.object.isRequired,
};


export default Unittest;
