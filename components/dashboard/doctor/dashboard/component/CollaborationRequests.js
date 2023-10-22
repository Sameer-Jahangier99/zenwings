import React from "react";
import Image from "next/image";

function CollaborationRequests() {
  return (
    <div className="white-background common-border-radius p-3 mt-3 ">
      <div className="d-flex justify-content-between">
        <h5 className="weight-500">Collaboration Requests</h5>
        <p className="m-0 primary-color caption">See all</p>
      </div>
      <div className="collaboration-container common-border-radius py-2">
        <div className="px-lg-4 px-md-4 px-2 mt-3">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="d-flex gap-2">
              <div className="parrete-bullete mt-2"></div>
              <div>
                <h5 className="m-0">Diagnosis Request</h5>
                <p className="light-black mt-2">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="light-black mt-2">1h ago</p>
              </div>
            </div>
            <p className="light-black ms-3 activity-arrow"> &gt; </p>
          </div>

          <div className="d-flex gap-3 justify-content-end">
            <button className="reject-collaboration-btn px-4">Reject</button>
            <button className="accept-collaboration-btn px-4">Accept</button>
          </div>
        </div>
      </div>
      <div className="collaboration-container common-border-radius py-2 mt-2">
        <div className="px-lg-4 px-md-4 px-2 mt-3">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="d-flex gap-2">
              <div className="parrete-bullete mt-2"></div>
              <div>
                <h5 className="m-0">Consultation Request </h5>
                <p className="light-black mt-2">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="light-black mt-2">1d ago</p>
              </div>
            </div>
            <p className="light-black ms-3 activity-arrow"> &gt; </p>
          </div>

          <div className="d-flex gap-3 justify-content-end">
            <button className="reject-collaboration-btn px-4">Reject</button>
            <button className="accept-collaboration-btn px-4">Accept</button>
          </div>
        </div>
      </div>
      <div className="collaboration-container common-border-radius py-2 mt-2">
        <div className="px-lg-4 px-md-4 px-2 mt-3">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="d-flex gap-2">
              <div className="parrete-bullete mt-2"></div>
              <div>
                <h5 className="m-0">Monthly Evaluation For Grade 2</h5>
                <p className="light-black mt-2">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="light-black mt-2">1d ago</p>
              </div>
            </div>
            <p className="light-black ms-3 activity-arrow"> &gt; </p>
          </div>

          <div className="d-flex gap-3 justify-content-end">
            <button className="reject-collaboration-btn px-4">Reject</button>
            <button className="accept-collaboration-btn px-4">Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollaborationRequests;
