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
  'django-unittest': (report) => (1 - report.summary.failed_tests / report.summary.total_tests),
  'django-unittest-coverage': (report) => report.summary.coverage_percent / 100,
  'eslint': (report) => invertedArctanAsymptote(report.summary.total_problems),
  'karma': (report) => (1 - report.summary.failed_tests / report.summary.total_tests),
  'karma-coverage': (report) => report.summary.lines_percent / 100
};

export const MAX_RANK = 28;

export const rankProject = (project) => {
  // calculate rank: range <0, 1)
  const partials = project.reports.map(report => reportRanking[report['type']](report));
  const rank = partials.reduce((a, b) => a + b) / partials.length;

  // scale it to range <0, MAX_RANK)
  return Math.round((MAX_RANK - 1) * rank + 1);
}
