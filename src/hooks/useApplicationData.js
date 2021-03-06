import { useEffect,useState } from "react";
import axios from "axios";
export default function useApplicationData(props) {

 const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  function bookInterview(id, interview) {
      const appointment = {
        ...state.appointments[id],
        interview: { ...interview }
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
      const selectedDay = state.days.find((day) => day.name === state.day);
      const nullAppointments = selectedDay.appointments.filter(
        (appointment) => appointments[appointment].interview === null).length;
        const updatedDays = state.days.map((day) => day.name === state.day ? { ...day, spots: nullAppointments} : day);
      
      setState({
        ...state,
        appointments,
        days: updatedDays,
      });
      return axios.put("/api/appointments/" + id, {interview});
    };

  function cancelInterview(id) {
      const appointment = {
        ...state.appointments[id],
        interview: null
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
      const selectedDay = state.days.find((day) => day.name === state.day);
      const nullAppointments = selectedDay.appointments.filter(
        (appointment) => appointments[appointment].interview === null).length;
        const updatedDays = state.days.map((day) => day.name === state.day ? { ...day, spots: nullAppointments} : day);

      setState({
        ...state,
        appointments,
        days: updatedDays,
      });
      return axios.delete("/api/appointments/" + id);
    };

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
  Promise.all([
    axios.get('/api/days'),
    axios.get('/api/appointments'),
    axios.get('/api/interviewers')
  ]).then(all => {
      setState(prev => ({...prev, 'days': all[0].data, 'appointments': all[1].data, 'interviewers': all[2].data }));
    });
  },[]);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}