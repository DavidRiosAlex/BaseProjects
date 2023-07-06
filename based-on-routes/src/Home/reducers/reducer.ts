import { AnyAction } from "@reduxjs/toolkit";

/*
    TODO: replace all this with a real scenario
*/

const initialState = {
    list: [],
    fetching: false,
}


export const SOME_ACTION_REQUEST = 'SOME_ACTION_REQUEST'
export const SOME_ACTION_SUCCESS = 'SOME_ACTION_SUCCESS'
export const SOME_ACTION_ERROR = 'SOME_ACTION_ERROR'

export default function todos(state = initialState, action: AnyAction) {
    switch(action.type) {
        
        case SOME_ACTION_REQUEST:
            return { ...state, fetching: true }

        case SOME_ACTION_SUCCESS:
            return { ...state, list: [...state.list, 'new todo'], fetching: false }

        case SOME_ACTION_ERROR:
            return { ...state, fetching: false }

        default:
            return { ... state }
    }
}