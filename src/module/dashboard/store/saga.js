import { takeEvery, call, put } from "redux-saga/effects";

import { GET_CHART, GET_SUMMARY, GET_TRANSACTIONS } from "./constant";
import {
  getSummarySuccess,
  getSummaryError,
  getTransactionsSuccess,
  getTransactionsError,
  getChartSuccess,
  getChartError,
} from "./action";

import dashboardSerObj from "../service/dashboardService";

function* doFetchChart() {
  try {
    const fetchResponse = yield call(dashboardSerObj.getChart);
    yield put(getChartSuccess(fetchResponse.data));
  } catch (error) {
    yield put(getChartError(error?.response?.data));
  }
}

function* doFetchSummary() {
  try {
    const fetchResponse = yield call(dashboardSerObj.fetchSummary);
    yield put(getSummarySuccess(fetchResponse.data));
  } catch (error) {
    yield put(getSummaryError(error.response.data));
  }
}

function* doFetchTransaction(action) {
  try {
    const fetchResponse = yield call(
      dashboardSerObj.fetchTranstion,
      action.value,
    );
    yield put(getTransactionsSuccess(fetchResponse.data));
  } catch (error) {
    yield put(getTransactionsError(error.response.data));
  }
}

function* dashboardSaga() {
  yield takeEvery(GET_CHART, doFetchChart);
  yield takeEvery(GET_SUMMARY, doFetchSummary);
  yield takeEvery(GET_TRANSACTIONS, doFetchTransaction);
}

export default dashboardSaga;
