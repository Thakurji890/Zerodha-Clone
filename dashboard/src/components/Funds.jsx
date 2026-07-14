import React from 'react';
import { funds } from '../data/data';

const Funds = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-muted mb-0">Funds</h3>
        <button className="btn btn-success fw-bold px-4"><i className="bi bi-plus-circle me-2"></i>Add funds</button>
      </div>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3 border-0">
              <h5 className="mb-0 text-muted"><i className="bi bi-circle-fill text-primary me-2 fs-6"></i>Equity</h5>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-6">
                  <p className="text-muted mb-1">Available margin</p>
                  <h2 className="text-primary mb-0">₹{funds.availableMargin.toLocaleString()}</h2>
                </div>
                <div className="col-6 text-end">
                  <p className="text-muted mb-1">Used margin</p>
                  <h4 className="text-dark mb-0">₹{funds.usedMargin.toLocaleString()}</h4>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between mt-3">
                <span className="text-muted">Opening balance</span>
                <span className="fw-semibold">₹{funds.totalFunds.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white py-3 border-0">
              <h5 className="mb-0 text-muted"><i className="bi bi-circle-fill text-info me-2 fs-6"></i>Commodity</h5>
            </div>
            <div className="card-body d-flex flex-column align-items-center justify-content-center text-muted">
              <p className="mb-3">You don't have a commodity account.</p>
              <button className="btn btn-outline-primary btn-sm">Open Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
