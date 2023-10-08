'use client'
import React from "react";

//  Components
import IntroBanner from "../../common/IntroBanner";
import Activity from "./components/Activity";
import ActionButton from "./components/ActionButton";
import ChildProfiles from "./components/ChildProfiles";
import BarChart from "./components/BarChart";

function ParentDashboard() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12">
          <IntroBanner title="Welcome Parents" />
          <BarChart />
          <ChildProfiles />
        </div>
        <div className="col-lg-5 col-md-12">
          <Activity />
          <ActionButton />
        </div>
      </div>
    </main>
  );
}

export default ParentDashboard;
