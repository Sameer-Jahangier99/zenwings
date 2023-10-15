import React from "react";

// Components
import IntroBanner from "../../common/IntroBanner";
import LineChart from "./component/LineChart";
import PatientData from "./component/PatientData";
import UpcomingActivities from "./component/UpcomingActivities";
import CollaborationRequests from "./component/CollaborationRequests";
import SetAvailability from "./component/SetAvailability";
import ActionButton from "./component/ActionButton";

function TeacherDashboard() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12">
          <IntroBanner title="Dr. Hannah Wildridge" />
          <PatientData />
          <LineChart />
        </div>
        <div className="col-lg-5 col-md-12">
          <UpcomingActivities />
          <CollaborationRequests />
          <SetAvailability />
          <ActionButton />
        </div>
      </div>
    </main>
  );
}

export default TeacherDashboard;
