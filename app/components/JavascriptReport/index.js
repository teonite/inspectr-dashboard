import React from 'react';

import styles from './styles.css';

import EslintVis from 'components/EslintVis';
import RankVis from 'components/RankVis';


function JavascriptReport({report}) {
  return (
    <div className="col-xs-4">
      <h1>
        <RankVis report={report} />
        {report.project_name}
      </h1>
      <EslintVis summary={report.eslint.summary} />
    </div>
  );
}

export default JavascriptReport;
