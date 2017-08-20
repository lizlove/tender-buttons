
export const updateName = (name: string) => {
  return {
    type: 'UPDATE_NAME',
    name
  }
}


export const updateEmail = (email: string) => {
  return {
    type: 'UPDATE_EMAIL',
    email
  }
}

export const updateMessage = (message: string) => {
  return {
    type: 'UPDATE_MESSAGE',
    message
  }
}

export const updateIsHuman = (isHuman: boolean) => {
  return {
    type: 'UPDATE_IS_HUMAN',
    isHuman
  }
}

export const updateIsRobot = (isRobot: boolean) => {
  return {
    type: 'UPDATE_IS_ROBOT',
    isRobot
  }
}

export const emailSendSuccess = (isSent: boolean) => {
  return {
    type: "EMAIL_SEND_SUCCESS",
    isSent
  }
}

export const emailSendFailure = (errorMessage: string) => {
  return {
    type: "EMAIL_SEND_FAILURE",
    errorMessage
  }
}
