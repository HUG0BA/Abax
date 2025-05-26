import Rod from "@components/Rod.jsx";
import useAbaxContext from "@hooks/useAbaxContext.jsx";
import style from "@components/RodContainer.module.css";
import { generatePaddedBeadsRepresentingDecimal } from "@utilities/beadGeneration";

function RodContainer() {
  const { currentDisplay } = useAbaxContext();
  const beadRods = generatePaddedBeadsRepresentingDecimal(currentDisplay);
  const rodComponents = beadRods.map((b, i) => <Rod key={i} beads={b} />);
  return <div className={style.normal}>{rodComponents}</div>;
}

export default RodContainer;
