import Bead from "@components/Bead.jsx";
import style from "@components/BeadLine.module.css";

function BeadLine({ beads }) {
    const dividerIndex = beads.findLastIndex((b) => !b.isActive);
    const beadComponents = beads.map((b, i) => (
        <Bead
            key={b.id}
            variant={
                dividerIndex === -1 && i === 0
                    ? "finalizer"
                    : i === dividerIndex && dividerIndex !== beads.length - 1
                        ? "divider"
                        : b.isActive
                            ? "active"
                            : "inactive"
            }
        />
    ));
    return <div className={style.normal}>{beadComponents}</div>;
}

export default BeadLine;
