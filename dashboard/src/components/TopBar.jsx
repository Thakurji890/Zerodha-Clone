const TopBar = () => {
  return (
    <header className="py-3 mb-3 border-bottom bg-white sticky-top">
      <div className="container-fluid d-grid gap-3 align-items-center" style={{ gridTemplateColumns: "1fr 2fr" }}>

        <div className="d-flex align-items-center">
          {/* Logo placeholder if needed, or breadcrumbs */}
          <span className="fs-5 fw-semibold text-muted">Dashboard</span>
        </div>

        <div className="d-flex align-items-center justify-content-end">
          <form className="w-50 me-3" role="search">
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0"><i className="bi bi-search text-muted"></i></span>
              <input type="search" className="form-control bg-light border-start-0" placeholder="Search eg: infy bse, nifty fut, nifty weekly" aria-label="Search" />
            </div>
          </form>

          <div className="d-flex align-items-center gap-3">
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
