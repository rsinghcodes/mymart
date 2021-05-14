import { createSelector } from "reselect";

const selectTheme = (state) => state.theme;

export const selectThemeMode = createSelector(
  [selectTheme],
  (theme) => theme.theme
);
