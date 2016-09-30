import React from 'react';

import ReportHeader from 'components/DetailReportHeader';
import OutputDisplay from 'components/OutputDisplay';

class Tslint extends React.Component  {

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
              <ReportHeader name="TSLint" tip="Style checker for TypeScript" open={this.state.open}/>
            </div>
            <div className="col-xs-6 col-xs-12 chart">
              <p className="test-result">
                <span className="text-red">Errors: {report.summary.total_errors} </span>
              </p>
            </div>
          </div>
          <OutputDisplay open={this.state.open} stderr={report.stderr} stdout={report.stdout} />
        </div>
    );
  }
}

Tslint.propTypes = {
  report: React.PropTypes.object.isRequired
};

export default Tslint;
