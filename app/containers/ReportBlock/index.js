import React from 'react';

import ReportHeader from 'components/ReportHeader';

import Flake8Vis from 'components/Flake8Vis';
import UnittestVis from 'components/UnittestVis';
import CoverageVis from 'components/CoverageVis';
import EslintVis from 'components/EslintVis';
import KarmaTestsVis from 'components/KarmaTestsVis';
import KarmaCoverageVis from 'components/KarmaCoverageVis';

function ReportBlock({project}) {

  const chooseVis = (report, index) => {
    let specificReport = null;
    switch (report.type) {
      case 'flake8':
        specificReport = <Flake8Vis key={index} summary={report.summary} />;
        break;
      case 'django-unittest':
        specificReport = <UnittestVis key={index} summary={report.summary} />;
        break;
      case 'django-unittest-coverage':
        specificReport = <CoverageVis key={index} summary={report.summary} />;
        break;
      case 'eslint':
        specificReport = <EslintVis key={index} summary={report.summary} />;
        break;
      case 'karma':
        specificReport = <KarmaTestsVis key={index} summary={report.summary} />;
        break;
      case 'karma-coverage':
        specificReport = <KarmaCoverageVis key={index} summary={report.summary} />;
        break;
    }
    return specificReport
  };

  return (
    <div className="col-xs-6">
      <ReportHeader project={project}/>
      {project.reports.map((report, index) => chooseVis(report, index))}
    </div>
  );
}

export default ReportBlock;
