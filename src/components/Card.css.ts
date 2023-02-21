import { style } from "@vanilla-extract/css";

const styles = {
  card: style({
    border: "3px solid var(--default-color)",
  }),
  cardLink: style({
    display: "block",
    textDecoration: "none",
    minHeight: 200,
    padding: 16,
    transition: "all .2s ease",
    ":hover": {
      opacity: 0.7,
    },
  }),
  cardHeader: style({
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "1fr 2rem",
  }),
  cardTitle: style({
    fontFamily: "impact, sans-serif",
    fontSize: 24,
  }),
  cardId: style({
    fontFamily: "impact, sans-serif",
    fontSize: 24,
  }),
  cardBody: style({
    marginTop: 16,
  }),
};

export default styles;
