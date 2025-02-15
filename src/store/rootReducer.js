import { combineReducers } from "redux";


import { dashboardReducer } from "../module/dashboard/store/reducer";


export default combineReducers({
  dashboard: dashboardReducer,
});
