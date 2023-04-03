import { icons } from "./index";
import React from "react";
import { useSelector } from "react-redux";

const WorkTools = () => {
  const activeMenuItem = useSelector(state => state.activeMenuItem);

  return (
    <div className="tools">
      <div className="tools__wrapper">
        {
          icons.map((item, index) =>
            <div className="tools__wrapper-item" key={ index }>
              <img src={ item } alt={ item } />
            </div>
          )
        }
      </div>
      <div className="table-header">
        { activeMenuItem &&
          <>
            <span>Название</span>
            <span>Описание</span>
          </>
        }
      </div>
    </div>
  );
};

export default  WorkTools;
