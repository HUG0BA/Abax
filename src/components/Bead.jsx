import style from "@components/Bead.module.css";

function Bead({ variant }) {
    return <div className={style[variant]}></div>;
}

export default Bead;
