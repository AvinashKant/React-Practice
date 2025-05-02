import { all, fork } from "redux-saga/effects";

import dashboardSaga from "../module/dashboard/store/saga";

const rootSaga = function* () {
  yield all([fork(dashboardSaga)]);
};

export default rootSaga;
