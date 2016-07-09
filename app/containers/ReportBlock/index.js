import React from 'react';

import ReportHeader from 'components/ReportHeader';

import Flake8Vis from 'components/reporters/Flake8Vis';
import UnittestVis from 'components/reporters/UnittestVis';
import CoverageVis from 'components/reporters/CoverageVis';
import EslintVis from 'components/reporters/EslintVis';
import CoffeelintVis from 'components/reporters/CoffeelintVis';
import JasmineTestsVis from 'components/reporters/JasmineTestsVis';
import MochaTestsVis from 'components/reporters/MochaTestsVis';
import KarmaCoverageVis from 'components/reporters/KarmaCoverageVis';
import PytestVis from 'components/reporters/PytestVis';
import ErrorVis from 'components/reporters/ErrorVis';
import RadonMaintainabilityVis from 'components/reporters/RadonMaintainabilityVis';

function ReportBlock({ project }) {
  const chooseVis = (report, index) => {
    if (report.summary === null) {
      return <ErrorVis key={index} report={report} />
    }

    let specificReport = null;
    switch (report.type) {
      case 'flake8':
        specificReport = <Flake8Vis key={index} summary={report.summary} />;
        break;
      case 'unittest':
        specificReport = <UnittestVis key={index} summary={report.summary} />;
        break;
      case 'pytest':
        specificReport = <PytestVis key={index} summary={report.summary} />;
        break;
      case 'radon-maintainability':
        specificReport = <RadonMaintainabilityVis key={index} summary={report.summary} />;
        break;
      case 'coverage-py':
        specificReport = <CoverageVis key={index} summary={report.summary} />;
        break;
      case 'eslint':
        specificReport = <EslintVis key={index} summary={report.summary} />;
        break;
      case 'coffeelint':
        specificReport = <CoffeelintVis key={index} summary={report.summary} />;
        break;
      case 'jasmine':
        specificReport = <JasmineTestsVis key={index} summary={report.summary} />;
        break;
      case 'mocha':
        specificReport = <MochaTestsVis key={index} summary={report.summary} />;
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

ReportBlock.propTypes = {
  project: React.PropTypes.object.isRequired
}

export default ReportBlock;
