import React from 'react';

import styles from './styles.css';
import OutputDisplay from 'components/OutputDisplay';
import ReportHeader from 'components/ReportHeader';

function JavascriptReportDetails({report}) {
  return (
    <div className="col-xs-12">
      <ReportHeader report={report} />
      <h2>ESLint</h2>
      <OutputDisplay output={report.eslint.output.join('\n')} />
      <h2>Karma</h2>
      <OutputDisplay output={report.karma.output.join('\n')} />
    </div>
  );
}

export default JavascriptReportDetails;
