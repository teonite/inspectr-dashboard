import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import RankVis from 'components/RankVis';

function ReportHeader({report}) {
  return (
    <h1>
      <RankVis report={report} /> <Link to={`/details/${report.id}`}>{report.project_name}</Link>
    </h1>
  );
}

export default ReportHeader;
