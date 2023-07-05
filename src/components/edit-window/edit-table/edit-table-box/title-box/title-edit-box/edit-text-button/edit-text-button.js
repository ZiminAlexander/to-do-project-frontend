import React from "react";
import PropTypes from 'prop-types';

export const EditTextButton = ({toogleIsEditable}) => {

  return(
    <button className={`edit-button small-button`}
      onClick={toogleIsEditable}
    />
  );

}

EditTextButton.propTypes = {
  toogleIsEditable: PropTypes.func.isRequired,
}