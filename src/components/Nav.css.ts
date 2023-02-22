import { style } from "@vanilla-extract/css";

export const nav = style({
  padding: "16px 0",
});

export const navList = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
  listStyle: "none",
  paddingLeft: "none",
  margin: 0,
});

export const navLink = style({
  display: "block",
  padding: "4px 16px",
  textDecoration: "none",
  transition: "filter .2s ease-in",
  ":hover": {
    filter: "brightness(1.4)",
  },
});
