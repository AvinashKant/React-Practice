import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const fullData = {
  2025: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Stock',
        data: [30, 40, 70, 60, 90, 100],
        backgroundColor: '#F5921B',
        borderRadius: 4,
      },
      {
        label: 'Mutual Fund',
        data: [50, 60, 30, 40, 70, 80],
        backgroundColor: '#87BB62',
        borderRadius: 4,
      },
      {
        label: 'Bank',
        data: [20, 30, 50, 20, 60, 50],
        backgroundColor: '#4394E5',
        borderRadius: 4,
      },
    ],
  },
  2023: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Stock',
        data: [30, 40, 70, 60, 20, 30, 40, 50, 42, 40, 58, 82],
        backgroundColor: '#F5921B',
        borderRadius: 4,
      },
      {
        label: 'Mutual Fund',
        data: [50, 60, 30, 60, 60, 30, 10, 50, 42, 30, 58, 22],
        backgroundColor: '#87BB62',
        borderRadius: 4,
      },
      {
        label: 'Bank',
        data: [20, 30, 50, 20, 60, 26, 30, 80, 50, 42, 20, 58],
        backgroundColor: '#4394E5',
        borderRadius: 4,
      },
    ],
  },
  2024: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Stock',
        data: [10, 40, 70, 60, 40, 90, 40, 50, 22, 40, 58, 82],
        backgroundColor: '#F5921B',
        borderRadius: 4,
      },
      {
        label: 'Mutual Fund',
        data: [20, 60, 80, 60, 70, 60, 10, 50, 42, 30, 58, 22],
        backgroundColor: '#87BB62',
        borderRadius: 4,
      },
      {
        label: 'Bank',
        data: [30, 50, 55, 20, 50, 26, 30, 80, 50, 42, 50, 48],
        backgroundColor: '#4394E5',
        borderRadius: 4,
      },
    ],
  },
};

export default function BarChart() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const [selectedYear, setSelectedYear] = useState(currentYear - 1);
  const [filteredData, setFilteredData] = useState(fullData[currentYear]);
  useEffect(() => {
    const newData = fullData[selectedYear];

    if (selectedYear === currentYear) {
      const updatedLabels = newData.labels.slice(0, currentMonth + 1);
      const updatedDatasets = newData.datasets.map((dataset) => ({
        ...dataset,
        data: dataset.data.slice(0, currentMonth + 1),
      }));

      setFilteredData({
        labels: updatedLabels,
        datasets: updatedDatasets,
      });
    } else {
      setFilteredData(newData);
    }
  }, [selectedYear]);

  const handleYearChange = (event) => {
    setSelectedYear(Number(event.target.value));
  };

  const data = filteredData;

  return (
    <div className="w-full rounded-lg bg-white p-5 mt-4 shadow sm:px-6 sm:pt-6">
      <div className='flex justify-end'>
        <div className="mb-4 w-44">
          <label htmlFor="year-select" className="block text-sm font-medium text-gray-700">
            Select Year
          </label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={handleYearChange}
            className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value={2025}>2025</option>
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
          </select>
        </div>
      </div>
      <Bar
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            title: { display: true, text: `Data for ${selectedYear}` },
          },
        }}
      />
    </div>
  );
}
