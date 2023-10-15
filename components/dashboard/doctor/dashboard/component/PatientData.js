"use client";

import React from "react";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

// Styles
import "../../../../../styles/dashboard/teacher/dashboard-styles.css";

function PatientData() {
  return (
    <div className="white-background common-border-radius p-3 my-3">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h3 className="weight-500 m-0">Patient Data</h3>
        </div>
        <div className="d-flex gap-2">
          <div className="position-relative">
            <input
              type="email"
              className="form-control patient-data-box-input"
              id="patient-data-box-input1"
              placeholder="Search"
            />
            <Image
              src="/search-icon.svg"
              alt="Your Image Alt Text"
              height={20}
              width={20}
              className="patient-search-icon"
            />
          </div>
          <DropdownButton
            id="dropdown-basic-button"
            title="Sort By"
            className="patient-filter-button"
          >
            <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
          </DropdownButton>
          <button className="filter-btn">
            <Image
              src="/mi_filter.svg"
              alt="Your Image Alt Text"
              height={30}
              width={30}
            />
          </button>
        </div>
      </div>

      <table className="mt-4 w-100">
        <thead className="py-4 px-2">
          <tr>
            <th className="py-2 px-1 d-flex align-items-center studentlist-thead-border weight-400 primary-grey-text-color">
              Patient Name
            </th>
            <th className="studentlist-thead-border px-1 weight-400 primary-grey-text-color">
              Date In
            </th>
            <th className="studentlist-thead-border px-1 weight-400 primary-grey-text-color">
              Symptoms
            </th>
            <th className="studentlist-thead-border px-1 weight-400 primary-grey-text-color">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          <tr>
            <td className="d-flex gap-2 align-items-center py-2">
              <Image
                src="/face-1.svg"
                alt="Your Image Alt Text"
                height={50}
                width={50}
              />
              <h5 className="weight-400 m-0">Annette Black</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0 primary-grey-text-color">2020-04-26</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0 primary-grey-text-color">Fever</h5>
            </td>
            <td>
              <button className="d-flex gap-2  align-items-center recovered-btn p-2">
                <div className="recovered-bullete"></div>
                <p className="recovered-btn-text m-0">Recovered</p>
              </button>
            </td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic1">
                  <span className="custom-dropdown-toggle">
                    <Image
                      src="/menu-icon.svg"
                      alt="Your Image Alt Text"
                      height={20}
                      width={20}
                    />
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>

          {/* row */}
          <tr>
            <td className="d-flex gap-2 align-items-center py-2">
              <Image
                src="/face-2.svg"
                alt="Your Image Alt Text"
                height={50}
                width={50}
              />
              <h5 className="weight-400 m-0">Jerome Bell</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0 primary-grey-text-color">2020-04-26</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0 primary-grey-text-color">Fever</h5>
            </td>
            <td>
              <button className="d-flex gap-2  align-items-center post-btn p-2">
                <div className="post-bullete"></div>
                <p className="post-btn-text m-0">New Post</p>
              </button>
            </td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic1">
                  <span className="custom-dropdown-toggle">
                    <Image
                      src="/menu-icon.svg"
                      alt="Your Image Alt Text"
                      height={20}
                      width={20}
                    />
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>

          {/* row */}
          <tr>
            <td className="d-flex gap-2 align-items-center py-2">
              <Image
                src="/face-3.svg"
                alt="Your Image Alt Text"
                height={50}
                width={50}
              />
              <h5 className="weight-400 m-0">Jerome Bell</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0 primary-grey-text-color">2020-04-26</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0  primary-grey-text-color">Fever</h5>
            </td>
            <td>
              <button className="d-flex gap-2 align-items-center treatment-btn p-2">
                <div className="treatment-bullete"></div>
                <p className="treatment-btn-text m-0">New Post</p>
              </button>
            </td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic1">
                  <span className="custom-dropdown-toggle">
                    <Image
                      src="/menu-icon.svg"
                      alt="Your Image Alt Text"
                      height={20}
                      width={20}
                    />
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>

          {/* row */}
          <tr>
            <td className="d-flex gap-2 align-items-center py-2">
              <Image
                src="/face-4.svg"
                alt="Your Image Alt Text"
                height={50}
                width={50}
              />
              <h5 className="weight-400 m-0">Jerome Bell</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0 primary-grey-text-color">2020-04-26</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0 primary-grey-text-color">Fever</h5>
            </td>

            <td>
              <button className="d-flex gap-2  align-items-center recovered-btn p-2">
                <div className="recovered-bullete"></div>
                <p className="recovered-btn-text m-0">Recovered</p>
              </button>
            </td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic1">
                  <span className="custom-dropdown-toggle">
                    <Image
                      src="/menu-icon.svg"
                      alt="Your Image Alt Text"
                      height={20}
                      width={20}
                    />
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>

          {/* row */}
          <tr>
            <td className="d-flex gap-2 align-items-center py-2">
              <Image
                src="/face-5.svg"
                alt="Your Image Alt Text"
                height={50}
                width={50}
              />
              <h5 className="weight-400 m-0">Jerome Bell</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0 primary-grey-text-color">2020-04-26</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0 primary-grey-text-color">Fever</h5>
            </td>
            <td>
              <button className="d-flex gap-2 align-items-center treatment-btn p-2">
                <div className="treatment-bullete"></div>
                <p className="treatment-btn-text m-0">New Post</p>
              </button>
            </td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic1">
                  <span className="custom-dropdown-toggle">
                    <Image
                      src="/menu-icon.svg"
                      alt="Your Image Alt Text"
                      height={20}
                      width={20}
                    />
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}

export default PatientData;
