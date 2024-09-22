import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./left-pane.module.css";

export type LeftPaneType = {
  className?: string;
};

const LeftPane: NextPage<LeftPaneType> = ({ className = "" }) => {
  const router = useRouter();

  const onLoginTextClick = useCallback(() => {
    router.push("/root4");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/d-design-services");
  }, [router]);

  return (
    <section className={[styles.leftPane, className].join(" ")}>
      <header className={styles.container13}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerLeft}>
            <img
              className={styles.capturaDePantalla20240915}
              loading="lazy"
              alt=""
              src="/captura-de-pantalla-20240915-a-las-1934photoroom-11@2x.png"
            />
            <div className={styles.bannerRight}>
              <div className={styles.bannerLogin}>
                <div className={styles.loginContainer}>
                  <a className={styles.login} onClick={onLoginTextClick}>
                    Launch app
                  </a>
                </div>
                <button className={styles.button23} onClick={onButtonClick}>
                  <a className={styles.tryForFree}>Try for free</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button24} />
        <img
          className={styles.container13Child}
          loading="lazy"
          alt=""
          src="/line-4.svg"
        />
      </header>
    </section>
  );
};

export default LeftPane;
