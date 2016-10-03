import React from 'react';

import DetailReportWrapper from 'components/DetailReportWrapper';
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
      <DetailReportWrapper name="Radon Cyclomatic Complexity" tip="The count of the linearly independent paths in code" stderr={report.stderr} stdout={report.stdout} >
        <span className="text-gray">Complexity </span>
        <span className="text-green">A: {report.summary.A} </span>
        <span className="text-green">B: {report.summary.B} </span>
        <span className="text-orange">C: {report.summary.C} </span>
        <span className="text-orange">D: {report.summary.D} </span>
        <span className="text-red">E: {report.summary.E} </span>
        <span className="text-red">F: {report.summary.F}</span>
      </DetailReportWrapper>
    );
  }
}

RadonCyclomaticComplexity.propTypes = {
  report: React.PropTypes.object.isRequired
};

export default RadonCyclomaticComplexity;
