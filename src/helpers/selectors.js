export function getAppointmentsForDay(state, day) {
  const filteredAppointments = [];
  state.days.forEach(stateDay => {
    if (stateDay.name === day) {
      stateDay.appointments.forEach(appointmentId => {
        filteredAppointments.push(state.appointments[appointmentId])
      })
    }
  })
  return filteredAppointments;
};

export function getInterview(state, interview) {
  if (!interview) {
    return null
  }
  let interviewer = state.interviewers[interview.interviewer];
  return { ...interview, interviewer };
};

export function getInterviewersForDay(state, day) {
  const filteredInterviewers = []
  state.days.forEach(stateDay => {
    if (stateDay.name === day) {
      stateDay.interviewers.forEach(interviewerId => {
        filteredInterviewers.push(state.interviewers[interviewerId])
      });
    }
  });
  return filteredInterviewers;
};

// export function getInterviewersForDay(state, day) {
//   const dayInterviewers =[];
//   const foundDay = state.days.find((el) => el.name === day);

//   if(!foundDay || foundDay.interviewers.length === 0) {
//     return dayInterviewers;
//   }
//   for(const int of foundDay.interviewers) {
//     dayInterviewers.push(state.interviewers[int]);
//   }
//   return dayInterviewers;
//   };