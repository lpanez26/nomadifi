import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./textfield.module.css";

export type TextfieldType = {
  className?: string;
  prestaFICredit?: string;
  caretDown?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propBorder?: CSSProperties["border"];
};

const Textfield: NextPage<TextfieldType> = ({
  className = "",
  propTop,
  propBorder,
  prestaFICredit,
  caretDown,
}) => {
  const textfieldStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      border: propBorder,
    };
  }, [propTop, propBorder]);

  return (
    <div
      className={[styles.textfield, className].join(" ")}
      style={textfieldStyle}
    >
      <div className={styles.prestafiCredit}>{prestaFICredit}</div>
      <div className={styles.creditTypeDropdown}>
        <img className={styles.caretDownIcon} alt="" src={caretDown} />
      </div>
    </div>
  );
};

export default Textfield;
