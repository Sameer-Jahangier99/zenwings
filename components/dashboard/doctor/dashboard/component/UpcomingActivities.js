import React from "react";
import Image from "next/image";

function UpcomingActivities() {
  return (
    <div className="white-background common-border-radius p-3">
      <div className="d-flex justify-content-between">
        <h5 className="weight-500">Upcoming Appointment</h5>
        <p className="m-0 primary-color caption">See all</p>
      </div>

      <div className="d-flex justify-content-between align-items-center px-lg-4 px-md-4 px-2 mt-3 border-bottom">
        <div>
          <div className="d-flex gap-2 align-items-center">
            <div className="aqua-bullete"></div>
            <p className="light-black m-0">08:30 AM - 10:30 AM</p>
          </div>
          <p className="weight-500 mt-2">Ayman - session 24</p>
        </div>

        <p className="light-black ms-3 activity-arrow"> &gt; </p>
      </div>

      <div className="d-flex justify-content-between align-items-center px-lg-4 px-md-4 px-2 mt-3 border-bottom">
        <div>
          <div className="d-flex gap-2 align-items-center">
            <div className="treatment-bullete"></div>
            <p className="light-black m-0">1:30 PM - 02:30 PM</p>
          </div>
          <p className="weight-500 mt-2">Mansoure - session 12</p>
        </div>

        <p className="light-black ms-3 activity-arrow"> &gt; </p>
      </div>

      <div className="d-flex justify-content-between align-items-center px-lg-4 px-md-4 px-2 mt-3 border-bottom">
        <div>
          <div className="d-flex gap-2 align-items-center">
            <div className="parrete-bullete"></div>
            <p className="light-black m-0">04:30 PM - 05:30 PM</p>
          </div>
          <p className="weight-500 mt-2">Waleed - New consultation</p>
        </div>

        <p className="light-black ms-3 activity-arrow"> &gt; </p>
      </div>
    </div>
  );
}

export default UpcomingActivities;
