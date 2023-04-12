import React from "react";
import PropTypes from 'prop-types';

export function EditFullTextButton({setIsEditEnable, isEditEnable}) {

  return(
    <button className="edit-button small-button" 
      onClick={() => {
        setIsEditEnable(!isEditEnable);
      }}
    />
  );

}

EditFullTextButton.propTypes = {
  setIsEditEnable: PropTypes.func.isRequired, 
  isEditEnable: PropTypes.bool.isRequired, 
}
