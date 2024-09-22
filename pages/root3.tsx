import type { NextPage } from "next";
import LeftPane from "../components/left-pane";
import ContentPane from "../components/content-pane";
import Container1 from "../components/container1";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import Footer from "../components/footer";
import styles from "./root3.module.css";

const Root3: NextPage = () => {
  return (
    <div className={styles.root}>
      <main className={styles.homepage4}>
        <div className={styles.tag1} />
        <div className={styles.tag2} />
        <div className={styles.tag3} />
        <LeftPane />
        <ContentPane />
        <Container1 />
        <FrameComponent />
        <FrameComponent1 />
        <FrameComponent2 />
        <Footer />
      </main>
    </div>
  );
};

export default Root3;
