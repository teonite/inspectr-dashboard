import React from 'react';

import styles from './styles.css';

import EslintVis from 'components/EslintVis';
import ReportHeader from 'components/ReportHeader';


function JavascriptReport({report}) {
  return (
    <div className="col-xs-4">
      <ReportHeader report={report} />
      <EslintVis summary={report.eslint.summary} />
    </div>
  );
}

export default JavascriptReport;
