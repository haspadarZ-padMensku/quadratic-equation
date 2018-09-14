module.exports = function solveEquation(equation) {
  // your implementation
  equation = equation.replace(/\s|\*/g, '');
  let arr = equation.split(/x\^2|x/g);

  let a = +arr[0];
  let b = +arr[1];
  let c = +arr[2];

  let d = Math.pow(b, 2) - 4 * a * c;

  let x1 = Math.round((- b + Math.sqrt(d)) / (2 * a));
  let x2 = Math.round((- b - Math.sqrt(d)) / (2 * a));

  let res = [x1, x2];

  return res.sort((a, b) => a - b);
}
