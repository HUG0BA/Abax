import { AbaxProvider } from '@hooks/useAbaxContext'
import KeyBoard from '@components/KeyBoard.jsx'
import KeyBoardWithScreen from '@components/KeyBoardWithScreen'
import FrameWithPositionalNotation from '@components/FrameWithPositionalNotation.jsx'
import Frame from '@components/Frame.jsx'
import style from '@pages/Landing.module.css'

import { positionValues } from '@assets/variables.js'

function Landing () {
  return (
    <div className={style.normal}>
      <AbaxProvider>
        <FrameWithPositionalNotation positionValues={positionValues} />
        <KeyBoardWithScreen />
      </AbaxProvider>
    </div>
  )
}

export default Landing
