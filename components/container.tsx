import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./container.module.css";

export type ContainerType = {
  className?: string;
  image25?: string;
  doConsectetur?: string;
  aliquaIrureTemporLoremOccaecat?: string;
  minsRead?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Container: NextPage<ContainerType> = ({
  className = "",
  image25,
  doConsectetur,
  aliquaIrureTemporLoremOccaecat,
  minsRead,
  propDisplay,
  propMinWidth,
}) => {
  const minsReadStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={[styles.container31, className].join(" ")}>
      <img className={styles.image25Icon} loading="lazy" alt="" src={image25} />
      <div className={styles.articleContent}>
        <div className={styles.articleTitlesParent}>
          <div className={styles.articleTitles}>
            <div className={styles.doConsectetur}>{doConsectetur}</div>
            <h3 className={styles.aliquaIrureTempor}>
              {aliquaIrureTemporLoremOccaecat}
            </h3>
          </div>
          <div className={styles.articleDatesParent}>
            <div className={styles.articleDates}>
              <div className={styles.dec222022}>Dec 22, 2022</div>
            </div>
            <div className={styles.frame}>
              <div className={styles.minsRead} style={minsReadStyle}>
                {minsRead}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
