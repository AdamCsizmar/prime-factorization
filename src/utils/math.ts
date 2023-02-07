import { exit } from "process";

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
  if (isPrime(number)) {
    return { value: number };
  }
  if (number < 2) {
    return { value: number };
  }

  let divisor = 2;
  while (number % divisor !== 0) {
    divisor++;
  }

  const factorTree = {
    name: number,
    value: number,
    children: [
      {
        name: divisor,
        value: divisor,
      },
      {
        name: (number / divisor),
        value: number / divisor,
        children: [primeFactorization(number / divisor)],
      },
    ],
  };
  return factorTree;
};


function primeFactors(number: number): TreeNode {
  const result: TreeNode = { name: number };

  if (isPrime(number)) {
    return { name: number };
  }

  for (let divisor = 2; divisor <= number; divisor++) {
    if (number % divisor === 0) {
      const children: TreeNode[] = [{ name: divisor }];
      let child = number / divisor;

      while (child % divisor === 0) {
        child = child / divisor;
      }

      children.push(createTree(child));
      result.children = children;
      break;
    }
  }

  return result;
}

interface TreeNode {
  name: number;
  children?: TreeNode[];
}

function createTree(number: number): TreeNode {
  return primeFactors(number);
}






/* const return = {
  name: 220,
  children: [
    {
      name: 2,
    },
    {
      name: 110,
      children: [
        {
          name: 2
        },
        {
          name: 55,
          children: [
            {
              name: 5
            },
            {
              name: 11
            }
          ]
        }
      ]
    }
  ]
} */

export { greatestCommonDivisor, leastCommonMultiple, primeFactorization, primeFactors };
