import React from 'react';

import DetailReportWrapper from 'components/DetailReportWrapper';

class Coverage extends React.Component  {

  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    const {report} = this.props;

    return (
      <DetailReportWrapper name="Coverage.py" tip="Tool for measuring code coverage in Python" stderr={report.stderr} stdout={report.stdout} >
        <span className="text-gray">Coverage: {report.summary.coverage_percent}%</span>
      </DetailReportWrapper>
    );
  }
}

Coverage.propTypes = {
  report: React.PropTypes.object.isRequired
};

export default Coverage;
