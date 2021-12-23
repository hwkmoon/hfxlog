const INITIAL_STATE = {
  leftMenu: false,
  showSidebar: true
};

const reducerLayout = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_LEFTMENU":
      return {
        ...state,
        leftMenu: action.payload
      };

    case "SHOW_SIDEBAR":
      return {
        ...state,
        showSidebar: action.payload
      };

    default:
      return state;
  }
};

export default reducerLayout;
