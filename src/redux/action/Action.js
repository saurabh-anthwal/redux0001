import {
    ACCEPT_REQUEST, REJECT_REQUEST
} from "../types"


export const addMessage = () => (dispatch)=>{
    dispatch({
        type : ACCEPT_REQUEST
    })
}

export const removeMessage = () => (dispatch)=>{
    dispatch({
        type:REJECT_REQUEST
    })
}


