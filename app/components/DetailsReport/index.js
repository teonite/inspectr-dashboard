import React from 'react';

import DetailsFlake8 from 'components/detailReporters/Flake8';
import DetailsUnittest from 'components/detailReporters/Unittest';
import DetailsCoverage from 'components/detailReporters/Coverage';
import DetailsEslint from 'components/detailReporters/Eslint';
import DetailsCoffeelint from 'components/detailReporters/Coffeelint';
import DetailsJasmineTests from 'components/detailReporters/JasmineTests';
import DetailsMochaTests from 'components/detailReporters/MochaTests';
import DetailsKarmaCoverage from 'components/detailReporters/KarmaCoverage';
import DetailsPytest from 'components/detailReporters/Pytest';
import DetailsError from 'components/detailReporters/Error';
import DetailsRadonMaintainability from 'components/detailReporters/RadonMaintainability';
import DetailsRadonCyclomaticComplexity from 'components/detailReporters/RadonCyclomaticComplexity';
import DetailsTslint from 'components/detailReporters/Tslint';


function Report({report}) {
  console.log(report)
  const choose = (report, index) => {
    if (report.summary === null) {
      return <DetailsError key={index} report={report}/>
    }

    let specificReport = null;
    switch (report.type) {
      case 'flake8':
        //specificReport = <DetailsFlake8 key={index} report={report} />;
        break;
      case 'unittest':
        specificReport = <DetailsUnittest key={index} report={report} />;
        break;
      case 'pytest':
        //specificReport = <DetailsPytest key={index} report={report} />;
        break;
      case 'radon-maintainability':
        //specificReport = <DetailsRadonMaintainability key={index} report={report} />;
        break;
      case 'radon-cyclomatic-complexity':
        //specificReport = <DetailsRadonCyclomaticComplexity key={index} report={report} />;
        break;
      case 'coverage-py':
        //specificReport = <DetailsCoverage key={index} report={report} />;
        break;
      case 'eslint':
        //specificReport = <DetailsEslint key={index} report={report} />;
        break;
      case 'coffeelint':
        //specificReport = <DetailsCoffeelint key={index} report={report} />;
        break;
      case 'jasmine':
        //specificReport = <DetailsJasmineTests key={index} report={report} />;
        break;
      case 'mocha':
        specificReport = <DetailsMochaTests key={index} report={report} />;
        break;
      case 'karma-coverage':
        specificReport = <DetailsKarmaCoverage key={index} report={report} />;
        break;
      case 'tslint':
        //specificReport = <DetailsTslint key={index} report={report} />;
        break;

    }
    return specificReport
  };

  return choose(report)
}

Report.propTypes = {
  report: React.PropTypes.object.isRequired,
};

export default Report;
