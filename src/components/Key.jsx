import style from "@components/Key.module.css";

function Key({ name, symbol, onKeyClick }) {
  return (
    <button
      style={{ gridArea: name }}
      className={style.normal}
      type="button"
      onClick={onKeyClick}
    >
      {symbol}
    </button>
  );
}

export default Key;
