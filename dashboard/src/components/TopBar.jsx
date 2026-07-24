import React from "react";

const TopBar = () => {
  return (
    <header className="py-2 py-md-3 mb-0 mb-md-3 border-bottom bg-white sticky-top shadow-sm">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center gap-2">
        
        <div className="d-flex align-items-center me-auto me-md-0">
          {/* Hamburger Menu for Mobile */}
          <button className="btn btn-light d-xl-none me-2 p-1 px-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas">
            <i className="bi bi-list fs-4"></i>
          </button>
          <span className="fs-5 fw-semibold text-muted d-none d-sm-block">Dashboard</span>
        </div>

        <div className="d-flex align-items-center flex-grow-1 justify-content-end">
          <form className="w-100 me-2 me-md-3" style={{ maxWidth: "400px" }} role="search">
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 px-2 px-md-3"><i className="bi bi-search text-muted"></i></span>
              <input type="search" className="form-control bg-light border-start-0 ps-0" placeholder="Search eg: infy bse" aria-label="Search" />
            </div>
          </form>

          <div className="d-flex align-items-center gap-2 gap-md-3 flex-shrink-0">
            <a href="#" className="text-dark text-decoration-none">
              <i className="bi bi-bell fs-5"></i>
            </a>
            <div className="dropdown">
              <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person-circle fs-4 text-primary"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownUser">
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default TopBar;
