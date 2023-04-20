import React from "react";
import PropTypes from 'prop-types';

export const EditTextButton = ({changeIsEditEnable}) => {

  return(
    <button className={"edit-button small-button"}
      onClick={changeIsEditEnable}
    />
  );

}

EditTextButton.propTypes = {
  changeIsEditEnable: PropTypes.func.isRequired,
}