"use client";
import React from "react";
import Image from "next/image";

// Styles
import "../../../../../styles/dashboard/teacher/dashboard-styles.css";

function Activity() {
  return (
    <div className="white-background common-border-radius p-3">
      <div>
        <h5 className="weight-500 m-0">Messages</h5>
      </div>

      <div className="d-flex gap-3 mt-lg-4 mt-md-4 mt-3 notifications-border cursor-pointer">
        <Image
          src="/chat-1.png"
          alt="Your Image Alt Text"
          height={50}
          width={50}
        />
        <div className="w-100 d-flex justify-content-between">
          <div>
            <h6 className="weight-500">Lorem Ipsum</h6>
            <p className="light-black">Lorem Ipsum is simply dummy text</p>
          </div>
          <div>
            <p className="light-black">1 hour ago</p>
          </div>
        </div>
      </div>

       {/* message */}
      <div className="d-flex gap-3 mt-lg-4 mt-md-4 mt-3 notifications-border cursor-pointer">
        <Image
          src="/chat-2.png"
          alt="Your Image Alt Text"
          height={50}
          width={50}
        />
        <div className="w-100 d-flex justify-content-between">
          <div>
            <h6 className="weight-500">Lorem Ipsum</h6>
            <p className="light-black">Lorem Ipsum is simply dummy text</p>
          </div>
          <div>
            <p className="light-black">1 hour ago</p>
          </div>
        </div>
      </div>

       {/* message */}
      <div className="d-flex gap-3 mt-3 notifications-border cursor-pointer">
        <Image
          src="/chat-3.png"
          alt="Your Image Alt Text"
          height={50}
          width={50}
        />
        <div className="w-100 d-flex justify-content-between">
          <div>
            <h6 className="weight-500">New appointment requested</h6>
            <p className="light-black">Lorem Ipsum is simply dummy text</p>
          </div>
          <div>
            <p className="light-black">4 hour ago</p>
          </div>
        </div>
      </div>

      {/* upcoming activity */}
      <div className="w-100 mt-lg-5 mt-md-5 mt-3 d-flex justify-content-between">
        <h5 className="weight-500 m-0">Suggested Reading</h5>
        <p className="m-0 primary-color caption">See all</p>
      </div>

       {/* suggestion */}
      <div className="d-flex align-items-center  gap-4 mt-lg-4 mt-md-4 mt-3 p-3 activity-container cursor-pointer">
        <Image
          src="/bullet.svg"
          alt="Your Image Alt Text"
          height={10}
          width={10}
        />
        <div className="d-flex w-100 justify-content-between">
          <div>
            <h6 className="weight-500">Lorem Ipsum</h6>
            <p className="light-black m-0">Tika sarak s.pd</p>
          </div>
          <div>
            <p className="light-black ms-3 activity-arrow"> &gt; </p>
          </div>
        </div>
      </div>

       {/* suggestion */}
      <div className="d-flex align-items-center  gap-4 mt-3 p-3 activity-container cursor-pointer">
        <Image
          src="/bullet.svg"
          alt="Your Image Alt Text"
          height={10}
          width={10}
        />
        <div className="d-flex w-100 justify-content-between">
          <div>
            <h6 className="weight-500">Lorem Ipsum</h6>
            <p className="light-black m-0">Tika sarak s.pd</p>
          </div>
          <div>
            <p className="light-black ms-3 activity-arrow"> &gt; </p>
          </div>
        </div>
      </div>

      {/* Event Timeline */}
      <div className="w-100 mt-lg-5 mt-md-5 mt-3 d-flex justify-content-between">
        <h5 className="weight-500 m-0">Upcoming Workshop</h5>
        <p className="m-0 primary-color caption">See all</p>
      </div>

      {/* timeline */}
      <div className="d-flex align-items-center  gap-4 mt-lg-4 mt-md-4 mt-3 p-3 activity-container cursor-pointer">
        <Image
          src="/bullet.svg"
          alt="Your Image Alt Text"
          height={10}
          width={10}
        />
        <div className="d-flex w-100 justify-content-between">
          <div>
            <h6 className="weight-500">Lorem Ipsum</h6>
            <div className="d-flex gap-2 align-items-center">
              <Image
                src="/timeline.svg"
                alt="Your Image Alt Text"
                height={20}
                width={20}
              />
              <p className="light-black m-0">10.00 - 12.00</p>
            </div>
          </div>
          <div>
            <p className="light-black ms-3 activity-arrow"> &gt; </p>
          </div>
        </div>
      </div>

      {/* timeline */}
      <div className="d-flex align-items-center gap-4 mt-3 p-3 activity-container cursor-pointer">
        <Image
          src="/bullet.svg"
          alt="Your Image Alt Text"
          height={10}
          width={10}
        />
        <div className="d-flex w-100 justify-content-between">
          <div>
            <h6 className="weight-500">Lorem Ipsum</h6>
            <div className="d-flex gap-2 align-items-center">
              <Image
                src="/timeline.svg"
                alt="Your Image Alt Text"
                height={20}
                width={20}
              />
              <p className="light-black m-0">10.00 - 12.00</p>
            </div>
          </div>
          <div>
            <p className="light-black ms-3 activity-arrow"> &gt; </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
