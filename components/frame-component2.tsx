import type { NextPage } from "next";
import Container from "./container";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.adviceContainerWrapper, className].join(" ")}>
      <div className={styles.adviceContainer}>
        <div className={styles.adviceHeader}>
          <h1 className={styles.careerAdvicesFrom}>
            Financial advice and tips to manage your personal loan
          </h1>
          <div className={styles.adviceSubtitle}>
            <div className={styles.exercitationDoloreReprehende}>
              Trustworthy: Your Best Ally for Loans
            </div>
          </div>
        </div>
        <div className={styles.articleList}>
          <div className={styles.articleContainer}>
            <div className={styles.articleItems}>
              <Container
                image25="/image-25@2x.png"
                doConsectetur="Prestamistas"
                aliquaIrureTemporLoremOccaecat="Estrategias financieras"
                minsRead="5 mins read"
              />
              <Container
                image25="/image-26@2x.png"
                doConsectetur="Credit Score"
                aliquaIrureTemporLoremOccaecat="Nomad Bank Account"
                minsRead="15 mins read"
                propDisplay="unset"
                propMinWidth="unset"
              />
              <div className={styles.container33}>
                <img
                  className={styles.image27Icon}
                  loading="lazy"
                  alt=""
                  src="/image-27@2x.png"
                />
                <div className={styles.container33Inner}>
                  <div className={styles.frameParent}>
                    <div className={styles.doConsecteturParent}>
                      <div className={styles.doConsectetur}>Loans</div>
                      <div className={styles.euLaboreExNostrudFugiatSiParent}>
                        <h3 className={styles.euLaboreEx}>
                          Loans for travelers
                        </h3>
                        <h3 className={styles.euLaboreEx1}>
                          Loans for travelers
                        </h3>
                      </div>
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.dec222022Wrapper}>
                        <div className={styles.dec222022}>Dec 22, 2022</div>
                      </div>
                      <div className={styles.frame}>
                        <div className={styles.minsRead}>5 mins read</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.viewMoreButton}>
              <button className={styles.button12}>
                <div className={styles.seeMoreArticles}>{`Visit Blog `}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
