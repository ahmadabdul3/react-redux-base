
const actions = {};

// actions.getAppointmentsForUser = function() {
//   return dispatch => {
//     return appointmentClient.index().then((result) => {
//       dispatch(actions.getAppointmentsForUserSuccess(result.appointments));
//       return result;
//     }).catch((error) => {
//       console.error(error);
//     });
//   };
// };


// actions.deleteAppointmentSuccess = function(index) {
//   return {
//     type: 'DELETE_APPOINTMENT_SUCCESS',
//     index,
//   };
// };

actions.loginSuccess = function(data) {
  return {
    type: 'LOGIN_SUCCESS',
    data,
  };
};

actions.clearUser = function(data) {
  return {
    type: 'CLEAR_USER'
  };
};

export { actions };

const initialState = {
  user: {},
};

export default function appointments(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.data,
      };

    case 'CLEAR_USER':
      return {
        ...state,
        user: {},
      };

    default: return state;
  }
}
