import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onGetInTouchClick = useCallback(() => {
    router.push("/d-design-services");
  }, [router]);

  return (
    <section className={[styles.container65Wrapper, className].join(" ")}>
      <div className={styles.container65}>
        <h1 className={styles.dontSeeAContainer}>
          <p className={styles.applyForYour}>
            Apply for your first loan in minutes
          </p>
          <p className={styles.applyForYour}>
            Know from the start how much you have to pay
          </p>
        </h1>
        <div className={styles.roleButton}>
          <div className={styles.roleButtonContainer}>
            <button className={styles.button25}>
              <div className={styles.getInTouch} onClick={onGetInTouchClick}>
                Get it now
              </div>
            </button>
            <img
              className={styles.image50Icon}
              loading="lazy"
              alt=""
              src="/image-50.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
