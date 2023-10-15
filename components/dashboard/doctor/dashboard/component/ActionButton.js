"use client";
import React from "react";

// Styles
import "../../../../../styles/dashboard/teacher/dashboard-styles.css";

function ActionButton() {
  return (
    <div className="row py-3">
      <div className="col-6">
        <button
          type="button"
          className="btn w-100  generate-report-btn weight-500"
        >
          Generate Report
        </button>
      </div>
      <div className="col-6">
        <button type="button" className="btn w-100 set-appointment-btn ">
          Collaboration Request
        </button>
      </div>
    </div>
  );
}

export default ActionButton;
