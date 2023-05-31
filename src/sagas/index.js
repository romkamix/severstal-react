import { put, takeEvery } from "redux-saga/effects";
import {
  login,
  loginAsync,
  setAuthError,
  setAuthIsLoaded,
  setAuthIsLoading,
} from "../store";
import { auth as api } from "../api";

export function* workerSaga({ payload }) {
  yield put(setAuthIsLoading());

  try {
    yield api.csrf();
    yield api.login(payload);
    const { data } = yield api.user();
    yield put(login(data.data));
  } catch {
    yield put(setAuthError("Имя пользователя или пароль введены не верно"));
  }

  yield put(setAuthIsLoaded());
}

export function* watchClickSaga() {
  yield takeEvery(loginAsync().type, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
