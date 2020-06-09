import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

function* fetchNews() {
  try {
    const json = yield axios
      .get(
        "http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-09&sortBy=publishedAt&apiKey=9a67ab8be0d5485cad2fabfd436e8d33"
      )
      .then((response) => {
        console.log("responseeee==>>>", response);
        return response.data;
      });

    yield put({ type: "NEWS_RECEIVED", json: json.articles[1] });
  } catch (err) {
    console.log("error of saga", err);
    yield put({ type: "REQUEST_FAILED", err });
  }
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

export function* helloSaga() {
  console.log("Hello Sagas!");
  yield "Saga";
}

export default function* rootSaga() {
  yield all([actionWatcher(), helloSaga()]);
}
