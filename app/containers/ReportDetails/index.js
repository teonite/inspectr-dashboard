import React from 'react';
import { subscribe } from 'horizon-react';
import JavascriptReportDetails from 'components/JavascriptReportDetails';
import DjangoReportDetails from 'components/DjangoReportDetails';


class ReportDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function

  chooseReportType(report) {
    let specificReport = null;
    switch (report.flavor) {
      case 'django':
        specificReport = <DjangoReportDetails report={report} />;
        break;
      case 'javascript':
        specificReport = <JavascriptReportDetails report={report} />;
        break;
      default:
        // FIXME: unknown report type
        specificReport = <JavascriptReportDetails report={report} />;
    }

    return specificReport;
  }

  render() {
    return (
      <div>
        {this.props.reports.map((report, index) => this.chooseReportType(report))}
      </div>
    );
  }
}

ReportDetails.propTypes = {
  reports: React.PropTypes.array.isRequired
};

const mapDataToProps = {
  reports: (hz, props) => hz('reports').find(props.params.reportId),
};

export default subscribe({
  mapDataToProps,
})(ReportDetails);

