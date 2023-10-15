"use client";
import React from "react";

import Image from "next/image";

function Sidebar({ routes }) {
  return (
    <div className="d-flex flex-column h-100">
      <div className="d-flex justify-content-center mt-2 ">
        <Image
          src="/zenwinglogo.png"
          alt="Your Image Alt Text"
          className="sidebar-logo"
          height={150}
          width={200}
        />
      </div>
      <div className="d-flex ms-md-3 ms-2">
        <Image
          src="/zenwingmobilelogo.png"
          alt="Your Image Alt Text"
          className="sidebar-mobile-logo"
          height={50}
          width={50}
        />
      </div>
      <div className="flex-grow-1 d-flex flex-column justify-content-between">
        <div className="d-flex flex-column justify-content-center mt-lg-5 mt-md-5 mt-3">
          {routes?.map((route, key) => {
            return (
              <div
                key={key}
                className= {`${route?.isActive && "active-route"} d-flex gap-2 align-items-center w-100 justify-content-start cursor-pointer mt-4`}
              >
                <div className="ms-3">
                  <Image
                    src={route?.icon}
                    alt="Your Image Alt Text"
                    height={25}
                    width={25}
                  />
                </div>
                <h5 className={`${route?.isActive ? "primary-color" : "primary-grey-text-color"} font-weight-500 m-0 router-text-height router-text `}>
                  {route?.name}
                </h5>
              </div>
            );
          })}
        </div>

        {/* logout */}
        <div>
          <div className="d-flex gap-2 algin-items-center w-100 justify-content-start mt-4 cursor-pointer">
            <div className="ms-3">
              <Image
                src="/logout.svg"
                alt="Your Image Alt Text"
                height={25}
                width={25}
              />
            </div>
            <h5 className="dark-grey weight-500 m-0 router-text-height router-text">
              Logout
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
