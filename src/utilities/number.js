const getLocaleDecimalSeparator = () => {
  const n = 1.6;
  return n.toLocaleString().substring(1, 2);
};

export const getWholePartAsNumber = (number) => {
  return Math.floor(number);
};

export const getDecimalPartAsNumber = (number) => {
  const dividedNumber = (number + "").split(getLocaleDecimalSeparator());
  if (dividedNumber.length > 1) {
    return parseInt(dividedNumber[1], 10);
  }
  return 0;
};

export const getDecimalPartAsString = (number) => {
  const dividedNumber = (number + "").split(getLocaleDecimalSeparator());
  if (dividedNumber.length > 1) {
    return dividedNumber[1];
  }
  return "";
};

export const getDecimalPositionCount = (number) => {
  const dividedNumber = (number + "").split(getLocaleDecimalSeparator());
  if (dividedNumber.length > 1) {
    return dividedNumber[1].length;
  }
  return 0;
};

export const getWholePositionCount = (number) =>
  (Math.floor(number) + "").length;
