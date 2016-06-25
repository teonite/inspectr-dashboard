import React from 'react';

import styles from './styles.css';
import OutputDisplay from 'components/OutputDisplay';


function JavascriptReportDetails({report}) {
  return (
    <div>
      <h1>ESLint</h1>
      <OutputDisplay output={report.eslint.output} />
    </div>
  );
}

export default JavascriptReportDetails;
