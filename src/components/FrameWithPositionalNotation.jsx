import Frame from '@components/Frame.jsx'
import PositionalNotationGroup from '@components/PositionalNotationGroup.jsx'
import style from '@components/FrameWithPositionalNotation.module.css'

function FrameWithPositionalNotation ({ positionValues }) {
  return (
    <div className={style.normal}>
      <Frame />
      <PositionalNotationGroup positionValues={positionValues} />
    </div>
  )
}

export default FrameWithPositionalNotation
