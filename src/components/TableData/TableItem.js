import ItemModal from "./ItemModal";
import { stringCutter, createMarkup } from "../../services/services";
import { useClickAndDoubleClickHandler } from "../../hooks/clickHandler";
import React, { useState } from "react";
import PropTypes from "prop-types";

const TableItem = ({ item }) => {
  const [modalMode, setModalMode] = useState("");
  const title = createMarkup(stringCutter(item.title, 20));
  const description = createMarkup( `${ stringCutter(item.description, 250) }`);

  const clickHandler = () => {
    setModalMode("editable");
  };
  const doubleClickHandler = () => {
    setModalMode("disabled");
  };

  return (
    <>
      <div
        className="table__item"
        key={ item.id }
        onClick={ useClickAndDoubleClickHandler(clickHandler, doubleClickHandler) }
      >
        <span
          className="table__item-title"
          dangerouslySetInnerHTML={ title }
        ></span>
        <div
          className="table__item-description"
          dangerouslySetInnerHTML={ description }
        ></div>
        { modalMode &&
          <ItemModal
            id={ item.id }
            description={ description.__html }
            title={ title.__html }
            setModalMode={ setModalMode }
            modalMode={ modalMode }
          />
        }
      </div>
    </>
  );
};

export default TableItem;

TableItem.propTypes = {
  item: PropTypes.object
};
