import React from 'react';

import ReportHeader from 'components/DetailReportHeader';
import { invertedArctanAsymptote } from 'utils/ranking';
import OutputDisplay from 'components/OutputDisplay';

class Flake8 extends React.Component  {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    const {report} = this.props;
    const totalOk = 100 * invertedArctanAsymptote(report.summary.total_errors);

    return (
      <div className="section">
        <div className="row">
          <div className="col-xs-6 col-xs-12 title" onClick={ ()=> this.setState({ open: !this.state.open }) }>
            <ReportHeader open={this.state.open} name="Flake8" tip="Style checker for Python" />
          </div>
          <div className="col-xs-6 col-xs-12 chart">
            <p className="test-result">
              <span className="text-green">OK: {totalOk} </span>
              <span className="text-red">Error: {100 - totalOk}</span>
            </p>
          </div>
        </div>
        <OutputDisplay open={this.state.open} stderr={report.stderr} stdout={report.stdout} />
      </div>
    );
  }
}

Flake8.propTypes = {
  report: React.PropTypes.object.isRequired,
};

export default Flake8;
