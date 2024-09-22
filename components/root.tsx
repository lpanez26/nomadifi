import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./root.module.css";

export type RootType = {
  className?: string;
};

const Root: NextPage<RootType> = ({ className = "" }) => {
  const router = useRouter();

  const onButton19ContainerClick = useCallback(() => {
    router.push("/d-design-services");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/root2");
  }, [router]);

  return (
    <div className={[styles.root, className].join(" ")}>
      <section className={styles.container43}>
        <div className={styles.container43Inner}>
          <div className={styles.frameParent}>
            <div className={styles.image51Wrapper}>
              <img
                className={styles.image51Icon}
                loading="lazy"
                alt=""
                src="/image-51.svg"
              />
            </div>
            <a className={styles.awesome}>Nomadifi</a>
          </div>
        </div>
        <div className={styles.container43Child}>
          <div className={styles.of6Parent}>
            <div className={styles.of6}>2 of 3</div>
            <h1 className={styles.youreIn}>Collateral Loan Type</h1>
          </div>
        </div>
        <div className={styles.companyTypeQuestion}>
          <div className={styles.companyTypeOptions}>
            <div className={styles.frameGroup}>
              <div className={styles.whatKindOfCompanyDoYouWoParent}>
                <b className={styles.whatKindOf}>Do you have a co-signer ?</b>
                <div className={styles.frameWrapper}>
                  <div className={styles.radioCheckedParent}>
                    <div className={styles.radioChecked}>
                      <input className={styles.radioBtnChecked1} type="radio" />
                      <div className={styles.syncYourActivitiesAndCalenWrapper}>
                        <div className={styles.syncYourActivities}>
                          Yes, I have a co-signer
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameContainer}>
                      <div className={styles.radioBtn1Parent}>
                        <input
                          className={styles.radioBtnChecked1}
                          type="radio"
                        />
                        <div className={styles.syncYourActivitiesContainer}>
                          <p className={styles.noIDont}>
                            No, I don't have a co-signer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.whatKindOfCompanyDoYouWoWrapper}>
                <b className={styles.whatKindOf1}>
                  Do you know someone in the USA ?
                </b>
              </div>
            </div>
            <div className={styles.yesNoOptionsWrapper}>
              <div className={styles.yesNoOptions}>
                <div className={styles.radioChecked}>
                  <div className={styles.ellipse} />
                  <div className={styles.yes}>Yes</div>
                </div>
                <div className={styles.noOption}>
                  <input className={styles.radioBtnChecked1} type="radio" />
                  <div className={styles.image51Wrapper}>
                    <div className={styles.syncYourActivities}>No</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container43Item} />
        <div className={styles.rectangleDiv} />
        <div className={styles.container43Child1} />
        <div className={styles.buttons}>
          <div className={styles.button19} onClick={onButton19ContainerClick}>
            <div className={styles.arrowLeftWrapper}>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrow-left.svg"
              />
            </div>
            <div className={styles.syncYourActivities}>Back</div>
          </div>
          <button className={styles.button17} onClick={onButtonClick}>
            <div className={styles.continue}>Continue</div>
            <div className={styles.arrowLeftWrapper}>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrow-right.svg"
              />
            </div>
          </button>
        </div>
      </section>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.capturaDePantalla20240921}
          loading="lazy"
          alt=""
          src="/captura-de-pantalla-20240921-a-las-012302-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Root;
