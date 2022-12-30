import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid nav-color">
        <nav className="navbar navbar-expand-lg  bg-body-tertiary">
          <a className="navbar-brand navlinkhead navhover" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <a className="nav-link navlinkactive" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navlink navhover " href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navlink navhover" href="#">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navlink navhover" href="#">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navlink navhover" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
