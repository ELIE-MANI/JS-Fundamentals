function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

let n = parseInt(process.argv[2]);
if (isNaN(n)) {
  n = 1;
}
console.log(factorial(n));
