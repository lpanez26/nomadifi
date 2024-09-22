import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./dropdown.module.css";

export type DropdownType = {
  className?: string;
  placeholderIconsPlaceholder?: string;
  icons?: boolean;
  showOutlineArrowIosDown?: boolean;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propMinWidth?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
};

const Dropdown: NextPage<DropdownType> = ({
  className = "",
  propAlignSelf,
  propWidth,
  propPosition,
  propTop,
  propLeft,
  placeholderIconsPlaceholder,
  propMinWidth,
  icons,
  propHeight,
  propWidth1,
  showOutlineArrowIosDown,
}) => {
  const dropdownStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propAlignSelf, propWidth, propPosition, propTop, propLeft]);

  const placeholderIconsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const iconsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
    };
  }, [propHeight, propWidth1]);

  return (
    <div
      className={[styles.dropdown, className].join(" ")}
      style={dropdownStyle}
    >
      <input
        className={styles.placeholderIcons}
        placeholder={placeholderIconsPlaceholder}
        type="text"
        style={placeholderIconsStyle}
      />
      {!icons && (
        <div className={styles.icons} style={iconsStyle}>
          <img
            className={styles.outlineClose}
            alt=""
            src="/-outline--close.svg"
          />
          {showOutlineArrowIosDown && (
            <img
              className={styles.outlineArrowIosDown}
              alt=""
              src="/-outline--arrowiosdown.svg"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
