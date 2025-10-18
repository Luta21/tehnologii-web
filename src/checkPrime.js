const prine = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      return false;
    }
  }
  return true;
};

if (process.argv.length < 3) {
  console.log("Prea putine argumente");
} else {
  console.log(prine(parseInt(process.argv[2])));
}
