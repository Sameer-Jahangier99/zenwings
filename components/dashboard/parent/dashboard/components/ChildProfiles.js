"use client";
import React from "react";
import Image from "next/image";

// Styles
import "../../../../../styles/dashboard/parent/dashboard-styles.css";

function ChildProfiles() {
  return (
    <div className="white-background common-border-radius p-3 my-3">
      <div>
        <h3 className="weight-500 m-0">Child Profiles</h3>
      </div>

      <div className="row mt-4 student-profile-border-bottom">
        <div className="col-6">
          <h5 className="weight-400">Name</h5>
        </div>
        <div className="col-6">
          <h5 className="weight-200">Student Name</h5>
        </div>
      </div>

      <div className="row mt-4 student-profile-border-bottom">
        <div className="col-6">
          <h5 className="weight-400">Age</h5>
        </div>
        <div className="col-6">
          <h5 className="weight-200">7 Years</h5>
        </div>
      </div>

      <div className="row mt-4 student-profile-border-bottom">
        <div className="col-6">
          <h5 className="weight-400">Grade</h5>
        </div>
        <div className="col-6">
          <h5 className="weight-200">2</h5>
        </div>
      </div>

      <div className="row mt-4 student-profile-border-bottom">
        <div className="col-6">
          <h5 className="weight-400">Flags</h5>
        </div>
        <div className="col-6">
          <h5 className="weight-200">2</h5>
        </div>
      </div>
    </div>
  );
}

export default ChildProfiles;
