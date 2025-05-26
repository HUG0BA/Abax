import KeyBoard from "@components/KeyBoard";
import useAbaxContext from "@hooks/useAbaxContext";
import style from "@components/KeyBoardWithScreen.module.css";

function KeyBoardWithScreen() {
  const { currentNumber, currentResult, currentDisplay, currentOperation } =
    useAbaxContext();

  return (
    <div className={style.normal}>
      <div>
        <p>Display {currentDisplay}</p>
        <p>
          {currentResult ?? ""} {currentOperation} {currentNumber ?? ""}
        </p>
      </div>

      <KeyBoard />
    </div>
  );
}

export default KeyBoardWithScreen;
