"use client";
import React from "react";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

// Styles
import "../../../../../styles/dashboard/teacher/dashboard-styles.css";

function StudentList() {
  return (
    <div className="white-background common-border-radius p-3 my-3">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h3 className="weight-500 m-0">Recent Flags</h3>
        </div>

        <p className="m-0 primary-color caption">See all</p>
      </div>

      <div className="d-flex align-items-center justify-content-between mt-3 ">
        <div className="d-flex gap-2 align-items-center">
          <Image
            src="/student1.png"
            alt="Your Image Alt Text"
            height={50}
            width={50}
          />
          <h5 className="weight-400 m-0">Abbas</h5>
        </div>
        <div className="flag-container px-4 py-1 ">

            <p className="primary-color m-0 caption">flag</p>
            </div>
      </div>

      <div className="d-flex align-items-center justify-content-between mt-3 ">
        <div className="d-flex gap-2 align-items-center">
          <Image
            src="/student2.png"
            alt="Your Image Alt Text"
            height={50}
            width={50}
          />
          <h5 className="weight-400 m-0">Aladdin</h5>
        </div>
        <div className="flag-container px-4 py-1 ">

            <p className="primary-color m-0 caption">flag</p>
            </div>
      </div>
      
    </div>
  );
}

export default StudentList;
