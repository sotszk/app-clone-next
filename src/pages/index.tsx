import Layout from "@/layouts/LayoutDefault";
import SearchLang from "@/components/SearchLang";
import YourProfile from "@/components/YourProfile";

import styles from "./index.module.css";

const Index = () => {
  return (
    <Layout>
      <section className={styles["page-container"]}>
        <h1 className={styles["page-copy"]}>Hello, world!</h1>
        <div>
          <YourProfile />
        </div>
        <div>
          <SearchLang />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
