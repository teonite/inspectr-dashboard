import React from 'react';

import styles from './styles.css';

function JavascriptReportDetails({report}) {
  return (
    <div>
      <pre>{report.eslint.output.join('\n')}</pre>
    </div>
  );
}

export default JavascriptReportDetails;
