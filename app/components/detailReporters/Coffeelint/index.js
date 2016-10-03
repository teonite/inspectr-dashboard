import React from 'react';

import DetailReportWrapper from 'components/DetailReportWrapper';
import OutputDisplay from 'components/OutputDisplay';


class Coffeelint extends React.Component  {

  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    const {report} = this.props;

    return (
      <DetailReportWrapper name="Coffeelint" tip="Style checker for CoffeeScript" stderr={report.stderr} stdout={report.stdout}>
        <span className="text-orange">Warnings: {report.summary.total_warnings} </span>
        <span className="text-red">Errors: {report.summary.total_errors}</span>
      </DetailReportWrapper>
    );
  }
}

Coffeelint.propTypes = {
  report: React.PropTypes.object.isRequired
};

export default Coffeelint;
