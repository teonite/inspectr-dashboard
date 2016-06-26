import React from 'react';

import styles from './styles.css';
import OutputDisplay from 'components/OutputDisplay';
import ReportHeader from 'components/ReportHeader';

function JavascriptReportDetails({report}) {
  return (
    <div className="col-xs-12">
      <ReportHeader report={report} />
      {report.reports.map((r, index) => (
        <div key={index}>
          <h2>{r.type}</h2>
          <OutputDisplay output={r.output.join('\n')} />
        </div>
      ))}
    </div>
  );
}

export default JavascriptReportDetails;
