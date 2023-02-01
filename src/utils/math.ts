const greatestCommonDivisor = (num1: number, num2: number): number => {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  while (num2) {
    var t = num2;
    num2 = num1 % num2;
    num1 = t;
  }
  return num1;
};

const leastCommonMultiple = (num1: number, num2: number): number => {
  return num1 * (num2 / greatestCommonDivisor(num1, num2));
};

const isPrime = (num: number): boolean => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const primeFactorization = (number: number): object => {
  if(isPrime(number)) return {};
  if (number < 2) {
    return { value: number };
  }

  let divisor = 2;
  while (number % divisor !== 0) {
    divisor++;
  }
  
  const factorTree = {
    value: number,
    children: [
      {
        left: {
          number: {
            name: divisor.toString(),
            value: divisor,
          },
        },
      },
      {
        right: {
          number: {
            name: (number / divisor).toString(),
            value: number / divisor,
          },
          children: [
            primeFactorization(number / divisor)
          ],
        },
      },
    ]
  }
  return factorTree;
}

export { greatestCommonDivisor, leastCommonMultiple, primeFactorization };
