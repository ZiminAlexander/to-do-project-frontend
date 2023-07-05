import React from "react";
import PropTypes from 'prop-types';
import "./task-date.css";

export const TaskDate = ({createdDate}) => {
  
  return(
    <div className="task-date">
      {createdDate}
    </div>
  );

}

TaskDate.propTypes = {
  createdDate: PropTypes.string.isRequired,
}
