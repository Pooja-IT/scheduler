import classNames from "classnames";
import React from "react";
import "./InterviewerListItem.scss";

//className="interviewers__item"
export default function InterviewerListItem(props) {
  const interviewerClass = classNames({
    "interviewers__item" : true,
    "interviewers__item--selected" : props.selected
  })
  const imageClass = classNames({
    "interviewers__item-image" : true,
    "interviewers__item--selected-image" : props.selected
  })
  return (
    <li 
    className={interviewerClass}
    onClick={props.setInterviewer}
    >
      <img
        className={imageClass}
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}