import React from 'react';

import styles from './styles.css';
import OutputDisplay from 'components/OutputDisplay';


function DjangoReportDetails({report}) {
  return (
    <div>
      <h1>flake8</h1>
      <OutputDisplay output={report.flake8.output} />
      <h1>unittest</h1>
      <OutputDisplay output={report.unittest.output} />
      <h1>coverage.py</h1>
      <OutputDisplay output={report.coverage.output} />
    </div>
  );
}

export default DjangoReportDetails;
