import { RU, EN, SET_FILTER, SET_PAGE, SET_MENU_ITEM, SET_DATA, CHANGE_DATA } from "./action-types";

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

export const setMenuItem = menuItem => {
  return {
    type: SET_MENU_ITEM,
    menuItem
  };
};

export const setData = data => {
  return {
    type: SET_DATA,
    data
  };
};

export const changeData = data => {
  return {
    type: CHANGE_DATA,
    data
  };
};
