/**
 * GetRandomNumber
 * 
 * @description
 * Generate random number
 */
export const getRandomNumber = (min = 1, max = 100) => Math.floor((Math.random() * max) + min);

/**
 * GetRandomOperator
 * 
 * @description
 * Generate random operator
 */
export const getRandomOperator = () => {
  const operators = ['+', '/', '*', '-'];

  return operators[Math.floor((Math.random() * 3) + 0)];
}

/**
 * GenerateRandomOperation
 * 
 * @description
 * Generate random string to calculate
 */
export const generateRandomOperation = () => {
  const numberOfDigits = getRandomNumber(1, 5);

  const array = Array.from(new Array(numberOfDigits));
  return array
    .reduce((acc, v, index) => {
      const randomNumber = getRandomNumber(1, 30);
      const randomOperator = getRandomOperator();

      if (index === array.length - 1) {
        return `${acc}${randomNumber}`;
      }

      return `${acc}${randomNumber}${randomOperator}`;
    }, ``);
}
