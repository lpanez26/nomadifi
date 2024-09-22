import type { NextPage } from "next";
import { useCallback } from "react";
import Dropdown from "./dropdown";
import LabelInput from "./label-input";
import Input1 from "./input1";
import { useRouter } from "next/router";
import styles from "./root2.module.css";

export type Root2Type = {
  className?: string;
};

const Root2: NextPage<Root2Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButton22ContainerClick = useCallback(() => {
    router.push("/root");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/root4");
  }, [router]);

  return (
    <div className={[styles.root, className].join(" ")}>
      <section className={styles.onboardingQuestionUserAwa}>
        <div className={styles.container37}>
          <div className={styles.container37Child} />
          <div className={styles.container37Item} />
          <div className={styles.container37Inner} />
          <div className={styles.awarenessInfo}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image48Icon}
                loading="lazy"
                alt=""
                src="/image-51.svg"
              />
            </div>
            <a className={styles.awesome}>NomadiFi</a>
          </div>
          <div className={styles.questionBlock}>
            <div className={styles.of6Parent}>
              <div className={styles.of6}>3 of 3</div>
              <div className={styles.questionContent}>
                <h1 className={styles.howDidYou}>Register for your account</h1>
                <div className={styles.answerOptions}>
                  <div className={styles.dropdownWrapper}>
                    <div className={styles.content}>
                      <div className={styles.labelInput}>
                        <div className={styles.label}>Name</div>
                        <Dropdown
                          propAlignSelf="unset"
                          propWidth="201px"
                          propPosition="unset"
                          propTop="unset"
                          propLeft="unset"
                          placeholderIconsPlaceholder="First name"
                          propMinWidth="82px"
                          icons
                          propHeight="24px"
                          propWidth1="24px"
                          showOutlineArrowIosDown={false}
                        />
                      </div>
                      <LabelInput
                        label="Email"
                        placeholderIconsPlaceholder="Your email"
                        icons={false}
                        showOutlineArrowIosDown
                        propAlignSelf1="stretch"
                        propWidth="unset"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propMinWidth="227px"
                        propHeight="unset"
                        propWidth1="unset"
                      />
                    </div>
                  </div>
                  <Dropdown
                    propAlignSelf="unset"
                    propWidth="201px"
                    propPosition="absolute"
                    propTop="40px"
                    propLeft="209px"
                    placeholderIconsPlaceholder="Last name"
                    propMinWidth="82px"
                    icons={false}
                    propHeight="24px"
                    propWidth1="24px"
                    showOutlineArrowIosDown={false}
                  />
                </div>
              </div>
            </div>
            <div className={styles.otherOption}>
              <LabelInput
                propAlignSelf="unset"
                propFlex="1"
                label="Password"
                placeholderIconsPlaceholder="Password"
                icons={false}
                showOutlineArrowIosDown
              />
            </div>
            <div className={styles.labelInputs}>
              <div className={styles.label}>Address</div>
              <Input1
                labelPlaceholder="Address line 1"
                propFlex="unset"
                propPosition="unset"
                propTextAlign="unset"
                propDisplay="flex"
                propMinWidth="unset"
                propPadding="unset"
                propHeight="24px"
                propFlexDirection="row"
              />
              <div className={styles.input}>
                <img
                  className={styles.outlineSearch}
                  alt=""
                  src="/-outline--search@2x.png"
                />
                <input
                  className={styles.label2}
                  placeholder="Zip"
                  type="text"
                />
                <img
                  className={styles.outlineSearch}
                  alt=""
                  src="/-outline--menu@2x.png"
                />
                <img
                  className={styles.outlineClose}
                  alt=""
                  src="/-outline--close.svg"
                />
              </div>
              <Input1 labelPlaceholder="City" />
            </div>
            <div className={styles.locationInput}>
              <div className={styles.locationLabel}>
                <div className={styles.label3}>Phone</div>
              </div>
              <div className={styles.locationDropdown}>
                <div className={styles.dropdownContainer}>
                  <div className={styles.input1}>
                    <div className={styles.dropdown}>
                      <div className={styles.irelandIe} />
                      <div className={styles.us}>{`+1 `}</div>
                      <div className={styles.imageWrapper}>
                        <img
                          className={styles.chevronDownIcon}
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.space}>
                      <div className={styles.separator}>+1 (555) 000-0000</div>
                    </div>
                    <img
                      className={styles.helpIcon}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <div
                    className={styles.button22}
                    onClick={onButton22ContainerClick}
                  >
                    <div className={styles.backIcon}>
                      <img
                        className={styles.chevronDownIcon}
                        alt=""
                        src="/arrow-left.svg"
                      />
                    </div>
                    <div className={styles.back}>Back</div>
                  </div>
                </div>
                <button className={styles.button20} onClick={onButtonClick}>
                  <div className={styles.continue}>Launch wallet</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.screenshotArea}>
          <div className={styles.screenshotAreaChild} />
          <img
            className={styles.capturaDePantalla20240921}
            loading="lazy"
            alt=""
            src="/captura-de-pantalla-20240921-a-las-012730-1@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Root2;
