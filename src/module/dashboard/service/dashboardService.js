import axiosInstance from "../../../utils/http";

class dashboardService {
  async fetchSummary() {
    return await axiosInstance
      .get("v1/user/details")
      .then((response) => {
        const summaryData = response.data;
        return summaryData;
      })
      .catch((error) => {
        throw error;
      });
  }

  async fetchTranstion(type) {
    return await axiosInstance
      .get(`v1/transactions?type=${type}&page=1&limit=10`)
      .then((response) => {
        const transactionsData = response.data
        return transactionsData;
      })
      .catch((error) => {
        throw error;
      });
  }

  async fetchChart() {
    return await axiosInstance
      .get("v1/chart?year=2025")
      .then((response) => {
        const chartData = response.data
        return chartData;
      })
      .catch((error) => {
        throw error;
      });
  }

}

const DashboardServiceInstance = new dashboardService();

export default DashboardServiceInstance;
