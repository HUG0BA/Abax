import Key from '@components/Key.jsx'
import useAbaxContext from '@hooks/useAbaxContext'

function OperationKey ({ name, symbol }) {
  const { onOperationKeyClick } = useAbaxContext()

  return (
    <Key
      name={name}
      symbol={symbol}
      onKeyClick={() => onOperationKeyClick(symbol)}
    />
  )
}

export default OperationKey
