import { call, put } from "redux-saga/effects"

import api from "../../../services/api"
import { loadFailure, loadSuccess } from "./actions"

// GENERATOR: that keeps the api data
export function* load() {
  try {
    // Request GET with Route (BaseURL + "/" + "users/pedrofrohmut/repos")
    const response = yield call(api.get, "users/pedrofrohmut/repos")
    // OnSuccess
    yield put(loadSuccess(response.data))
  } catch (err) {
    // OnError
    yield put(loadFailure())
  }
}
