import React from 'react';

// to be imported only on pages we want a sidebar nav


function Sidebar({
}) {
    return (
        <div>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" style={{ boxSizing: "border-box"}}>
            <div className="position-sticky pt-3 sidebar-sticky">
              <div className="px-3">
                <h5>Hello.</h5>
                <hr />
              </div>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active text-right" aria-current="page" href="/#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>

            </div>
          </nav>

        </div>
    )
}

export default Sidebar;