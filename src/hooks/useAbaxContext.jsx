import { useState, useRef, useEffect, createContext, useContext } from "react";
import {
  getWholePositionCount,
  getDecimalPositionCount,
} from "@utilities/number.js";
import operationsDictionary from "@utilities/operationsDictionary.js";

const AbaxContext = createContext({
  currentNumber: null,
  currentAppendMode: "normal",
  decimalPositionValue: 0,
  currentDisplay: 0,
  positionalDisplayValue: 0,
  onNumberKeyClick: () => {},
  onOperationKeyClick: () => {},
  onResultKeyClick: () => {},
  onResetKeyClick: () => {},
  onSignKeyClick: () => {},
  onDecimalKeyClick: () => {},
  currentResult: null,
  currentOperation: "",
});

export const AbaxProvider = ({ children }) => {
  const [currentResult, setCurrentResult] = useState(null);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [decimalPositionValue, setDecimalPositionValue] = useState(0);
  const [positionalDisplayValue, setPositionalDisplayValue] = useState(0);
  const [currentOperation, setCurrentOperation] = useState("");
  const [currentAppendMode, setCurrentAppendMode] = useState("normal");

  useEffect(() => {
    setDecimalPositionValue(getDecimalPositionCount(currentNumber));
  }, [currentNumber]);

  useEffect(() => {
    let display = 0;
    if (currentOperation && currentNumber !== null && currentResult !== null) {
      display = executeOperation(
        currentOperation,
        currentResult,
        currentNumber,
      );
    } else if (currentResult === null) {
      display = currentNumber;
    } else if (currentNumber === null) {
      display = currentResult;
    }
    setCurrentDisplay(display);
  }, [currentOperation, currentNumber, currentResult]);

  useEffect(() => {
    setPositionalDisplayValue(getDecimalPositionCount(currentDisplay));
  }, [currentDisplay]);

  const onNumberKeyClick = (value) => {
    if (currentNumber === null && !currentOperation) {
      setCurrentResult(null);
    }
    setCurrentNumber(value);
  };

  const executeOperation = (currentOperation, currentResult, currentNumber) => {
    let result = operationsDictionary[currentOperation](
      currentResult,
      currentNumber,
    );

    if (getDecimalPositionCount(result) > 0 && (result + "").length > 9) {
      result = result.toFixed(8 - getWholePositionCount(result));
    } else if (result > 999999999 || result < 0) {
      result = "error";
    }

    return result || null;
  };

  const onOperationKeyClick = (value) => {
    if (currentNumber === null && currentResult === null && !currentOperation) {
      return;
    }

    if (currentNumber !== null && currentResult !== null) {
      setCurrentResult(
        executeOperation(currentOperation, currentResult, currentNumber),
      );
      setCurrentNumber(null);
      setCurrentAppendMode("normal");
    } else if (currentNumber !== null) {
      setCurrentResult(currentNumber);
      setCurrentNumber(null);
    }
    setCurrentOperation(value);
    setCurrentAppendMode("normal");
  };

  const onResultKeyClick = () => {
    if (currentNumber !== null && currentResult !== null && currentOperation) {
      const operationResult = executeOperation(
        currentOperation,
        currentResult,
        currentNumber,
      );
      setCurrentResult(operationResult);

      setCurrentOperation("");
      setCurrentNumber(null);
      setCurrentAppendMode("normal");
    }
  };

  const onResetKeyClick = () => {
    setCurrentNumber(null);
    setCurrentResult(null);
    setCurrentOperation("");
    setCurrentAppendMode("normal");
  };

  const onSignKeyClick = () => {
    if (currentNumber !== null && Math.abs(currentNumber) <= currentResult) {
      setCurrentNumber(currentNumber * -1);
    }
  };

  const onDecimalKeyClick = () => setCurrentAppendMode("decimal");

  return (
    <AbaxContext.Provider
      value={{
        currentNumber,
        currentAppendMode,
        decimalPositionValue,
        currentDisplay,
        positionalDisplayValue,
        onNumberKeyClick,
        onOperationKeyClick,
        onResultKeyClick,
        onResetKeyClick,
        onSignKeyClick,
        onDecimalKeyClick,
        currentResult,
        currentOperation,
      }}
    >
      {children}
    </AbaxContext.Provider>
  );
};

const useAbaxContext = () => useContext(AbaxContext);

export default useAbaxContext;
