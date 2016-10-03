import React from 'react';

import DetailReportWrapper from 'components/DetailReportWrapper';
import OutputDisplay from 'components/OutputDisplay';

class Unittest extends React.Component  {

  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    const {report} = this.props;

    return (
      <DetailReportWrapper name="Python Unittests" tip="The Python unit testing framework" stderr={report.stderr} stdout={report.stdout} >
        <span className="text-green">Passed: {report.summary.passed_tests} </span>
        <span className="text-red">Errors: {report.summary.failed_tests}</span>
      </DetailReportWrapper>
    );
  }
}

Unittest.propTypes = {
  report: React.PropTypes.object.isRequired,
};


export default Unittest;
