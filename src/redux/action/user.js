/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-expressions */
// import axios from 'axios'


export function getUserDetails(payload) {
    return {
        type: "USER_DETAILS", //event name
        payload    //data
    }
}

export function incrementOrdecrement(payload) {
    return {
        type: "incrementOrdecrement",
        payload
    }
}
export function UserpersonalDetails(payload) {
    return (dispatch) => {
        dispatch({ type: "personal_Details", payload })
    }
}
export function Education(payload) {
    return (dispatch) => {
        dispatch({ type: "Education_Details", payload })
    }
}


