import { style } from "@vanilla-extract/css";

export const myStyle = style({
  "@media": {
    "(hover: hover)": {
      /**
       * Error on line 12:
       *
       * Type '{ ":not(:disabled):hover": { backgroundColor: string; outline: string; transform: string; }; }' is not assignable to type 'Omit<StyleWithSelectors & AllQueries<StyleWithSelectors>, "@media">'.
       * Object literal may only specify known properties, and '":not(:disabled):hover"' does not exist in type 'Omit<StyleWithSelectors & AllQueries<StyleWithSelectors>, "@media">'.ts(2322)
       */
      ":not(:disabled):hover": {
        backgroundColor: "var(--input-hover-color)",
        outline: "6px solid var(--input-hover-color)",
        transform: "scale(1.05)",
      },
    },
  },
});
