import * as React from "react";
import Nav from "@/components/Nav";
import TheFooter from "@/components/TheFooter";
import Head, { HeadProps } from "@/Head";

import styles from "./LayoutDefault.module.css";

interface Props extends HeadProps {
  children: React.ReactNode;
}

const LayoutDefault = ({ children, title, description }: Props) => {
  return (
    <>
      <Head {...{ title, description }} />
      <div className={styles["layout-default"]}>
        <Nav />
        <main>{children}</main>
        <TheFooter />
      </div>
    </>
  );
};

export default LayoutDefault;
