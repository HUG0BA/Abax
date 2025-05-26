import BeadLine from '@components/BeadLine.jsx'
import style from '@components/Rod.module.css'

function Rod ({ beads }) {
  return (
    <div className={style.normal}>
      <BeadLine beads={beads} />
    </div>
  )
}

export default Rod
