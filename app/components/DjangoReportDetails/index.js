import React from 'react';

import styles from './styles.css';
import OutputDisplay from 'components/OutputDisplay';
import ReportHeader from 'components/ReportHeader';


function DjangoReportDetails({report}) {
  return (
    <div className="col-xs-12">
      <ReportHeader report={report} />
      <h2>flake8</h2>
      <OutputDisplay output={report.flake8.output.join('\n')} />
      <h2>unittest</h2>
      <OutputDisplay output={report.unittest.output.join('\n')} />
      <h2>coverage.py</h2>
      <OutputDisplay output={report.coverage.output.join('\n')} />
    </div>
  );
}

export default DjangoReportDetails;
