import { RU, EN, SET_FILTER, SET_PAGE } from "./action-types";

export const setEnglish = payload => {
  return {
    type: EN,
    payload
  };
};

export const setRussian = payload => {
  return {
    type: RU,
    payload
  };
};

export const setPage = pageName => {
  return {
    type: SET_PAGE,
    pageName
  };
};

export const setFilter = filterValue => {
  return {
    type: SET_FILTER,
    filterValue
  };
};
