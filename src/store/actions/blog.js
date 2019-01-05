import {CREATE_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, GET_POSTS, GET_SINGLE_POST} from "./types";

// posts actions
export function loadData(data) {
    return dispatch => dispatch({
        type: GET_POSTS,
        payload: data
    })
}

export function clearPostFields() {
    return dispatch => dispatch({
        type: CREATE_POST
    })
}

export function editPost(id, data) {
    return {
        type: EDIT_POST,
        payload: {
            id,
            data
        }
    }
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload: id
    }
}

export function getSinglePost(data) {
    return dispatch => dispatch({
        type: GET_SINGLE_POST,
        payload: data
    })
}

// comments actions
export function loadComments(data) {
    return {
        type: ADD_COMMENT,
        payload: data
    }
}