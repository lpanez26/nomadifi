import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Dropdown from "./dropdown";
import styles from "./label-input.module.css";

export type LabelInputType = {
  className?: string;
  label?: string;
  placeholderIconsPlaceholder?: string;
  icons?: boolean;
  showOutlineArrowIosDown?: boolean;
  propAlignSelf1?: string;
  propWidth?: string;
  propPosition?: string;
  propTop?: string;
  propLeft?: string;
  propMinWidth?: string;
  propHeight?: string;
  propWidth1?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const LabelInput: NextPage<LabelInputType> = ({
  className = "",
  propAlignSelf,
  propFlex,
  label,
  placeholderIconsPlaceholder,
  icons,
  showOutlineArrowIosDown,
  propAlignSelf1,
  propWidth,
  propPosition,
  propTop,
  propLeft,
  propMinWidth,
  propHeight,
  propWidth1,
}) => {
  const labelInputStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={[styles.labelInput, className].join(" ")}
      style={labelInputStyle}
    >
      <div className={styles.label}>{label}</div>
      <Dropdown
        propAlignSelf={propAlignSelf1}
        propWidth={propWidth}
        propPosition={propPosition}
        propTop={propTop}
        propLeft={propLeft}
        placeholderIconsPlaceholder={placeholderIconsPlaceholder}
        propMinWidth={propMinWidth}
        icons={icons}
        propHeight={propHeight}
        propWidth1={propWidth1}
        showOutlineArrowIosDown={showOutlineArrowIosDown}
      />
    </div>
  );
};

export default LabelInput;
