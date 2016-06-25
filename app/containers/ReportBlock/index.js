import React from 'react';

import DjangoReport from 'components/DjangoReport';
import JavascriptReport from 'components/JavascriptReport';

function ReportBlock({report}) {

  let specificReport = null;
  switch (report.flavor) {
    case 'django':
      specificReport = <DjangoReport report={report} />;
      break;
    case 'javascript':
      specificReport = <JavascriptReport report={report} />;
      break;
  }

  return (
      specificReport
  );
}

export default ReportBlock;
