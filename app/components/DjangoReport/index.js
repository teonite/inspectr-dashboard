import React from 'react';

import styles from './styles.css';
import Flake8Vis from 'components/Flake8Vis';
import UnittestVis from 'components/UnittestVis';
import CoverageVis from 'components/CoverageVis';
import RankVis from 'components/RankVis';

function DjangoReport({report}) {
  return (
    <div className="col-xs-4">
      <h1>
        <RankVis report={report} />
        {report.project_name}
      </h1>
      <Flake8Vis summary={report.flake8.summary} />
      <UnittestVis summary={report.unittest.summary} />
      <CoverageVis summary={report.coverage.summary} />
    </div>
  );
}

export default DjangoReport;
