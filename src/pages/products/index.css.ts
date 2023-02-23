import { style, fallbackVar } from "@vanilla-extract/css";
import { defaultColorVar } from "@/style/vanilla-base.css";

export const content = style({
  padding: 16,
  marginTop: 16,
  // vanilla-extract の createVar() で生成したCSS変数がなぜか認識されない
  // @see https://vanilla-extract.style/documentation/api/create-var/
  border: `3px solid ${fallbackVar(defaultColorVar, "var(--default-color)")}`,
});

export const cards = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 16,
  listStyle: "none",
  paddingLeft: 0,
  margin: 0,
});

export const onlineStatus = style({
  marginTop: 16,
});

export const errorMessage = style({
  color: "var(--error-color)",
});
