import { asideData } from "./data";
import { SET_MENU_ITEM } from "../../store/actions/action-types";
import React from "react";
import { useDispatch } from "react-redux";

const Aside = () => {
  const dispatch = useDispatch();

  return (
    <aside>
      {
        asideData.map(({ id, title }) =>
          <nav
            key={ id }
            onClick={ () => dispatch({ type: SET_MENU_ITEM, payload: title }) }
          >
            { title }
          </nav>
        )
      }
    </aside>
  );
};

export default Aside;
