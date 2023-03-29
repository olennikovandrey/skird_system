import React from "react";
import PropTypes from "prop-types";

const Input = ({ placeholder = "" }) => {
  return (
    <>
      <input className="textinput" type="text" placeholder={ placeholder }></input>
    </>
  );
};

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string,
};
