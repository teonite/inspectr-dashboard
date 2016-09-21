export const arctanAsymptote = (x, div = 10, max = 1) => {
  // returns value in range <0, max) for given value >= 0
  // the higher x, the higher the output
  return 2 * max * Math.atan(x / div) / Math.PI;
};

export const invertedArctanAsymptote = (x, div = 10, max = 1) => {
  // returns value in range <0, max) for given value >= 0
  // the higher x, the lower the output
  const asymptote = arctanAsymptote(x, div, max);
  return -asymptote + max;
};

// functions that rank different reports - return value in range <0, 1)
const reportRanking = {
  'flake8': (report) => invertedArctanAsymptote(report.summary.total_errors),
  'unittest': (report) => (1 - report.summary.failed_tests / report.summary.total_tests),
  'coverage-django-test': (report) => (1 - report.summary.failed_tests / report.summary.total_tests),
  'coverage-py': (report) => report.summary.coverage_percent / 100,
  'eslint': (report) => invertedArctanAsymptote(report.summary.total_problems),
  'coffeelint': (report) => invertedArctanAsymptote(report.summary.total_problems),
  'jasmine': (report) => (1 - report.summary.failed_tests / report.summary.total_tests),
  'mocha': (report) => (1 - report.summary.failed_tests / report.summary.total_tests),
  'karma-coverage': (report) => report.summary.lines_percent / 100,
  'pytest': (report) => (1 - report.summary.failed_tests / (report.summary.failed_tests + report.summary.passed_tests)),
  'coverage-pytest': (report) => (1 - report.summary.failed_tests / (report.summary.failed_tests + report.summary.passed_tests)),
  'radon-maintainability': (report) => (1 * report.summary.A + 0.5 * report.summary.B + 0 * report.summary.C) / report.summary.total,
  'radon-cyclomatic-complexity': (report) => (
    1 * report.summary.A +
    0.5 * report.summary.B +
    0.4 * report.summary.C +
    0.2 * report.summary.D +
    0.1 * report.summary.E +
    0 * report.summary.F
  ) / report.summary.total,
  'tslint': (report) => invertedArctanAsymptote(report.summary.total_errors),
};

export const MAX_RANK = 11;

export const rankProject = (project, scale=true) => {
  // calculate rank: range <0, 1)
  const nullCheckedReports = project.reports.map(report => Object.assign({}, report, {summary: report.summary ? report.summary : {}}))
  const partials = nullCheckedReports.map(report => reportRanking[report['type']](report));
  let rank = partials.map((p) => isNaN(p) ? 0 : p).reduce((a, b) => a + b, 0) / partials.length;

  if(scale) {
    // scale it to range <0, MAX_RANK)
    rank = Math.round((MAX_RANK - 1) * rank + 1);
  }

  return rank;
};
