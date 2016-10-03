import React from 'react';

import ReportHeader from 'components/DetailReportHeader';

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
      <div className="section">
        <div className="row">
          <div className="col-xs-6 col-xs-12 title" onClick={ ()=> this.setState({ open: !this.state.open }) }>
            <ReportHeader name="Coverage.py" tip="Tool for measuring code coverage in Python" open={this.state.open}/>
          </div>
          <div className="col-xs-6 col-xs-12 chart">
            <p className="test-result">
              <span className="text-gray">Coverage: {report.summary.coverage_percent}%</span>
            </p>
          </div>
        </div>
        <OutputDisplay open={this.state.open} stderr={report.stderr} stdout={report.stdout} />
      </div>
    );
  }
}

Coverage.propTypes = {
  report: React.PropTypes.object.isRequired
};

export default Coverage;
