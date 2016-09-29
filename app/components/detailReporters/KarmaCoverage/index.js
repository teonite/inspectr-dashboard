import React from 'react';

import ReportHeader from 'components/DetailReportHeader';
import OutputDisplay from 'components/OutputDisplay';

class KarmaCoverage extends React.Component  {

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
            <ReportHeader name="Karma Coverage" tip="Test coverage tool for JS" open={this.state.open}/>
          </div>
          <div className="col-xs-6 col-xs-12 chart">
            <p className="test-result">
              <span className="text-gray">Coverage: {report.summary.lines_percent}%</span>
            </p>
          </div>
        <OutputDisplay open={this.state.open} stderr={report.stderr} stdout={report.stdout} />
        </div>
      </div>
    );
  }
}

KarmaCoverage.propTypes = {
  report: React.PropTypes.object.isRequired
}

export default KarmaCoverage;
