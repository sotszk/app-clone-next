import { createVar, style } from "@vanilla-extract/css";

export const defaultColorVar = createVar();

export const defaultColor = style({
  vars: {
    [defaultColorVar]: "#000",
  },
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: {
        [defaultColorVar]: "#ddd",
      },
    },
  },
});
