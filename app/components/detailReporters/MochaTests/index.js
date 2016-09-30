import React from 'react';

import ReportHeader from 'components/DetailReportHeader';
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
      <div className="section">
        <div className="row">
          <div className="col-xs-6 col-xs-12 title" onClick={ ()=> this.setState({ open: !this.state.open }) }>
            <ReportHeader open={this.state.open} name="Mocha Tests" tip="JS unit testing framework" />
          </div>
          <div className="col-xs-6 col-xs-12 chart">
            <p className="test-result">
              <span className="text-green">Passed: {report.summary.passed_tests} </span>
              <span className="text-red">Failed: {report.summary.failed_tests}</span>
            </p>
          </div>
        </div>
        <OutputDisplay open={this.state.open} stderr={report.stderr} stdout={report.stdout} />
      </div>
    );
  }
}

MochaTests.propTypes = {
  report: React.PropTypes.object.isRequired
}

export default MochaTests;
