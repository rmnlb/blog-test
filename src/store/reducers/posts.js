
import {ADD_COMMENT, CREATE_POST, DELETE_POST, EDIT_POST, GET_POSTS, GET_SINGLE_POST} from "../actions/types";

const initialState = {
    posts: [],
    toView: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS: {
            return {
                toView: {},
                posts: action.payload
            }
        }
        case GET_SINGLE_POST: {
            return {
                ...state,
                toView: action.payload
            }
        }
        case CREATE_POST: {
            return {
                ...state,
                toView: {}
            }
        }
        case EDIT_POST: {
            return {...state}
        }
        case DELETE_POST: {
            return {...state}
        }
        case ADD_COMMENT: {
            return {...state}
        }
        default: {
            return {...state}
        }
    }
}