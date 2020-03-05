import { SET_THEME } from "../actions/types";

const savedTheme = () => {
  if (localStorage.theme === 'dark') {
    return 'dark'
  }
  if (localStorage.theme === 'light') {
    return 'light'
  }
  return null
};
const initialState = {
  theme: savedTheme()
};
export default (state = initialState, action = []) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.theme
      };
    default:
      return state;
  }
};
