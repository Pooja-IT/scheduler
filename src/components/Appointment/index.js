import React, {useEffect} from 'react'

import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";
import axios from "axios";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
  useEffect(() => {
    if (props.interview && mode === EMPTY) {
      transition(SHOW);
    }
    if (!props.interview && mode === SHOW) {
      transition(EMPTY);
    }
  }, [mode, transition, props.interview])

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    }
    transition(SAVING);
    axios.put(`/api/appointments/${props.id}`, {interview})
      .then(response => {
        props.bookInterview(props.id, interview);
        transition(SHOW);
      })
      .catch(error => {
        transition(ERROR_SAVE, true)
      })
  }
  function cancel() {
    if (mode === CONFIRM) {
      transition(DELETING);
      axios
        .delete(`/api/appointments/${props.id}`, {})
        .then(response => {
          props.cancelInterview(props.id);
          transition(EMPTY);
        })
        .catch(error => {
          transition(ERROR_DELETE, true);
        })
    } else {
        transition(CONFIRM);      
      }
  }
  function edit() {
    transition(EDIT)
  }

  return (
    <article className="appointment">
    <Header time={props.time} />
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onDelete={cancel}
        onEdit={edit}
      />
    )}
    {mode === CREATE && (
        <Form
          name={props.name}
          value={props.value}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && (
        <Confirm 
          onCancel={back}
          onConfirm={cancel}
          message="Are you sure you would like to delete?" 
        />
      )}
      {mode === EDIT && (
        <Form
        name={props.name ? props.name : props.interview.student}
        value={props.value}
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error
        message="Could not create appointment"
        onClose={back}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
        message="Could not cancel appointment"
        onClose={back}
        />
      )}
    </article>
);
}
