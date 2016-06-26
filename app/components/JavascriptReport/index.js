import React from 'react';

import styles from './styles.css';

import EslintVis from 'components/EslintVis';
import ReportHeader from 'components/ReportHeader';

import KarmaTestsVis from 'components/KarmaTestsVis';
import KarmaCoverageVis from 'components/KarmaCoverageVis';


function JavascriptReport({report}) {
  return (
    <div className="col-xs-4">
      <ReportHeader report={report} />
      <EslintVis summary={report.eslint.summary} />
      <KarmaTestsVis summary={report.karma.summary.karma} />
      <KarmaCoverageVis summary={report.karma.summary.coverage} />
    </div>
  );
}

export default JavascriptReport;
