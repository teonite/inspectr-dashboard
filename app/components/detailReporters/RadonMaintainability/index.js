import React from 'react';

import ReportHeader from 'components/DetailReportHeader';
import OutputDisplay from 'components/OutputDisplay';

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
      <div className="section">
        <div className="row">
          <div className="col-xs-6 col-xs-12 title" onClick={ ()=> this.setState({ open: !this.state.open }) }>
            <ReportHeader name="Radon Maintainability" tip="Metric of how maintainable the source code is" open={this.state.open}/>
          </div>
          <div className="col-xs-6 col-xs-12 chart">
            <p className="test-result">
              <span className="text-gray">Maintainability </span>
              <span className="text-green">A: {report.summary.A} </span>
              <span className="text-orange">B: {report.summary.B} </span>
              <span className="text-red">C: {report.summary.C}</span>
            </p>
          </div>
        </div>
        <OutputDisplay open={this.state.open} stderr={report.stderr} stdout={report.stdout} />
      </div>
    );
  }
}

RadonMaintainability.propTypes = {
  report: React.PropTypes.object.isRequired
};

export default RadonMaintainability;
