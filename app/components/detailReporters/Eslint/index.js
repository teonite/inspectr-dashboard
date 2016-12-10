import React from 'react';

import DetailReportWrapper from 'components/DetailReportWrapper';
import { invertedArctanAsymptote } from 'utils/ranking';

class Eslint extends React.Component  {
  render() {
    const {report} = this.props;
    const totalOk = 100 * invertedArctanAsymptote(report.summary.total_problems);

    return (
      <DetailReportWrapper name="Eslint" tip="Style checker for JS and JSX" stderr={report.stderr} stdout={report.stdout}>
        <span className="text-green">OK: {totalOk.toFixed(2)}% </span>
        <span className="text-orange">Warnings: {report.summary.total_warnings} </span>
        <span className="text-red">Errors: {report.summary.total_errors}</span>
      </DetailReportWrapper>
    );
  }
}

Eslint.propTypes = {
  report: React.PropTypes.object.isRequired
}

export default Eslint;
