import React from "react";
import PropTypes from 'prop-types';

export const EditFullTextButton = ({toogleIsEditable}) => {

  return(
    <button className="edit-button small-button" 
      onClick={toogleIsEditable}
    />
  );

}

EditFullTextButton.propTypes = {
  toogleIsEditable: PropTypes.func.isRequired, 
}
