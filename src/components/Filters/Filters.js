import { useOnClickOutside } from "../../hooks/clickOutside";
import { SET_FILTER } from "../../store/actions/action-types";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

const Filters = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const filtersWrapperRef = useRef(null);
  const filterInputRef = useRef(null);
  const filterItems = ["Вес", "Жир", "Рост", "Дурак)"];
  const dispatch = useDispatch();
  useOnClickOutside(filtersWrapperRef, () => setIsMenuVisible(false));

  const clickHandler = filterValue => {
    dispatch({ type: SET_FILTER, payload: filterValue.toLowerCase() });
    setIsMenuVisible(false);
  };

  const enterHandler = e => {
    if (e.code === "Enter") {
      dispatch({ type: SET_FILTER, payload: e.target.value.toLowerCase() });
    }
  };

  const clearHandler = () => {
    filterInputRef.current.value = "";
    dispatch({ type: SET_FILTER, payload: "Название" });
  };

  return (
    <div className="filters" ref={ filtersWrapperRef }>
      <button onClick={ () => setIsMenuVisible(!isMenuVisible) }>Все фильтры</button>
      <input
        ref={ filterInputRef }
        type="text"
        placeholder="Название..."
        onBlur={ e => dispatch({ type: SET_FILTER, payload: e.target.value.toLowerCase() }) }
        onKeyDown={ e => enterHandler(e) }
      />
      { isMenuVisible &&
        <div className="filters__menu">
          {
            filterItems.map(item =>
              <div
                key={ item }
                className="filters__menu-item"
                onClick={ () => clickHandler(item) }
              >
                { item }
              </div>
            )
          }
        </div>
      }
      <span className="clear" onClick={ () => clearHandler() }></span>
    </div>
  );
};

export default  Filters;
