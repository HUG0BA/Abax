import Key from "@components/Key.jsx";
import useAbaxContext from "@hooks/useAbaxContext";

function SignKey({ name, symbol }) {
  const { onSignKeyClick } = useAbaxContext();
  return <Key name={name} symbol={symbol} onKeyClick={onSignKeyClick} />;
}

export default SignKey;
