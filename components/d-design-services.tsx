import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./d-design-services.module.css";

export type DDesignServicesType = {
  className?: string;
};

const DDesignServices: NextPage<DDesignServicesType> = ({ className = "" }) => {
  const router = useRouter();

  const onContainerClick = useCallback(() => {
    router.push("/root");
  }, [router]);

  return (
    <div className={[styles.dDesignServices, className].join(" ")}>
      <section className={styles.container22}>
        <div className={styles.container22Child} />
        <div className={styles.container22Item} />
        <div className={styles.container22Inner} />
        <div className={styles.frameDiv}>
          <div className={styles.frameParent}>
            <div className={styles.image37Wrapper}>
              <img
                className={styles.image37Icon}
                loading="lazy"
                alt=""
                src="/image-51.svg"
              />
            </div>
            <a className={styles.awesome}>Nomadifi</a>
          </div>
        </div>
        <b className={styles.whatIsYour}>
          {" "}
          Which country are you planning to living?*
        </b>
        <b className={styles.whatKindOf}>What type of loan are you pursuing?</b>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.of6Wrapper}>
                <div className={styles.of6}>1 of 3</div>
              </div>
              <h1 className={styles.tellUsMore}>
                Tell us more about your situation
              </h1>
            </div>
          </div>
          <div className={styles.companyDropdown}>
            <div className={styles.companyDropdownInner}>
              <div className={styles.whatKindOfCompanyDoYouWoParent}>
                <b className={styles.whatKindOf1}>
                  What type of loan are you pursuing?
                </b>
                <div className={styles.dropdownButton2}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.rectangle} />
                    <div className={styles.chooseYourField}>
                      Choose your loan
                    </div>
                    <div className={styles.chevronIcon}>
                      <img
                        className={styles.chevronDownLarge}
                        alt=""
                        src="/chevron-down-large1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.container24Wrapper}>
                <div className={styles.container24}>
                  <div className={styles.moreOptions}>
                    <div className={styles.moreOptionLabels}>
                      <div className={styles.businessDevelopment}>
                        Business Development
                      </div>
                    </div>
                    <div className={styles.productDesignOption}>
                      <div className={styles.productDesignWrapper}>
                        <b className={styles.productDesign}>Personal Loan</b>
                      </div>
                      <img
                        className={styles.checkIcon}
                        loading="lazy"
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                    <div className={styles.moreOptionLabels}>
                      <div className={styles.businessDevelopment}>
                        Travel Loan
                      </div>
                    </div>
                  </div>
                  <div className={styles.optionLabels}>
                    <div className={styles.businessDevelopment}>Home Loan</div>
                  </div>
                  <div className={styles.optionLabels}>
                    <div className={styles.businessDevelopment}>
                      Credit Card Loan
                    </div>
                  </div>
                  <div className={styles.optionLabels}>
                    <div className={styles.businessDevelopment}>
                      Emergency Loan
                    </div>
                  </div>
                  <div className={styles.optionLabels}>
                    <div className={styles.businessDevelopment}>
                      Student Loan
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.textfield}>
                <input
                  className={styles.llcOwnedBy}
                  placeholder="Mexico"
                  type="text"
                />
              </div>
              <div className={styles.container44} onClick={onContainerClick}>
                <h2 className={styles.desktopApp}>Crypto Collateral</h2>
                <div className={styles.easyInstallationWith}>
                  Obtaining a loan by pledging an asset you own, such as
                  property, land, or fixed deposits.
                </div>
              </div>
              <div className={styles.youCanSelect}>{`      `}</div>
            </div>
          </div>
          <div className={styles.container46}>
            <div className={styles.mobileAppWrapper}>
              <h2 className={styles.mobileApp}>Non-Collateral</h2>
            </div>
            <div className={styles.easyInstallationWith}>
              The lender approves your loan based on your profile, with no need
              to pledge any assets.
            </div>
          </div>
        </div>
        <button className={styles.button15} onClick={onContainerClick}>
          <div className={styles.continue}>Continue</div>
          <div className={styles.arrowRightWrapper}>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="/arrow-right.svg"
            />
          </div>
        </button>
      </section>
      <div className={styles.reviews}>
        <div className={styles.reviewsChild} />
        <img
          className={styles.capturaDePantalla20240921}
          loading="lazy"
          alt=""
          src="/captura-de-pantalla-20240921-a-las-011355-1@2x.png"
        />
      </div>
    </div>
  );
};

export default DDesignServices;
