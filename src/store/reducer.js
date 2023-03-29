import { RU, EN, SET_FILTER, SET_PAGE } from "./actions/action-types";

export const initState = {
  lang: localStorage.getItem("lang") || "russian",
  activePage: "matrix",
  filter: "Название"
};

const reducer = (state = initState, action) => {
  switch (action.type) {
  case EN: {
    localStorage.setItem("lang", "english");
    return {
      ...state,
      lang: "english"
    };
  }

  case RU: {
    localStorage.setItem("lang", "russian");
    return {
      ...state,
      lang: "russian"
    };
  }

  case SET_PAGE: {
    return {
      ...state,
      activePage: action.payload
    };
  }

  case SET_FILTER: {
    return {
      ...state,
      filter: action.payload
    };
  }

  default: {
    return {
      ...state
    };
  }
  }
};

export default reducer;
