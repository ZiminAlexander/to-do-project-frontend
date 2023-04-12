import React from "react";
import PropTypes from 'prop-types';

export function EditTextButton({setIsEditEnable, isEditEnable}) {

  return(
    <button className={"edit-button small-button"}
      onClick={() => {
        setIsEditEnable(!isEditEnable);
      }}
    />
  );

}

EditTextButton.propTypes = {
  setIsEditEnable: PropTypes.func.isRequired,
  isEditEnable: PropTypes.bool.isRequired,
}