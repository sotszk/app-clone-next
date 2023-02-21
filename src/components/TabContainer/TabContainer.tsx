import { useState, Suspense } from "react";
import TabButton from "./TabButton";
import ProfileTab from "./ProfileTab";
import WorksTab from "./WorksTab";
import ContactTab from "./ContactTab";

import type { Tab } from "./types";

import styles from "./TabContainer.module.css";

const TabContainer = () => {
  const [tab, setTab] = useState<Tab>("profile");
  return (
    <Suspense fallback={<div>NOW LOADING...</div>}>
      <div className={styles["button-group"]}>
        <TabButton
          isActive={tab === "profile"}
          onClick={() => setTab("profile")}
        >
          Profile
        </TabButton>
        <TabButton isActive={tab === "works"} onClick={() => setTab("works")}>
          Works
        </TabButton>
        <TabButton
          isActive={tab === "contact"}
          onClick={() => setTab("contact")}
        >
          Contact
        </TabButton>
      </div>

      <div className={styles.tabpanels}>
        {tab === "profile" && <ProfileTab />}
        {tab === "works" && <WorksTab />}
        {tab === "contact" && <ContactTab />}
      </div>
    </Suspense>
  );
};

export default TabContainer;
