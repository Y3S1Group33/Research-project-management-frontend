import React, { useEffect, useState } from "react";
import "./navBar.css"

function NavBar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            RPM
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

          {/* panel member */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/panelMember/dashboard">
                  Dashboard
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/panelMember/chat">
                  Teams
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/panelMember/topics">
                 Topic Evaluation
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/panelMember/presentation">
                  Presentation Evaluation
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/panelMember/reference">
                  References
                </a>
              </li>

              {/*<li className="nav-item">*/}
              {/*  <a className="nav-link" href="/reservations">*/}
              {/*    Reservations*/}
              {/*  </a>*/}
              {/*</li>*/}

              {/* {(loggedUser.role == "Admin") && (
              <li className="nav-item">
                <a className="nav-link" href="/admin">
                  Admin panel
                </a>
              </li>
              )}
              
              {(loggedUser !== null) && (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              )} */}

            </ul>

            
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                
                <span className="nav-values"> 5 </span>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
                <a className="dropdown-item" href="/logout">
                  Logout
                </a>
              </div>
              
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
