import React from 'react';

import ReportHeader from 'components/DetailReportHeader';
import OutputDisplay from 'components/OutputDisplay';

class RadonCyclomaticComplexity extends React.Component  {

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
            <ReportHeader name="Radon Cyclomatic Complexity" tip="The count of the linearly independent paths in code" open={this.state.open}/>
          </div>
          <div className="col-xs-6 col-xs-12 chart">
            <p className="test-result">
              <span className="text-gray">Complexity </span>
              <span className="text-green">A: {report.summary.A} </span>
              <span className="text-green">B: {report.summary.B} </span>
              <span className="text-orange">C: {report.summary.C} </span>
              <span className="text-orange">D: {report.summary.D} </span>
              <span className="text-red">E: {report.summary.E} </span>
              <span className="text-red">F: {report.summary.F}</span>
            </p>
          </div>
        </div>
        <OutputDisplay open={this.state.open} stderr={report.stderr} stdout={report.stdout} />
      </div>
    );
  }
}

RadonCyclomaticComplexity.propTypes = {
  report: React.PropTypes.object.isRequired
};

export default RadonCyclomaticComplexity;
