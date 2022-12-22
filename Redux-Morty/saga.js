import { put, call, takeEvery } from "redux-saga/effects";
import { fetchBeesSuccess, fetchBeesError, FETCH_BEES } from "./redux";
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
function* getAllCharacters() {
  try {
    let data = yield fetch("https://rickandmortyapi.com/api/character/2")
      .then((response) => response.json())
      .catch((err) => {
        throw err;
      });
    yield delay(1000);

    yield put(fetchBeesSuccess(data));
  } catch (error) {
    yield put(fetchBeesError(error));
  }
}

export default function* () {
  yield takeEvery(FETCH_BEES, getAllCharacters);
}
