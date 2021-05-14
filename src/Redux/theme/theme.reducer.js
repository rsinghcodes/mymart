const INITIAL_STATE = {
  theme: "dark",
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    default:
      return state;
  }
};

export default themeReducer;
