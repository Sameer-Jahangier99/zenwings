import React from "react";

import Image from "next/image";

function Sidebar() {
  return (
    <div className="d-flex flex-column h-100">
      <div className="d-flex ms-3 mt-2 ">
        <Image
          src="/zenwingslogo.svg"
          alt="Your Image Alt Text"
          className="sidebar-logo"
          height={50}
          width={170}
        />
      </div>
      <div className="d-flex ms-md-3 ms-2">
        <Image
          src="/zenwingsmobilelogo.svg"
          alt="Your Image Alt Text"
          className="sidebar-mobile-logo"
          height={50}
          width={50}
        />
      </div>
      <div className="flex-grow-1 d-flex flex-column justify-content-between">
        <div className="d-flex flex-column justify-content-center mt-5">
          {/* router  */}
          <div className="d-flex gap-2 algin-items-center w-100 justify-content-start active-route cursor-pointer">
            <div className="ms-3">
              <Image
                src="/dashboarIcon.svg"
                alt="Your Image Alt Text"
                height={25}
                width={25}
              />
            </div>
            <h5 className="primary-color weight-500 m-0 router-text-height router-text">
              Dashboard
            </h5>
          </div>

          {/* router  */}
          <div className="d-flex gap-2 algin-items-center w-100 justify-content-start mt-4 cursor-pointer">
            <div className="ms-3">
              <Image
                src="/speech-bubble.svg"
                alt="Your Image Alt Text"
                height={25}
                width={25}
              />
            </div>
            <h5 className="dark-grey weight-500 m-0 router-text-height router-text">
              Communications
            </h5>
          </div>

          {/* router */}
          <div className="d-flex gap-2 algin-items-center w-100 justify-content-start mt-4 cursor-pointer">
            <div className="ms-3">
              <Image
                src="/report.svg"
                alt="Your Image Alt Text"
                height={25}
                width={25}
              />
            </div>
            <h5 className="dark-grey weight-500 m-0 router-text-height router-text">
              Reporting
            </h5>
          </div>

          {/* router */}
          <div className="d-flex gap-2 algin-items-center w-100 justify-content-start mt-4 cursor-pointer">
            <div className="ms-3">
              <Image
                src="/customer-support.svg"
                alt="Your Image Alt Text"
                height={25}
                width={25}
              />
            </div>
            <h5 className="dark-grey weight-500 m-0 router-text-height router-text">
              Support
            </h5>
          </div>
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
