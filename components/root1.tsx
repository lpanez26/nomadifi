import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./root1.module.css";

export type Root1Type = {
  className?: string;
};

const Root1: NextPage<Root1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButton19ContainerClick = useCallback(() => {
    router.push("/root3");
  }, [router]);

  return (
    <div className={[styles.root, className].join(" ")}>
      <div className={styles.of6}>2 of 3</div>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.container43}>
          <div className={styles.container43Inner}>
            <div className={styles.frameParent}>
              <div className={styles.image51Wrapper}>
                <img
                  className={styles.image51Icon}
                  loading="lazy"
                  alt=""
                  src="/image-511.svg"
                />
              </div>
              <a className={styles.awesome}>Nomadifi</a>
            </div>
          </div>
          <div className={styles.container43Child}>
            <div className={styles.frameGroup}>
              <div className={styles.of6Wrapper}>
                <div className={styles.of61}>2 of 3</div>
              </div>
              <h1 className={styles.youreIn}>Collateral Loan Type</h1>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.whatKindOfCompanyDoYouWoWrapper}>
              <b className={styles.whatKindOf}>Do you have a co-signer ?</b>
            </div>
            <div className={styles.radioOptions}>
              <div className={styles.syncOption}>
                <div className={styles.frameParent}>
                  <input className={styles.radioBtn1} type="radio" />
                  <div className={styles.syncDescription}>
                    <div className={styles.syncYourActivities}>
                      Yes, I have a co-signer
                    </div>
                  </div>
                </div>
                <div className={styles.syncOption1}>
                  <div className={styles.syncDetails1}>
                    <div className={styles.syncDescription}>
                      <input className={styles.radioBtnChecked1} type="radio" />
                    </div>
                    <div className={styles.syncYourActivitiesContainer}>
                      <p className={styles.noIDont}>
                        No, I don't have a co-signer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.whatKindOfCompanyDoYouWoContainer}>
                <b className={styles.whatKindOf}>
                  Do you know someone in the USA ?
                </b>
              </div>
              <div className={styles.yesNoOptions}>
                <div className={styles.yesOption}>
                  <div className={styles.yesDetails}>
                    <div className={styles.ellipse} />
                    <div className={styles.yes}>Yes</div>
                  </div>
                  <div className={styles.noOption}>
                    <input className={styles.radioBtn1} type="radio" />
                    <div className={styles.image51Wrapper}>
                      <div className={styles.syncYourActivities}>No</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container4}>
                <img
                  className={styles.iconButton1}
                  loading="lazy"
                  alt=""
                  src="/icon-button-1.svg"
                />
                <div className={styles.weApologizeForTheInconveniWrapper}>
                  <div className={styles.weApologizeForContainer}>
                    <p className={styles.noIDont}>
                      We apologize for the inconvenience. Currently, our
                      services do
                    </p>
                    <p className={styles.noIDont}>
                      {" "}
                      not include collateral loans without a co-signer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container43Item} />
          <div className={styles.rectangleDiv} />
          <div className={styles.container43Child1} />
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
        </div>
      </section>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild1} />
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

export default Root1;
