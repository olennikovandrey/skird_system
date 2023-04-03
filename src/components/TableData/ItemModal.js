import { useOnClickOutside } from "../../hooks/clickOutside";
import { objectStateChanger } from "../../services/services";
import { CHANGE_DATA } from "../../store/actions/action-types";
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const ItemModal = ({ id, title, description, setModalMode, modalMode }) => {
  const [isDisabled, setIsDisabled] = useState(modalMode === "disabled");
  const [newItem, setNewItem] = useState({
    id,
    title,
    description
  });
  const tableModalRef = useRef(null);
  useOnClickOutside(tableModalRef, () => setModalMode(""));
  const dispatch = useDispatch();

  const saveHandler = () => {
    setModalMode("");
    dispatch({ type: CHANGE_DATA, payload: newItem });
  };

  return (
    <div className="table-modal-wrapper">
      <div className="table-modal" ref={ tableModalRef }>
        <label>Название:
          <input
            value={ newItem.title }
            name="title"
            disabled={ isDisabled }
            onChange={ e => objectStateChanger(e, newItem, setNewItem) }
          />
        </label>
        <label>Описание:
          <textarea
            value={ newItem.description }
            name="description"
            disabled={ isDisabled }
            onChange={ e => objectStateChanger(e, newItem, setNewItem) }
          />
        </label>
        <div className="table-modal__buttons-wrapper">
          <button onClick={ () => setIsDisabled(!isDisabled)}>
            { isDisabled ? "Изменить" : "Просмотреть"}
          </button>
          { !isDisabled && <button onClick={ () => saveHandler() }>Сохранить</button> }
        </div>
      </div>
      <span className="close" onClick={ () => setModalMode("") }></span>
    </div>
  );
};

export default ItemModal;

ItemModal.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  modalMode: PropTypes.string,
  setModalMode: PropTypes.func
};
