import React from "react";

//  Components
import IntroBanner from "../../common/IntroBanner";
import Activity from "./components/Activity";

function ParentDashboard() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12">
          <IntroBanner title="Welcome Parents" />
        </div>
        <div className="col-lg-5 col-md-12">
          <Activity />
        </div>
      </div>
    </main>
  );
}

export default ParentDashboard;
