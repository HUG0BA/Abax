import Key from '@components/Key'
import useAbaxContext from '@hooks/useAbaxContext'

function DecimalKey ({ name, symbol }) {
  const { onDecimalKeyClick } = useAbaxContext()

  return (
    <Key
      name={name}
      symbol={symbol}
      onKeyClick={() => onDecimalKeyClick('decimal')}
    />
  )
}

export default DecimalKey
