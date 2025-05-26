export const appendNormalDigit = (currentNumber, digit) =>
  currentNumber * 10 + digit;

export const appendDecimalDigit = (currentNumber, digit, positionValue) =>
  currentNumber + digit / 10 ** positionValue;

export const appendDecimalDigitUsingString = (
  currentNumber,
  digit,
  positionValue,
) => parseFloat(currentNumber + (positionValue === 0 ? "." : "") + digit);
