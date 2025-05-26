import Key from '@components/Key.jsx'
import useAbaxContext from '@hooks/useAbaxContext'

function ResetKey ({ name, symbol }) {
  const { onResetKeyClick } = useAbaxContext()
  return <Key name={name} symbol={symbol} onKeyClick={onResetKeyClick} />
}

export default ResetKey
