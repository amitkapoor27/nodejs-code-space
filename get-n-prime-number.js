function getPrime(n){
  let num = 2;
  const a = 100;
  let b = 0;

  while (b < a) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
      b++;
    }
    num++;
  }
}

getPrime(1000);
