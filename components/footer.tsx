import type { NextPage } from "next";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.container62}>
        <div className={styles.newsletterContainerWrapper}>
          <div className={styles.newsletterContainer}>
            <div className={styles.newsletterTitle}>
              <div className={styles.subscribeToOur}>
                Subscribe to for more information
              </div>
            </div>
            <div className={styles.emailInput}>
              <div className={styles.textbox6}>
                <div className={styles.emailIconContainer}>
                  <img className={styles.mailIcon} alt="" src="/mail.svg" />
                </div>
                <input
                  className={styles.inputYourEmail}
                  placeholder="Input your email"
                  type="text"
                />
              </div>
              <button className={styles.button22}>
                <div className={styles.subscribe}>Subscribe</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.logoTwitter2} />
        <div className={styles.footerDetails}>
          <img
            className={styles.footerDetailsChild}
            loading="lazy"
            alt=""
            src="/line-13.svg"
          />
          <div className={styles.languageSelect}>
            <div className={styles.textbox5}>
              <a className={styles.english}>English</a>
              <div className={styles.emailIconContainer}>
                <img
                  className={styles.chevronDownLarge}
                  alt=""
                  src="/chevron-down-large.svg"
                />
              </div>
            </div>
            <div className={styles.copyright}>
              <div className={styles.brandInc}>{`© 2024 Livi Lab `}</div>
            </div>
            <div className={styles.socialLinks}>
              <div className={styles.socialIcons}>
                <img
                  className={styles.logoFacebook2}
                  loading="lazy"
                  alt=""
                  src="/logo-facebook-2.svg"
                />
                <img
                  className={styles.logoFacebook2}
                  loading="lazy"
                  alt=""
                  src="/logo-linkedin-2.svg"
                />
                <img
                  className={styles.logoFacebook2}
                  loading="lazy"
                  alt=""
                  src="/logo-youtube-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
