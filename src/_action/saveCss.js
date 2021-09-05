import { SAVECSS } from "./type";

export const saveCSS = (css) => {
  return {
    type: SAVECSS,
    payload: { css },
  };
};
