import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Textfield from "../components/textfield";
import styles from "./index.module.css";

const Root5: NextPage = () => {
  const router = useRouter();

  const onPayLoanTextClick = useCallback(() => {
    router.push("/root6");
  }, [router]);

  return (
    <div className={styles.root}>
      <div className={styles.dashboard}>
        <div className={styles.flightTickets}>Flight Tickets</div>
        <div className={styles.date}>Date</div>
        <div className={styles.august}>5 August</div>
        <div className={styles.time}>Time</div>
        <div className={styles.tableHeader}>01:00</div>
        <div className={styles.tableHeader1}>+$456.68</div>
        <div className={styles.amount}>Amount</div>
        <div className={styles.paymentDetailsWrapper}>
          <div className={styles.paymentDetails}>
            <img
              className={styles.paymentDetailsChild}
              loading="lazy"
              alt=""
              src="/group-33.svg"
            />
            <main className={styles.buttons}>
              <div className={styles.buttonsChild} />
              <section className={styles.buttonsInner}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/ellipse-1.svg"
                />
              </section>
              <header className={styles.topRightWrapper}>
                <div className={styles.topRight}>
                  <div className={styles.layer}>
                    <div className={styles.layer1}>
                      <div className={styles.layer2}>
                        <div className={styles.dashboardParent}>
                          <a className={styles.dashboard1}>Dashboard</a>
                          <img
                            className={styles.capturaDePantalla20240915}
                            loading="lazy"
                            alt=""
                            src="/captura-de-pantalla-20240915-a-las-1934photoroom-1@2x.png"
                          />
                        </div>
                        <div className={styles.getCreditParent}>
                          <a className={styles.getCredit}>Get credit</a>
                          <div className={styles.vectorWrapper}>
                            <img
                              className={styles.frameItem}
                              loading="lazy"
                              alt=""
                              src="/vector-1.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.loanButton}>
                          <a
                            className={styles.payLoan}
                            onClick={onPayLoanTextClick}
                          >
                            Pay Loan
                          </a>
                          <a className={styles.more}>More...</a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.bottomRight}>
                      <div className={styles.bottomRightChild} />
                      <div className={styles.connectWalletParent}>
                        <a className={styles.connectWallet}>Connect Wallet</a>
                        <img
                          className={styles.capturaDePantalla20240918}
                          alt=""
                          src="/captura-de-pantalla-20240918-a-las-035143-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.topRightInner}>
                    <div className={styles.frameInner} />
                  </div>
                </div>
              </header>
              <section className={styles.lineParent}>
                <div className={styles.lineDiv} />
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <h2 className={styles.getCredit1}>
                    <p className={styles.blankLine}>Get Credit</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                  </h2>
                </div>
              </section>
              <button className={styles.button20}>
                <div className={styles.continue}>Accept</div>
              </button>
              <div className={styles.textfield}>
                <input
                  className={styles.mxn}
                  placeholder="$300 (2547 XLM)"
                  type="text"
                />
              </div>
              <Textfield
                prestaFICredit="Nomaad Credit"
                caretDown="/caret-down.svg"
              />
              <Textfield
                propTop="325px"
                propBorder="1px solid #f0f0f0"
                prestaFICredit="Mother-GBH4...GIYI"
                caretDown="/caret-down-1.svg"
              />
              <div className={styles.textbox4}>
                <div className={styles.empty}>$300</div>
              </div>
              <div className={styles.button3}>
                <div className={styles.label}>$300</div>
              </div>
              <div className={styles.button4}>
                <div className={styles.label}>$600 (5,919 XLM)</div>
              </div>
            </main>
            <b className={styles.theyReceive}>They Receive</b>
            <b className={styles.yourPaymentMethod}>Your Payment Method</b>
            <b className={styles.toThisRecipient}>To This Recipient</b>
            <div className={styles.creditConditionsContainer}>
              <p className={styles.blankLine}>{`Credit Conditions & Terms:`}</p>
              <p className={styles.blankLine}>
                4 monthly installments ($75). 1% interest per month ($3). For a
                total of
              </p>
            </div>
            <div className={styles.noAdditionalFees}>
              $312. No additional fees.
            </div>
            <div className={styles.maximumCreditAvailable}>
              Maximum Credit Available
            </div>
            <div className={styles.collateralProvided}>Collateral Provided</div>
            <div className={styles.youSend}>You Recieve</div>
          </div>
        </div>
        <div className={styles.transactions}>Transactions</div>
        <div className={styles.dashboardChild} />
        <div className={styles.frameParent}>
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
            <img className={styles.frameChild1} alt="" src="/group-34-1.svg" />
            <img className={styles.frameChild2} alt="" src="/group-42.svg" />
          </div>
          <div className={styles.flipkartParent}>
            <div className={styles.flipkart}>Flipkart</div>
            <div className={styles.hourAgo2}>4 hour ago</div>
            <div className={styles.div2}>-$236.65</div>
            <img className={styles.frameChild3} alt="" src="/group-34-2.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector-11.svg" />
          </div>
        </div>
        <div className={styles.cards}>Cards</div>
        <div className={styles.dashboardItem} />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild4} />
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

export default Root5;
