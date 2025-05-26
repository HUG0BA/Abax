import style from '@components/PositionalNotation.module.css'
function PositionalNotation ({ positionValue }) {
  return (
    <div className={style.normal}>
      <p>{positionValue}</p>
    </div>
  )
}

export default PositionalNotation
