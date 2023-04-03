import { RU, EN, SET_FILTER, SET_PAGE, SET_MENU_ITEM, SET_DATA, CHANGE_DATA } from "./actions/action-types";
import { tableData } from "../components/TableData/data";

export const initState = {
  lang: localStorage.getItem("lang") || "russian",
  activePage: "matrix",
  filter: "Название",
  activeMenuItem: "",
  data: JSON.parse(localStorage.getItem("skird_data")) || tableData,
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

  case SET_MENU_ITEM: {
    return {
      ...state,
      activeMenuItem: action.payload
    };
  }

  case SET_FILTER: {
    return {
      ...state,
      filter: action.payload
    };
  }
  //заглушка, пока нет бэка и БД
  case SET_DATA: {
    return {
      ...state,
      data: action.payload
    };
  }
  //тоже
  case CHANGE_DATA: {
    const data = state.data;
    const newItem = action.payload;
    const positions = state.data[0].positions;
    const oldItemIndex = positions.findIndex(item => item.id === newItem.id);
    positions.splice(oldItemIndex, 1, newItem);
    const newData = [
      {
        ...data,
        positions: positions
      }
    ];

    localStorage.setItem("skird_data", JSON.stringify(newData));

    return {
      ...state,
      data: newData
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
