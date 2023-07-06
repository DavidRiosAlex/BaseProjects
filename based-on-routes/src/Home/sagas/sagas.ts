/**
 * TODO: put here your saga logic for home
 */

import { put, takeLatest } from "redux-saga/effects";
import { SOME_ACTION_REQUEST, SOME_ACTION_SUCCESS } from "../reducers/reducer";


function* something () {
    yield put({ type: SOME_ACTION_SUCCESS })
}

export default [
    takeLatest(SOME_ACTION_REQUEST, something)
];