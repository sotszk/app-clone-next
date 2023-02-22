import React from "react";
import Link from "next/link";

import * as styles from "./Card.css";

const Card = (props: {
  id: number;
  title: string;
  description: string;
  url: string;
  additional?: string | React.ReactNode;
}) => {
  return (
    <div className={styles.card}>
      <Link className={styles.cardLink} href={props.url}>
        <header className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{props.title}</h3>
          <div className={styles.cardId}>#{props.id}</div>
        </header>
        <div className={styles.cardBody}>
          <p>{props.description}</p>
          {props.additional && <div>{props.additional}</div>}
        </div>
      </Link>
    </div>
  );
};

export default Card;
