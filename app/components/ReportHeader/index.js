import React from 'react';

import styles from './styles.css';
import RankVis from 'components/RankVis';

function ReportHeader({report}) {
  return (
    <h1>
      <RankVis report={report} /> {report.project_name}
    </h1>
  );
}

export default ReportHeader;
