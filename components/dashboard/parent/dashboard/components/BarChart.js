import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

// Function to generate random data
const generateRandomData = () => {
  return labels.map(() => Math.floor(Math.random() * 100));
};

export const data = {
  labels,
  datasets: [
    {
      label: "Flag",
      data: generateRandomData(),
      backgroundColor: "#25CAAC",
    },
    {
      label: "Activity",
      data: generateRandomData(),
      backgroundColor: "#3AA1FF",
    },
  ],
};

function BarChart() {
  return (
    <div className="white-background common-border-radius p-3 my-3">
      <div className="mb-4">
        <h3 className="weight-500 m-0">Latest Updates</h3>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChart;
