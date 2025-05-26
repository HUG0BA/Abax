import {
  getWholePartAsNumber,
  getDecimalPartAsNumber,
} from "@utilities/number";

const MAX_BEADS_PER_GROUP = 9;

export function generatePaddedBeadsRepresentingInteger(number, cap = 9) {
  const beads = [];

  const numberBeads = generateBeadsRepresentingInteger(number);
  for (let i = 0; i < numberBeads.length; i++) {
    beads.push(numberBeads[i]);
  }

  const padBeads = generatePadBeads(cap - beads.length);
  for (let i = 0; i < padBeads.length; i++) {
    beads.push(padBeads[i]);
  }

  return beads;
}

export function generatePaddedBeadsRepresentingDecimal(number, cap = 9) {
  const beads = [];

  const numberBeads = generateBeadsRepresentingDecimal(number);
  for (let i = 0; i < numberBeads.length; i++) {
    beads.push(numberBeads[i]);
  }

  const padBeads = generatePadBeads(cap - beads.length);
  for (let i = 0; i < padBeads.length; i++) {
    beads.push(padBeads[i]);
  }

  return beads;
}

function generatePadBeads(size) {
  const padBeads = [];

  for (let i = 0; i < size; i++) {
    padBeads.push(generateBeadLine(0));
  }

  return padBeads;
}

export function generateBeadsRepresentingDecimal(number) {
  const wholePart = getWholePartAsNumber(number);
  const decimalPart = getDecimalPartAsNumber(number);

  const beads = [];

  const wholeBeads = generateBeadsRepresentingInteger(wholePart);
  for (let i = 0; i < wholeBeads.length; i++) {
    beads.push(wholeBeads[i]);
  }

  if (decimalPart === 0) {
    return beads;
  }

  beads.splice(0, 0, generateBeadLine(0)); //Add decimal point
  const decimalBeads =
    generateBeadsRepresentingInteger(decimalPart).toReversed();
  for (let i = 0; i < decimalBeads.length; i++) {
    beads.splice(0, 0, decimalBeads[i]);
  }

  return beads;
}

export function generateBeadsRepresentingInteger(number) {
  if (number === 0) {
    return [generateBeadLine(0)];
  }

  const beads = [];
  let currentNumber = number;

  while (currentNumber > 0) {
    const digit = currentNumber % 10;
    beads.push(generateBeadLine(digit));
    currentNumber = Math.floor(currentNumber / 10);
  }

  return beads;
}

export function generateBeadLine(numActiveBeads) {
  const beadLine = [];

  for (let i = 0; i < MAX_BEADS_PER_GROUP - numActiveBeads; i++) {
    beadLine.push({
      id: `i${i}`,
      isActive: false,
    });
  }

  for (let i = 0; i < numActiveBeads; i++) {
    beadLine.push({
      id: `a${i}`,
      isActive: true,
    });
  }

  return beadLine;
}
