import React from 'react';

import ReportHeader from 'components/DetailReportHeader';
import { invertedArctanAsymptote } from 'utils/ranking';
import OutputDisplay from 'components/OutputDisplay';

class Eslint extends React.Component  {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    const {report} = this.props;
    const totalOk = 100 * invertedArctanAsymptote(report.summary.total_problems);

    return (
      <div className="section">
        <div className="row">
          <div className="col-xs-6 col-xs-12 title" onClick={ ()=> this.setState({ open: !this.state.open }) }>
            <ReportHeader open={this.state.open} name="Eslint" tip="Style checker for JS and JSX" />
          </div>
          <div className="col-xs-6 col-xs-12 chart">
            <p className="test-result">
              <span className="text-green">OK: {totalOk.toFixed(2)}% </span>
              <span className="text-orange">Warnings: {report.summary.total_warnings} </span>
              <span className="text-red">Errors: {report.summary.total_errors}</span>
            </p>
          </div>
        </div>
        <OutputDisplay open={this.state.open} stderr={report.stderr} stdout={report.stdout} />
      </div>
    );
  }
}

Eslint.propTypes = {
  report: React.PropTypes.object.isRequired
}

export default Eslint;
