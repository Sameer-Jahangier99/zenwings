"use client";
import { Dropdown, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Image from "next/image";

//  Styles
import "../styles/common/layout/header.css";

// Shared
import { getCurrentDateFormatted } from "../shared/index";

function Header() {
  const pathname = usePathname();

  const handleConditionalLoggedName = () => {
    if (pathname.includes("/doctor")) return "Amina";
    else if (pathname.includes("/parent")) return "Maryam";
    else return "Amir";
  };

  const handleConditionalLoggedImage = () => {
    if (pathname.includes("/doctor")) return "/avatar.png";
    else if (pathname.includes("/parent")) return "/maryam.svg" ;
    else return "/chat-1.png";
  };

  return (
    <Navbar key="md" expand="md" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <h2 className="weight-600 black-color">Dashboard</h2>
          <p className="weight-400 light-black">{getCurrentDateFormatted()}</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <div className="mb-3 position-relative">
                <input
                  type="email"
                  className="form-control search-box-input"
                  id="exampleFormControlInput1"
                  placeholder="Search"
                />
                <Image
                  src="/search-icon.png"
                  alt="Your Image Alt Text"
                  height={20}
                  width={20}
                  className="search-icon"
                />
              </div>
            </Nav>
            <div className="d-flex align-items-center gap-3">
              <div className="notification-icon-container d-flex align-items-center justify-content-center p-3">
                <Image
                  src="/notification.png"
                  alt="Your Image Alt Text"
                  height={20}
                  width={20}
                />
              </div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="d-flex align-items-center"
                >
                  <div className="d-flex gap-3 align-items-center">
                    <Image
                      src={handleConditionalLoggedImage()}
                      alt="Your Image Alt Text"
                      height={40}
                      width={40}
                    />
                    <h5 className="weight-500 m-0">
                      {handleConditionalLoggedName()}
                    </h5>
                  </div>
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
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
