import Key from "@components/Key";
import useAbaxContext from "@hooks/useAbaxContext";
import {
  appendDecimalDigitUsingString,
  appendNormalDigit,
} from "@utilities/keyboard";

function NumberKey({ name, symbol }) {
  const {
    onNumberKeyClick,
    currentAppendMode,
    currentNumber,
    decimalPositionValue,
  } = useAbaxContext();

  return (
    <Key
      name={name}
      symbol={symbol}
      onKeyClick={() => {
        if (currentAppendMode === "normal") {
          onNumberKeyClick(appendNormalDigit(currentNumber, symbol));
        } else if (currentAppendMode === "decimal") {
          onNumberKeyClick(
            appendDecimalDigitUsingString(
              currentNumber,
              symbol,
              decimalPositionValue,
            ),
          );
        }
      }}
    />
  );
}

export default NumberKey;
