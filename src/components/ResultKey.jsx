import Key from '@components/Key.jsx'
import useAbaxContext from '@hooks/useAbaxContext'

function ResultKey ({ name, symbol }) {
  const { onResultKeyClick } = useAbaxContext()
  return <Key name={name} symbol={symbol} onKeyClick={onResultKeyClick} />
}

export default ResultKey
