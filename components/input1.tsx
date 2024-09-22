import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./input1.module.css";

export type Input1Type = {
  className?: string;
  labelPlaceholder?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propPosition?: CSSProperties["position"];
  propTextAlign?: CSSProperties["textAlign"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propFlexDirection?: CSSProperties["flexDirection"];
};

const Input1: NextPage<Input1Type> = ({
  className = "",
  labelPlaceholder,
  propFlex,
  propPosition,
  propTextAlign,
  propDisplay,
  propMinWidth,
  propPadding,
  propHeight,
  propFlexDirection,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      position: propPosition,
      textAlign: propTextAlign,
      display: propDisplay,
      minWidth: propMinWidth,
      padding: propPadding,
      height: propHeight,
      flexDirection: propFlexDirection,
    };
  }, [
    propFlex,
    propPosition,
    propTextAlign,
    propDisplay,
    propMinWidth,
    propPadding,
    propHeight,
    propFlexDirection,
  ]);

  return (
    <div className={[styles.input, className].join(" ")}>
      <img
        className={styles.outlineSearch}
        alt=""
        src="/-outline--search@2x.png"
      />
      <input
        className={styles.label}
        placeholder={labelPlaceholder}
        type="text"
        style={labelStyle}
      />
      <img
        className={styles.outlineSearch}
        alt=""
        src="/-outline--menu@2x.png"
      />
      <img className={styles.outlineClose} alt="" src="/-outline--close.svg" />
    </div>
  );
};

export default Input1;
