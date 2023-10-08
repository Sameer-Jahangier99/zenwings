"use client";
import React from "react";
import Image from "next/image";

// Styles
import "../../../../../styles/dashboard/teacher/dashboard-styles.css";

function ActionButton() {
  return (
    <div className="row py-3">
      <div className="col-6">
        <button type="button" class="btn w-100 px-3 generate-report-btn weight-500">
          Generate Report
        </button>
      </div>
      <div className="col-6">
        <button type="button" class="btn w-100 set-appointment-btn px-3">
          Set Appointment
        </button>
      </div>
    </div>
  );
}

export default ActionButton;
