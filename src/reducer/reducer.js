const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SCREEN_SIZE":
      return {
        ...state,
        screenSize: [...action.size],
      };
    case "SET_INTRO_USERNAME":
      return {
        ...state,
        intro: { ...state.intro, username: action.username },
      };
    case "SET_INTRO_EMAIL":
      return {
        ...state,
        intro: { ...state.intro, email: action.email },
      };
    case "SET_INTRO_PASSWORD":
      return {
        ...state,
        intro: { ...state.intro, password: action.password },
      };
    case "RESET_INTRO":
      return {
        ...state,
        intro: {},
      };
    default:
      return state;
  }
};

export default reducer;
