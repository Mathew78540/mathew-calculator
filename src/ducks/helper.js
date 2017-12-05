/**
 * GetRandomNumber
 * 
 * @description
 * Generate random number
 * 
 * @returns {string}
 */
export const getRandomNumber = (min = 1, max = 100) => Math.floor((Math.random() * max) + min);

/**
 * GetRandomOperator
 * 
 * @description
 * Generate random operator
 * 
 * @returns {string}
 */
export const getRandomOperator = () => {
  const operators = ['+', '/', '*', '-'];

  return operators[Math.floor((Math.random() * 3) + 0)];
}

/**
 * Return Calcul result
 * 
 * @param {string} calcul
 * 
 * @returns {string}
 */
export const returnCalculResult = (calcul) => {
  try {
    return eval(calcul).toString();
  } catch (err) {
    return 'error';
  }
};

/**
 * GenerateRandomOperation
 * 
 * @description
 * Return a object with the calcul string and the result
 * 
 * @returns {Object}
 */
export const generateRandomOperation = () => {
  const numberOfDigits = getRandomNumber(1, 5);

  const array = Array.from(new Array(numberOfDigits));
  const calcul = array
    .reduce((acc, v, index) => {
      const randomNumber = getRandomNumber(1, 30);
      const randomOperator = getRandomOperator();

      if (index === array.length - 1) {
        return `${acc}${randomNumber}`;
      }

      return `${acc}${randomNumber}${randomOperator}`;
    }, ``);

  return {
    calcul,
    result: returnCalculResult(calcul),
  };
}
