const args = process.argv.slice(2);
const num = parseInt(args[0]);

function fact(num) {
  if (isNaN(n) || n < 1) {
    return 1;
  } else {
  return n * fact(n - 1);
  }
}

  console.log(fact(num));
