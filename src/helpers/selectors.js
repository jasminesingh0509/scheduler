export function getAppointmentsForDay(state, day) {
  let newArr = [];
  for (let date of state.days) {
    if (date.name === day) {
      newArr.push(...date.appointments);
    }
  }
  let appointmentsArr = [];
  for (let aptObj in state.appointments) {
    for (let id of newArr) {
      if (id === parseInt(aptObj)) {
        appointmentsArr.push(state.appointments[aptObj]);
      }
    }
  }
  return appointmentsArr;
}
