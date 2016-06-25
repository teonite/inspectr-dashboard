export const arctanAsymptote = (x, div=10, max=1) => {
  // returns value in range <0, max) for given value >= 0
  // the higher x, the higher the output
  return 2 * max * Math.atan(x / div) / Math.PI;
};

export const invertedArctanAsymptote = (x, div=10, max=1) => {
  // returns value in range <0, max) for given value >= 0
  // the higher x, the lower the output
  const asymptote = arctanAsymptote(x, div, max);
  return -asymptote + max;
};