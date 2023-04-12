import React from "react";
import PropTypes from 'prop-types';
import "./task-date.css";

export function TaskDate({createdDate}) {
  
  return(
    <div className="task-date">
      {createdDate}
    </div>
  );

}

TaskDate.propTypes = {
  createdDate: PropTypes.string.isRequired,
}
