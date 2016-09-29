import React from 'react';

import ReportHeader from 'components/DetailReportHeader';
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
      <div className="section">
        <div className="row">
          <div className="col-xs-6 col-xs-12 title" onClick={ ()=> this.setState({ open: !this.state.open }) }>
            <ReportHeader name="Coffeelint" tip="Style checker for CoffeeScript" open={this.state.open}/>
          </div>
          <div className="col-xs-6 col-xs-12 chart">
            <p className="test-result">
              <span className="text-orange">Warnings: {report.summary.total_warnings} </span>
              <span className="text-red">Errors: {report.summary.total_errors}</span>
            </p>
          </div>
          <OutputDisplay open={this.state.open} stderr={report.stderr} stdout={report.stdout} />
        </div>
      </div>
    );
  }
}

Coffeelint.propTypes = {
  report: React.PropTypes.object.isRequired
};

export default Coffeelint;
