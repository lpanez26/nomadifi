import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.container54Wrapper, className].join(" ")}>
      <div className={styles.container54}>
        <div className={styles.benefitsTitle}>
          <h1 className={styles.ourBenefits}>Why choose NomadFi?</h1>
        </div>
        <div className={styles.benefitsContent}>
          <div className={styles.container55}>
            <div className={styles.benefitIcon}>
              <div className={styles.salaryBenefit}>
                <img
                  className={styles.setingPhotoroom1Icon}
                  loading="lazy"
                  alt=""
                  src="/setingphotoroom-1@2x.png"
                />
              </div>
              <h3 className={styles.competitiveSalaryEquity}>
                Simplied Process
              </h3>
            </div>
            <div className={styles.mentalBenefit}>
              <div className={styles.theirGoalIs}>
                Their goal is to simplify and clarify the process in CriptoLoans
              </div>
            </div>
          </div>
          <div className={styles.container56}>
            <div className={styles.frameParent}>
              <div className={styles.lendPhotoroom1Wrapper}>
                <img
                  className={styles.lendPhotoroom1Icon}
                  loading="lazy"
                  alt=""
                  src="/lendphotoroom-1@2x.png"
                />
              </div>
              <h3 className={styles.heathDentalAndContainer}>
                <p className={styles.noAdditionalCost}>
                  <b>No Additional Cost</b>
                </p>
                <p className={styles.noAdditionalCost}>&nbsp;</p>
              </h3>
            </div>
            <div className={styles.heathDentalAndVisionInsurWrapper}>
              <div
                className={styles.theirGoalIs}
              >{`All these services are provided at no additional cost to you. `}</div>
            </div>
          </div>
          <div className={styles.container57}>
            <div className={styles.moneyWrapper}>
              <img
                className={styles.moneyIcon}
                loading="lazy"
                alt=""
                src="/money@2x.png"
              />
            </div>
            <h3 className={styles.mentalHealth}>
              Guaranteed best rate of interest
            </h3>
            <div className={styles.secureBenefit}>
              <div className={styles.securePremierBenefitsContainer}>
                <span className={styles.span}>{` `}</span>
                <span className={styles.securePremierBenefits}>
                  Secure premier benefits with the help of in-house Prodigy
                  experts!!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondBenefitListWrapper}>
          <div className={styles.secondBenefitList}>
            <div className={styles.container59}>
              <div className={styles.remoteBenefit}>
                <img
                  className={styles.favorite1Icon}
                  loading="lazy"
                  alt=""
                  src="/favorite-1@2x.png"
                />
              </div>
              <div className={styles.learningBenefit}>
                <h3 className={styles.competitiveSalaryEquity}>
                  {" "}
                  Top Lender Partnership
                </h3>
                <div className={styles.partnerBenefit}>
                  <div className={styles.theirGoalIs}>
                    They partner with leading lenders, including Prodigy
                    Finance.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container60}>
              <div className={styles.moneyWrapper}>
                <img
                  className={styles.capturaDePantalla20240918}
                  loading="lazy"
                  alt=""
                  src="/captura-de-pantalla-20240918-a-las-0032photoroom-1@2x.png"
                />
              </div>
              <div className={styles.learningBenefit}>
                <h3 className={styles.learningDevelopment}>
                  International Support
                </h3>
                <div className={styles.supportIfYouGetStuckInTWrapper}>
                  <div className={styles.theirGoalIs}>
                    Support, if you get stuck in the process. We don't leave you
                    alone
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

export default FrameComponent;
