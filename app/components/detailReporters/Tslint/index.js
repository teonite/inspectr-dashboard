import React from 'react';

import DetailReportWrapper from 'components/DetailReportWrapper';
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
      <DetailReportWrapper name="TSLint" tip="Style checker for TypeScript" stderr={report.stderr} stdout={report.stdout} >
        <span className="text-red">Errors: {report.summary.total_errors} </span>
      </DetailReportWrapper>
    );
  }
}

Tslint.propTypes = {
  report: React.PropTypes.object.isRequired
};

export default Tslint;
