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

export const getSummary = () => ({
  type: GET_SUMMARY,
});

export const getSummarySuccess = (summary) => ({
  type: GET_SUMMARY_SUCCESS,
  summary: summary,
});

export const getSummaryError = (error) => ({
  type: GET_SUMMARY_FAIL,
  payload: error,
});

export const getTransactions = (type) => ({
  type: GET_TRANSACTIONS,
  value: type,
});

export const getTransactionsSuccess = (tansactions) => ({
  type: GET_TRANSACTIONS_SUCCESS,
  tansactions: tansactions,
});

export const getTransactionsError = (error) => ({
  type: GET_TRANSACTIONS_FAIL,
  payload: error,
});

export const getChart = () => ({
  type: GET_CHART,
});

export const getChartSuccess = (chartData) => ({
  type: GET_CHART_SUCCESS,
  chart: chartData,
});

export const getChartError = (error) => ({
  type: GET_CHART_FAIL,
  payload: error,
});
