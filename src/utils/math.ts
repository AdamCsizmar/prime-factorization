import spellNumber from "./translateNumber";

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

function primeFactors(number: number): TreeNode {
  const result: TreeNode = { name: number, spelled: spellNumber(number) };

  if (isPrime(number)) {
    return { name: number, spelled: spellNumber(number), prime: true };
  }

  for (let divisor = 2; divisor <= number; divisor++) {
    if (number % divisor === 0) {
      result.children = [
        { name: divisor, spelled: spellNumber(divisor), prime: true },
        primeFactors(number / divisor),
      ];
      break;
    }
  }

  return result;
}

interface TreeNode {
  name: number;
  spelled: string;
  prime?: boolean;
  children?: TreeNode[];
}

export { greatestCommonDivisor, leastCommonMultiple, primeFactors, isPrime };
