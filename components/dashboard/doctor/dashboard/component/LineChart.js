"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

// Styles
import "../../../../../styles/dashboard/doctor/dashboard-styles.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
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
      borderColor: "#25CAAC",
      backgroundColor: "#25CAAC",
    },
    {
      label: "Activity",
      data: generateRandomData(),
      borderColor: "#3AA1FF",
      backgroundColor: "#3AA1FF",
    },
  ],
};

function LineChart() {
  return (
    <div className="white-background common-border-radius p-4 my-3">
      {/* chart header */}
      <div className="mb-4 d-flex justify-content-between">
        <h3 className="weight-500 m-0">Analytics</h3>
        <div className="d-flex gap-2">
          <button type="button" className="btn w-100 add-new-data-btn">
            View Full Report
          </button>
          <DropdownButton
            id="dropdown-basic-button"
            title="Monthly"
            variant="success"
            className="report-filter"
          >
            <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>

      {/* chart data info */}

      <div className="row mb-3">
        <div className="col-md-3 report-border-right">
          <p className="caption primary-grey-text-color  m-0">Total Patients</p>
          <h5 className="weight-600 mt-3">502.414</h5>
        </div>
        <div className="col-md-3 report-border-right">
          <div className="d-flex gap-2 align-items-center">
            <div className="total-admitted-color"></div>
            <p className="caption primary-grey-text-color m-0">
              Total Admitted
            </p>
          </div>
          <h5 className="weight-600 mt-3">42.414</h5>
        </div>
        <div className="col-md-3">
          <div className="d-flex gap-2 align-items-center">
            <div className="total-discharged-color"></div>
            <p className="caption primary-grey-text-color m-0">
              Total Discharged
            </p>
          </div>
          <h5 className="weight-600 mt-3">1.414</h5>
        </div>
      </div>
      <Line options={options} data={data} />
    </div>
  );
}

export default LineChart;
