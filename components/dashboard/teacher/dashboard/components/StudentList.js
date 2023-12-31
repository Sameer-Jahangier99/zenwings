"use client";
import React from "react";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

// Styles
import "../../../../../styles/dashboard/teacher/dashboard-styles.css";

function StudentList() {
  return (
    <div className="white-background common-border-radius p-3 my-3">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h3 className="weight-500 m-0">Student List</h3>
        </div>
        <div className="position-relative">
          <input
            type="email"
            className="form-control student-search-box-input"
            id="exampleFormControlInput1"
            placeholder="Search"
          />
          <Image
            src="/search-icon.png"
            alt="Your Image Alt Text"
            height={20}
            width={20}
            className="student-search-icon"
          />
        </div>
        <div>
          <button className="d-flex align-items-cetner gap-2 student-filter-btn px-4 py-2">
            <Image
              src="/filter-icon.png"
              alt="Your Image Alt Text"
              height={15}
              width={15}
            />
            <p className="m-0">Filter</p>
          </button>
        </div>
      </div>

      <table className="mt-4 w-100">
        <thead className="studentlist-thead py-4 px-2">
          <tr>
            <th className="py-2 px-1 d-flex align-items-center studentlist-thead-border weight-400 primary-grey-text-color">
              <div className="student-tbl-border-left me-2"></div>
              <span className="ms-1">Name</span>
            </th>
            <th className="studentlist-thead-border px-1 weight-400 primary-grey-text-color">
              <div className="student-tbl-border-left"></div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic1"
                  className="student-list-class-btn primary-grey-text-color"
                >
                  Grade
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" className="d-flex gap-2">
                    Grade 1
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="d-flex gap-2">
                    Grade 2
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="d-flex gap-2">
                    Grade 3
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th className="studentlist-thead-border px-1 weight-400 primary-grey-text-color d-flex align-items-center">
              <div className="student-tbl-border-left"></div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic1"
                  className="student-list-class-btn primary-grey-text-color"
                >
                  Class
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" className="d-flex gap-2">
                    Class 1
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="d-flex gap-2">
                    Class 2
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="d-flex gap-2">
                    Class 3
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th className="studentlist-thead-border px-1 weight-400 primary-grey-text-color">
              <div className="student-tbl-border-left"></div>
              <span className="ms-1">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          <tr>
            <td className="d-flex gap-2 align-items-center py-2">
              <Image
                src="/student1.png"
                alt="Your Image Alt Text"
                height={50}
                width={50}
              />
              <h5 className="weight-400 m-0">Jammal</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0">2</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0">English</h5>
            </td>
            <td>
              <DropdownButton
                id="dropdown-basic-button"
                title="Actions"
                variant="secondary"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </td>
          </tr>

          {/* row */}
          <tr>
            <td className="d-flex gap-2 align-items-center py-2">
              <Image
                src="/student2.png"
                alt="Your Image Alt Text"
                height={50}
                width={50}
              />
              <h5 className="weight-400 m-0">Mohammed</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0">1</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0">English</h5>
            </td>
            <td>
              <DropdownButton
                id="dropdown-basic-button"
                title="Actions"
                variant="secondary"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </td>
          </tr>

          {/* row */}
          <tr>
            <td className="d-flex gap-2 align-items-center py-2">
              <Image
                src="/student3.png"
                alt="Your Image Alt Text"
                height={50}
                width={50}
              />
              <h5 className="weight-400 m-0">Waleed</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0">3</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0">English</h5>
            </td>
            <td>
              <DropdownButton
                id="dropdown-basic-button"
                title="Actions"
                variant="secondary"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </td>
          </tr>

          {/* row */}
          <tr>
            <td className="d-flex gap-2 align-items-center py-2">
              <Image
                src="/student4.png"
                alt="Your Image Alt Text"
                height={50}
                width={50}
              />
              <h5 className="weight-400 m-0">Mansour</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0">3</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0">English</h5>
            </td>
            <td>
              <DropdownButton
                id="dropdown-basic-button"
                title="Actions"
                variant="secondary"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </td>
          </tr>

          {/* row */}
          <tr>
            <td className="d-flex gap-2 align-items-center py-2">
              <Image
                src="/student5.png"
                alt="Your Image Alt Text"
                height={50}
                width={50}
              />
              <h5 className="weight-400 m-0">Ayman</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0">3</h5>
            </td>
            <td>
              <h5 className="weight-400 m-0">English</h5>
            </td>
            <td>
              <DropdownButton
                id="dropdown-basic-button"
                title="Actions"
                variant="secondary"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
