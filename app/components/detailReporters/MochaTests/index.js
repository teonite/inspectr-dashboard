import React from 'react';

import DetailReportWrapper from 'components/DetailReportWrapper';
import OutputDisplay from 'components/OutputDisplay';

class MochaTests extends React.Component  {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    const {report} = this.props;

    return (
      <DetailReportWrapper open={this.state.open} name="Mocha Tests" tip="JS unit testing framework"  stderr={report.stderr} stdout={report.stdout} >
        <span className="text-green">Passed: {report.summary.passed_tests} </span>
        <span className="text-red">Failed: {report.summary.failed_tests}</span>
      </DetailReportWrapper>
    );
  }
}

MochaTests.propTypes = {
  report: React.PropTypes.object.isRequired
}

export default MochaTests;
