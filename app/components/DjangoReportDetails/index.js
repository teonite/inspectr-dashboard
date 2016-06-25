import React from 'react';

import styles from './styles.css';

function DjangoReportDetails({report}) {
  return (
    <div>
      <pre>{report.flake8.output.join('\n')}</pre>
      <pre>{report.unittest.output.join('\n')}</pre>
      <pre>{report.coverage.output.join('\n')}</pre>
    </div>
  );
}

export default DjangoReportDetails;
