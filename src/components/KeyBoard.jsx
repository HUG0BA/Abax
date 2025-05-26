import NumberKey from '@components/NumberKey'
import DecimalKey from '@components/DecimalKey'
import ResetKey from '@components/ResetKey'
import OperationKey from '@components/OperationKey'
import ResultKey from '@components/ResultKey'
import SignKey from '@components/SignKey'
import style from '@components/KeyBoard.module.css'
import { keys } from '@assets/variables.js'

function KeyBoard () {
  const keyComponentByKeyType = { number: NumberKey, decimal: DecimalKey, reset: ResetKey, operation: OperationKey, result: ResultKey, sign: SignKey }
  const keyComponents = keys.map((k) => { const CurrentKey = keyComponentByKeyType[k.keyType] 
    return <CurrentKey key={k.id} name={k.id} symbol={k.symbol} />})
  return (<><div className={style.normal}>{keyComponents}</div></>)
}

export default KeyBoard
