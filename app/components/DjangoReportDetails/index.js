import React from 'react';

import styles from './styles.css';
import OutputDisplay from 'components/OutputDisplay';


function DjangoReportDetails({report}) {
  return (
    <div>
      <h1>flake8</h1>
      <OutputDisplay output={report.flake8.output.join('\n')} />
      <h1>unittest</h1>
      <OutputDisplay output={report.unittest.output.join('\n')} />
      <h1>coverage.py</h1>
      <OutputDisplay output={report.coverage.output.join('\n')} />
    </div>
  );
}

export default DjangoReportDetails;
