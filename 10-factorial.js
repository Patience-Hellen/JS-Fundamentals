const args = process.argv.slice(2);
const num = parseInt(args[0]);

function fact(num) {
  if (isNaN(num) || num < 1) {
    return 1;
  } else {
  return num * fact(num - 1);
  }
}

  console.log(fact(num));
