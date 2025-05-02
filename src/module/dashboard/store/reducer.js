import {
  GET_SUMMARY,
  GET_SUMMARY_SUCCESS,
  GET_SUMMARY_FAIL,
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_FAIL,
  GET_CHART,
  GET_CHART_SUCCESS,
  GET_CHART_FAIL,
} from "./constant";

//initial state
const initialState = {
  message: "",
  transaction: [],
  summary: [],
  chart: [],
  isLoaderOn: false,
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        isLoaderOn: true,
      };
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transaction: action.tansactions,
        isLoaderOn: false,
      };
    case GET_TRANSACTIONS_FAIL:
      return {
        ...state,
        message: action.message,
        isLoaderOn: false,
      };
    case GET_SUMMARY:
      return {
        ...state,
        isLoaderOn: true,
      };
    case GET_SUMMARY_SUCCESS:
      return {
        ...state,
        summary: action.summary,
        isLoaderOn: false,
      };
    case GET_SUMMARY_FAIL:
      return {
        ...state,
        message: action.message,
        isLoaderOn: false,
      };
    case GET_CHART:
      return {
        ...state,
        isLoaderOn: true,
      };
    case GET_CHART_SUCCESS:
      return {
        ...state,
        chart: action.chart,
        isLoaderOn: false,
      };
    case GET_CHART_FAIL:
      return {
        ...state,
        message: action.message,
        isLoaderOn: false,
      };
    default:
      return state;
  }
};
