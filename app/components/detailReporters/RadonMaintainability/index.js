import React from 'react';

import DetailReportWrapper from 'components/DetailReportWrapper';

class RadonMaintainability extends React.Component  {

  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    const {report} = this.props;

    return (
      <DetailReportWrapper name="Radon Maintainability" tip="Metric of how maintainable the source code is" stderr={report.stderr} stdout={report.stdout} >
        <span className="text-gray">Maintainability </span>
        <span className="text-green">A: {report.summary.A} </span>
        <span className="text-orange">B: {report.summary.B} </span>
        <span className="text-red">C: {report.summary.C}</span>
      </DetailReportWrapper>
    );
  }
}

RadonMaintainability.propTypes = {
  report: React.PropTypes.object.isRequired
};

export default RadonMaintainability;
