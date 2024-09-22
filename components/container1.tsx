import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./container1.module.css";

export type Container1Type = {
  className?: string;
};

const Container1: NextPage<Container1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/d-design-services");
  }, [router]);

  return (
    <section className={[styles.container29, className].join(" ")}>
      <div className={styles.team}>
        <div className={styles.avatar12}>
          <h1 className={styles.h1}>💡</h1>
        </div>
        <div className={styles.teamInfo}>
          <div className={styles.teamImage}>
            <div className={styles.teamImageChild} />
            <img
              className={styles.avatar13Icon}
              loading="lazy"
              alt=""
              src="/avatar-13@2x.png"
            />
          </div>
          <img
            className={styles.lendPhotoroom11}
            alt=""
            src="/lendphotoroom-1-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.teamDescription}>
        <div className={styles.descriptionTitle}>
          <h1
            className={styles.buildAGreat}
          >{`What makes Awesome different? `}</h1>
        </div>
        <div className={styles.teamPerks}>
          <div className={styles.perkIcon}>
            <img
              className={styles.iconsPhotoroom2}
              loading="lazy"
              alt=""
              src="/iconsphotoroom-2@2x.png"
            />
          </div>
          <div className={styles.perksList}>
            <div className={styles.perkItem}>
              <div className={styles.perkDetails}>
                <h3 className={styles.competitiveSalaryEquity}>
                  {" "}
                  Fill out Form
                </h3>
                <div className={styles.perkDescription}>
                  <div className={styles.doConsecteturProident}>
                    Complete the application form with your crypto details.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.competitiveSalaryEquityParent}>
                <h3 className={styles.competitiveSalaryEquity}>
                  Immediate Response
                </h3>
                <div className={styles.perkDescription}>
                  <div
                    className={styles.doConsecteturProident1}
                  >{`Receive your loan amount directly to yourur account.  `}</div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameGroup}>
                  <div className={styles.competitiveSalaryEquityWrapper}>
                    <b
                      className={styles.competitiveSalaryEquity2}
                    >{`100% Online `}</b>
                  </div>
                  <div className={styles.doConsecteturProident2}>
                    The approved amount will be transferred to your savings
                    account.
                  </div>
                  <div className={styles.createButtonContainer}>
                    <button className={styles.button11} onClick={onButtonClick}>
                      <div className={styles.create}>Get it Now</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container1;
