import { useRef, useEffect } from "react";
import PositionalNotation from "@components/PositionalNotation";
import style from "@components/PositionalNotationGroup.module.css";
import useAbaxContext from "@hooks/useAbaxContext";
import { positionValueMapping } from "@assets/variables";

function PositionalNotationGroup({ positionValues }) {
  const { positionalDisplayValue } = useAbaxContext();

  const positionValuesRef = useRef(null);

  useEffect(() => {
    const currentPositionValue =
      positionValueMapping[positionalDisplayValue + ""];
    console.log(positionalDisplayValue);
    const positionValueIndex = positionValues.indexOf(currentPositionValue);
    scrollToIndex(positionValueIndex);
  });

  function scrollToIndex(index) {
    const groupNode = positionValuesRef.current;

    const positionValueNode = groupNode.querySelectorAll("div")[index];
    positionValueNode.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const positionalNotationComponents = positionValues.map((p) => (
    <PositionalNotation key={p} positionValue={p} />
  ));

  return (
    <div ref={positionValuesRef} className={style.vertical}>
      {positionalNotationComponents}
    </div>
  );
}

export default PositionalNotationGroup;
