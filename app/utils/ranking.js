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

// rank weights
const W = {
  tests: 0.25,          // tests_pass / tests_total
  coverage: 0.25,       // test_coverage
  lint: 0.25,           // linting, using arctan asymptote
  maintainability: 0.25 // not implemented yet
};

const MAX_RANK = 28;
const ranking = {
  django: ({coverage, unittest, flake8}) => {
    return MAX_RANK * (
        W.lint * invertedArctanAsymptote(flake8.summary.total_errors) +
        W.tests * (1 - unittest.summary.failed_tests / unittest.summary.total_tests) +
        W.coverage * coverage.summary.coverage_percent / 100
        // TODO: + W.maintainability * maintainability
      );
  },
  javascript: ({eslint}) => {
    return MAX_RANK * (
        W.lint * invertedArctanAsymptote(eslint.summary.total_problems)
        // TODO: W.tests * (1 - summary.failed_tests / summary.total_tests) +
        // TODO: W.coverage * summary.coverage_percent / 100 +
        // TODO: + W.maintainability * maintainability
      );
  }
};

export const rankProject = (report) => Math.round(ranking[report.flavor](report));
