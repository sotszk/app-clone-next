import { useState } from "react";
import TabButton from "./TabButton";
import ProfileTab from "./ProfileTab";
import WorksTab from "./WorksTab";
import ContactTab from "./ContactTab";

import type { Tab } from "./types";

const TabContainer = () => {
  const [tab, setTab] = useState<Tab>("profile");
  return (
    <>
      <div>
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

      <div>
        {tab === "profile" && <ProfileTab />}
        {tab === "works" && <WorksTab />}
        {tab === "contact" && <ContactTab />}
      </div>
    </>
  );
};

export default TabContainer;
