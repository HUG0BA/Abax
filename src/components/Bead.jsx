import style from '@components/Bead.module.css'

function Bead ({ variant }) {
  return <div className={style[variant]} />
}

export default Bead
