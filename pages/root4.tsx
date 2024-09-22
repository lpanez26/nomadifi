import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./root4.module.css";

const Root4: NextPage = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.root}>
      <div className={styles.dashboard}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-33.svg"
          />
          <div className={styles.flightTickets}>Flight Tickets</div>
          <div className={styles.date}>Date</div>
          <div className={styles.august}>5 August</div>
          <div className={styles.time}>Time</div>
          <div className={styles.dateAmountInfo}>01:00</div>
          <div className={styles.dateAmountInfo1}>+$456.68</div>
          <div className={styles.amount}>Amount</div>
          <main className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <section className={styles.vectorWrapper}>
              <img className={styles.frameInner} alt="" src="/ellipse-1.svg" />
            </section>
            <header className={styles.getCreditParentParent}>
              <div className={styles.getCreditParent}>
                <div className={styles.getCreditContainer}>
                  <div className={styles.getCreditInner}>
                    <div className={styles.getCreditWrapper}>
                      <div className={styles.getCreditBlock}>
                        <div className={styles.getCreditContent}>
                          <a className={styles.dashboard1}>Dashboard</a>
                          <img
                            className={styles.capturaDePantalla20240915}
                            alt=""
                            src="/captura-de-pantalla-20240915-a-las-1934photoroom-1@2x.png"
                          />
                        </div>
                        <div className={styles.creditShapeWrapper}>
                          <img
                            className={styles.creditShapeIcon}
                            alt=""
                            src="/credit-shape.svg"
                          />
                        </div>
                      </div>
                      <a className={styles.getCredit}>Get credit</a>
                    </div>
                    <div className={styles.payLoan}>
                      <a className={styles.payLoan1}>Pay Loan</a>
                      <a className={styles.more}>More...</a>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.connectWalletShapeParent}
                  onClick={onGroupContainerClick}
                >
                  <div className={styles.connectWalletShape} />
                  <a className={styles.connectWallet}>Connect Wallet</a>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.lineParent}>
                  <div className={styles.lineDiv} />
                  <div className={styles.frameChild1} />
                </div>
              </div>
            </header>
            <section className={styles.walletMessage}>
              <div className={styles.walletMessageChild} />
              <div className={styles.walletContainer}>
                <div className={styles.pleaseConnectYourWalletWrapper}>
                  <h3 className={styles.pleaseConnectYourContainer}>
                    <p className={styles.pleaseConnectYour}>
                      Please, connect your wallet
                    </p>
                    <p className={styles.pleaseConnectYour}>&nbsp;</p>
                  </h3>
                </div>
                <div className={styles.pleaseConnectYourContainer1}>
                  <p className={styles.pleaseConnectYour}>&nbsp;</p>
                  <p className={styles.pleaseConnectYour}>
                    Please connect your wallet to see your supplies, borrowings,
                    and open positions.
                  </p>
                </div>
              </div>
              <div className={styles.button20Wrapper}>
                <button
                  className={styles.button20}
                  onClick={onGroupContainerClick}
                >
                  <div className={styles.continue}>Connect Wallet</div>
                </button>
              </div>
            </section>
          </main>
        </div>
        <div className={styles.transactions}>Transactions</div>
        <div className={styles.dashboardChild} />
        <div className={styles.frameGroup}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <div className={styles.amazon}>Amazon</div>
            <div className={styles.hourAgo}>2 hour ago</div>
            <div className={styles.div}>+$636.65</div>
            <img className={styles.groupIcon} alt="" src="/group-34.svg" />
          </div>
          <div className={styles.myntraParent}>
            <div className={styles.myntra}>Myntra</div>
            <div className={styles.hourAgo1}>6 hour ago</div>
            <div className={styles.div1}>-$136.65</div>
            <img className={styles.frameChild2} alt="" src="/group-34-1.svg" />
            <img className={styles.frameChild3} alt="" src="/group-42.svg" />
          </div>
          <div className={styles.flipkartParent}>
            <div className={styles.flipkart}>Flipkart</div>
            <div className={styles.hourAgo2}>4 hour ago</div>
            <div className={styles.div2}>-$236.65</div>
            <img className={styles.frameChild4} alt="" src="/group-34-2.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector-11.svg" />
          </div>
        </div>
        <div className={styles.cards}>Cards</div>
        <div className={styles.dashboardItem} />
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.monthParent}>
            <div className={styles.month}>Month</div>
            <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
          </div>
        </div>
        <div className={styles.expense}>Expense</div>
        <div className={styles.dashboardInner} />
        <div className={styles.frameDiv}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild5} />
            <div className={styles.invoice}>Invoice</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root4;
