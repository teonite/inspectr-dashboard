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

export const MAX_RANK = 28;

// scales rank (from ranking functions) to range (1, MAX_RANK)
const scaleRank = (rankResult) => Math.round((MAX_RANK - 1) * rankResult + 1);

// functions that rank different flavored projects - return value (0, 1)
const ranking = {
  django: ({coverage, unittest, flake8}) => {
    return (
        W.lint * invertedArctanAsymptote(flake8.summary.total_errors) +
        W.tests * (1 - unittest.summary.failed_tests / unittest.summary.total_tests) +
        W.coverage * coverage.summary.coverage_percent / 100
        // TODO: + W.maintainability * maintainability
      );
  },
  javascript: ({eslint, karma}) => {
    return (
        W.lint * invertedArctanAsymptote(eslint.summary.total_problems) +
        W.tests * (1 - karma.summary.karma.failed_tests / karma.summary.karma.total_tests) +
        W.coverage * karma.summary.coverage.lines_percent / 100
        // TODO: + W.maintainability * maintainability
      );
  }
};

export const rankProject = (report) => scaleRank(ranking[report.flavor](report));
