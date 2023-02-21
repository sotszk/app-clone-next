import Layout from "@/layouts/LayoutDefault";
import TabContainer from "@/components/TabContainer/TabContainer";

import styles from "./about.module.css";

const About = () => {
  return (
    <Layout>
      <h1>About</h1>

      <div className={styles.content}>
        <TabContainer />
      </div>
    </Layout>
  );
};

export default About;
