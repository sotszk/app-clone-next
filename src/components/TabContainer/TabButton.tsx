import { ReactNode, useTransition } from "react";

import styles from "./TabButton.module.css";

const TabButton = ({
  children,
  isActive,
  onClick,
}: {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  const [isPending, startTransition] = useTransition();

  if (isActive) {
    return <b className={styles["tab-button-active"]}>{children}</b>;
  }

  if (isPending) {
    return <b className={styles.pending}>{children}</b>;
  }

  const handleClick = () => {
    startTransition(() => {
      onClick();
    });
  };

  return (
    <button className={styles["tab-button"]} onClick={handleClick}>
      {children}
    </button>
  );
};

export default TabButton;
