import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import "./task.css";

export const Tasks = ({tasksArray}) => {

  return(
    tasksArray
  );

}

Tasks.propTypes = {
  tasksArray: PropTypes.array.isRequired,
}