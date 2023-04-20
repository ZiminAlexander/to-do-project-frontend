import React from "react";
import PropTypes from 'prop-types';

export const EditFullTextButton = ({changeIsEditEnable}) => {

  return(
    <button className="edit-button small-button" 
      onClick={changeIsEditEnable}
    />
  );

}

EditFullTextButton.propTypes = {
  changeIsEditEnable: PropTypes.func.isRequired, 
}
