import React from 'react';

import DetailReportWrapper from 'components/DetailReportWrapper';

class JasmineTests extends React.Component  {

  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    const {report} = this.props;

    return (
      <DetailReportWrapper name="Jasmine Tests" tip="BDD testing framework for JS" stderr={report.stderr} stdout={report.stdout} >
        <span className="text-green">Passed: {report.summary.passed_tests} </span>
        <span className="text-red">Failed: {report.summary.failed_tests}</span>
      </DetailReportWrapper>
    );
  }
}

JasmineTests.propTypes = {
  report: React.PropTypes.object.isRequired
};

export default JasmineTests;
