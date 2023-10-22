import React from "react";

// Components
import IntroBanner from "../../common/IntroBanner";
import StudentList from "./components/StudentList";
import RecentFlags from "./components/RecentFlags";
import Activity from "./components/Activity";
import ActionButton from "./components/ActionButton";

function TeacherDashboard() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12">
          <IntroBanner
            title="Welcome Teacher"
            description="Education Beyond the Classroom: Crafting Tomorrow's Thinkers Today."
          />
          <StudentList />
          <RecentFlags />
        </div>
        <div className="col-lg-5 col-md-12">
          <Activity />
          <ActionButton />
        </div>
      </div>
    </main>
  );
}

export default TeacherDashboard;
