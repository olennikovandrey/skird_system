import { RU, EN, SET_PAGE } from "../../store/actions/action-types";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TopField = () => {
  const dispatch = useDispatch();
  const activePage = useSelector(state => state.activePage);
  const isMatrix = activePage === "matrix";
  const isInfo = activePage === "info";

  return (
    <div className="top-wrapper">
      <div className="top-wrapper__buttons-wrapper">
        <button
          className={ isMatrix ? "top-button top-button-active" : "top-button" }
          name="matrix"
          onClick={ e => dispatch({ type: SET_PAGE, payload: e.target.name }) }
        >Матрица
        </button>
        <button
          className={ isInfo ? "top-button top-button-active" : "top-button" }
          name="info"
          onClick={ e => dispatch({ type: SET_PAGE, payload: e.target.name }) }
        >Справочная информация
        </button>
      </div>
      <div className="user-info">
        <div className="user-info__lang">
          <span onClick={ () => dispatch({ type: RU }) }>RU</span>
          <span onClick={ () => dispatch({ type: EN }) }>EN</span>
        </div>
        <span className="user-info__account">Системная учетная запись</span>
      </div>
    </div>
  );
};

export default TopField;
