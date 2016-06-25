import React from 'react';

import styles from './styles.css';

function DjangoReport({report}) {
  return (
    <div className="col-xs-3">
      <h1>{report.project_name}</h1>
    </div>
  );
}

export default DjangoReport;
