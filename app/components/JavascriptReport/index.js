import React from 'react';

import styles from './styles.css';

function JavascriptReport({report}) {
  return (
    <div className="col-xs-4">
      <h1>{report.project_name}</h1>
    </div>
  );
}

export default JavascriptReport;
