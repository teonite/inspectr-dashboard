import React from 'react';

import DetailReportWrapper from 'components/DetailReportWrapper';
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
      <DetailReportWrapper name="Karma Coverage" tip="Test coverage tool for JS" stderr={report.stderr} stdout={report.stdout} >
        <span className="text-gray">Coverage: {report.summary.lines_percent}%</span>
      </DetailReportWrapper>
    );
  }
}

KarmaCoverage.propTypes = {
  report: React.PropTypes.object.isRequired
}

export default KarmaCoverage;
