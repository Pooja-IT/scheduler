import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  //Resetting Inputs
  function reset() {
    setName("")
    setInterviewer(null)
  }
  function cancel() {
    reset()
    props.onCancel()
  }
  function validate() {
    // if (name === "") {
    //   setError("Student name cannot be blank")
    //   return
    // }
    // if (interviewer === null) {
    //   setError("Please choose an interviewer")
    //   return
    // }
    setError("")
    props.onSave(name, interviewer)
  }

  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        value={name}
            onChange={event => setName(event.target.value)}
            // data-testid="student-name-input"
        placeholder="Enter Student Name"
        /*
          This must be a controlled component
        */
      />
      <section className="appointment__validation">{error}</section>

    </form>
    <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer} />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onSubmit={event => event.preventDefault()} onClick={validate}>Save</Button>
    </section>
  </section>
</main>
  );
}