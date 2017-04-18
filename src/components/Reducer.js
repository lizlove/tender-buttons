/** @flow */

const initialState = {
  name: "",
  email: "",
  message: "",
  isHuman: false,
  isRobot: true,
  isSent: false,
  errorMessage: "",
};

const formActions = (state: Object = initialState, action: Object) => {
  switch(action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'UPDATE_EMAIL':
      return {
        ...state,
        email: action.email,
      }
    case 'UPDATE_MESSAGE':
      return {
        ...state,
        message: action.message,
      }
    case 'UPDATE_IS_HUMAN':
      return {
      ...state,
      isHuman: action.isHuman
      }
    case 'UPDATE_IS_ROBOT':
      return {
      ...state,
      isRobot: action.isRobot
      }
    case 'EMAIL_SEND_SUCCESS':
      return {
        ...state,
        isSent: action.isSent
      }
    case 'EMAIL_SEND_FAILURE':
      return {
        ...state,
        errorMessage: action.errorMessage
      }
    default:
      return state;
  }
}

export default formActions;
