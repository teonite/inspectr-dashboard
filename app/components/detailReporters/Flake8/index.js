import React from 'react';

import DetailReportWrapper from 'components/DetailReportWrapper';
import { invertedArctanAsymptote } from 'utils/ranking';

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
      <DetailReportWrapper open={this.state.open} name="Flake8" tip="Style checker for Python" stderr={report.stderr} stdout={report.stdout} >
        <span className="text-green">OK: {totalOk} </span>
        <span className="text-red">Error: {100 - totalOk}</span>
      </DetailReportWrapper>
    );
  }
}

Flake8.propTypes = {
  report: React.PropTypes.object.isRequired,
};

export default Flake8;
