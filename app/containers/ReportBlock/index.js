import React from 'react';

import ReportHeader from 'components/ReportHeader';

import Flake8Vis from 'components/Flake8Vis';
import UnittestVis from 'components/UnittestVis';
import CoverageVis from 'components/CoverageVis';
import EslintVis from 'components/EslintVis';
import KarmaTestsVis from 'components/KarmaTestsVis';
import KarmaCoverageVis from 'components/KarmaCoverageVis';

function ReportBlock({report}) {

  const chooseVis = (r, index) => {
    let specificReport = null;
    switch (r.type) {
      case 'flake8':
        specificReport = <Flake8Vis key={index} summary={r.summary} />;
        break;
      case 'django-unittest':
        specificReport = <UnittestVis key={index} summary={r.summary} />;
        break;
      case 'django-unittest-coverage':
        specificReport = <CoverageVis key={index} summary={r.summary} />;
        break;
      case 'eslint':
        specificReport = <EslintVis key={index} summary={r.summary} />;
        break;
      case 'karma':
        specificReport = <KarmaTestsVis key={index} summary={r.summary} />;
        break;
      case 'karma-coverage':
        specificReport = <KarmaCoverageVis key={index} summary={r.summary} />;
        break;
    }
    return specificReport
  };

  return (
    <div className="col-xs-4">
      <ReportHeader report={report}/>
      {report.reports.map((r, index) => chooseVis(r, index))}
    </div>
  );
}

export default ReportBlock;
