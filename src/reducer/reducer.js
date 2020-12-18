const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: {
          ...state.user,
          username: action.username,
          address: action.address,
          balance: action.balance,
        },
      };
    case "SET_BALANCE":
      return {
        ...state,
        user: {
          ...state.user,
          balance: action.balance,
        },
      };
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
    case "SET_INTRO_EMAILVERIFY":
      return {
        ...state,
        intro: { ...state.intro, emailverify: true },
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
    case "SET_MODAL":
      return {
        ...state,
        modal: {
          title: action.title,
          content: action.content,
          callback: action.callback,
          param: action.param,
          only: action.only ? action.only : false,
        },
      };
    case "RESET_MODAL":
      return {
        ...state,
        modal: {},
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "RESET_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "RESET_RECORD":
      return {
        ...state,
        record: [],
      };
    case "INSERT_RECORD":
      return {
        ...state,
        record: [...state.record, action.record],
      };
    case "RESET_CONTACT":
      return {
        ...state,
        contact: [],
      };
    case "INSERT_CONTACT":
      return {
        ...state,
        contact: [...state.contact, action.contact],
      };
    case "SET_SEND_ADDRESS":
      return {
        ...state,
        send: { ...state.send, to: action.address },
      };
    case "SET_SEND_VALUE":
      return {
        ...state,
        send: { ...state.send, value: action.value },
      };
    case "RESET_SEND":
      return {
        ...state,
        send: {},
      };
    default:
      return state;
  }
};

export default reducer;
