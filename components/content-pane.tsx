import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./content-pane.module.css";

export type ContentPaneType = {
  className?: string;
};

const ContentPane: NextPage<ContentPaneType> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/d-design-services");
  }, [router]);

  return (
    <section className={[styles.contentPane, className].join(" ")}>
      <div className={styles.rightSidebar}>
        <div className={styles.sidebarTop}>
          <div className={styles.sidebarTopContent}>
            <div className={styles.container51} />
            <div className={styles.sidebarBottom}>
              <div className={styles.sidebarSettings}>
                <img
                  className={styles.preferences1Icon}
                  loading="lazy"
                  alt=""
                  src="/preferences-1.svg"
                />
                <div className={styles.settingsDivider}>
                  <img
                    className={styles.settingsDividerChild}
                    loading="lazy"
                    alt=""
                    src="/line-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.contentHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.headerActions}>
                <div className={styles.actionsContainer}>
                  <div className={styles.actionsLeft}>
                    <div className={styles.container50} />
                  </div>
                  <div className={styles.iconButton2} />
                </div>
              </div>
              <div className={styles.headerRight}>
                <div className={styles.headerTitle}>
                  <h1 className={styles.websiteHeadingGoes}>
                    Cripto Credit now to LATAM, and pay later at fair rates
                  </h1>
                  <div className={styles.subheading}>
                    <div className={styles.inMinimMollit}>
                      Financial Freedom for Digital Nomads
                    </div>
                  </div>
                </div>
                <div className={styles.headerActionsRight}>
                  <div className={styles.actionsRight}>
                    <div className={styles.tryContainer}>
                      <div className={styles.tryButtonContainer}>
                        <button
                          className={styles.button25}
                          onClick={onButtonClick}
                        >
                          <div
                            className={styles.tryForFree}
                          >{`Get it Now `}</div>
                        </button>
                      </div>
                      <img
                        className={styles.preferences1Icon}
                        loading="lazy"
                        alt=""
                        src="/stack-1.svg"
                      />
                    </div>
                    <div className={styles.profileContainerParent}>
                      <div className={styles.profileContainer}>
                        <div className={styles.iconButton1} />
                      </div>
                      <img
                        className={styles.preferences1Icon}
                        loading="lazy"
                        alt=""
                        src="/star-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contentBody}>
                <div className={styles.bodyTop}>
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.container49} />
                  </div>
                  <div className={styles.avatar3} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.featureItemParent}>
            <div className={styles.featureItem}>
              <b className={styles.keyFeature}>Low/No Credit Scores</b>
              <div className={styles.esseIrureProidentContainer}>
                <p className={styles.manyNomadsHave}>
                  Many nomads have limited or no credit history, restricting
                  their financing options.
                </p>
              </div>
            </div>
            <div className={styles.feature}>
              <img
                className={styles.settingsDividerChild}
                loading="lazy"
                alt=""
                src="/line-1.svg"
              />
              <div className={styles.featureContent}>
                <b className={styles.keyFeature}>Hidden Fees</b>
                <div className={styles.esseIrureProidentContainer}>
                  Traditional financing often comes with hidden fees and
                  unfavorable conditions.
                </div>
              </div>
            </div>
            <div className={styles.feature}>
              <img
                className={styles.settingsDividerChild}
                loading="lazy"
                alt=""
                src="/line-1.svg"
              />
              <div className={styles.featureContent}>
                <b className={styles.keyFeature}>Lack of Transparency</b>
                <div className={styles.esseIrureProidentContainer}>
                  <p className={styles.manyNomadsHave}>
                    Remittance companies charge hidden fees through poor
                    currency exchange rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPane;
