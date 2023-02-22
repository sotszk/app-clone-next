import { style } from "@vanilla-extract/css";

export const card = style({
  border: "3px solid var(--default-color)",
});

export const cardLink = style({
  display: "block",
  textDecoration: "none",
  minHeight: 200,
  padding: 16,
  transition: "all .2s ease",
  ":hover": {
    opacity: 0.7,
  },
});

export const cardHeader = style({
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "1fr 2rem",
});

export const cardTitle = style({
  fontFamily: "impact, sans-serif",
  fontSize: 24,
});

export const cardId = style({
  fontFamily: "impact, sans-serif",
  fontSize: 24,
});

export const cardBody = style({
  marginTop: 16,
});
