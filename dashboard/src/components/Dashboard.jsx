import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h3 className="mb-4 text-muted">Hi, John!</h3>
      
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="text-muted fs-6 mb-3"><i className="bi bi-pie-chart-fill me-2 text-primary"></i> Equity</h5>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <span className="fs-3 fw-bold">₹1,45,230.00</span>
                  <p className="text-muted mb-0 small">Margin available</p>
                </div>
                <div className="text-end">
                  <p className="text-muted mb-0 small">Margins used</p>
                  <span className="fw-semibold">₹45,000.00</span>
                </div>
              </div>
              <hr />
              <div className="text-center">
                <a href="/funds" className="text-decoration-none">View statement</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-3">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h5 className="text-muted fs-6 mb-3"><i className="bi bi-briefcase-fill me-2 text-primary"></i> Holdings (3)</h5>
              <div className="row text-center mb-4 mt-4">
                <div className="col-6 border-end">
                  <h4 className="text-success mb-1">+₹14,500.50</h4>
                  <small className="text-muted">P&L</small>
                </div>
                <div className="col-6">
                  <h4 className="text-dark mb-1">₹1,15,400.00</h4>
                  <small className="text-muted">Current Value</small>
                </div>
              </div>
              <hr />
              <div className="text-center">
                <a href="/holdings" className="text-decoration-none">View holdings</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body p-5 text-center bg-light text-muted">
          <i className="bi bi-bar-chart-line fs-1 d-block mb-3"></i>
          <h5>Market Overview</h5>
          <p>Chart functionality will be implemented here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
