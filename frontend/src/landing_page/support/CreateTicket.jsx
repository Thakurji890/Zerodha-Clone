import React from 'react';
import { FaPlusCircle, FaUser, FaChartBar, FaCreditCard, FaRegCircle, FaCogs } from "react-icons/fa";

const CreateTicket = () => {
  return (
    <div className="container mt-5 p-5 mb-5">
      <div className="row p-5 mt-5 mb-5">
        <h4 className="fs-4 text-muted mb-5">To create a ticket, select a relevant topic</h4>
        
        <div className="col-12 col-md-4 mb-5">
          <h5 className="mb-4">
            <FaPlusCircle className="me-2 fs-4" /> Account Opening
          </h5>
          <div className="d-flex flex-column gap-3 ms-4 mt-2">
            <a href="" className="text-decoration-none text-muted">Getting started</a>
            <a href="" className="text-decoration-none text-muted">Online</a>
            <a href="" className="text-decoration-none text-muted">Offline</a>
            <a href="" className="text-decoration-none text-muted">Charges</a>
            <a href="" className="text-decoration-none text-muted">Company, Partnership and HUF</a>
            <a href="" className="text-decoration-none text-muted">Non Resident Indian (NRI)</a>
          </div>
        </div>
        
        <div className="col-12 col-md-4 mb-5">
          <h5 className="mb-4">
            <FaUser className="me-2 fs-4" /> Your Zerodha Account
          </h5>
          <div className="d-flex flex-column gap-3 ms-4 mt-2">
            <a href="" className="text-decoration-none text-muted">Login credentials</a>
            <a href="" className="text-decoration-none text-muted">Your Profile</a>
            <a href="" className="text-decoration-none text-muted">Account modification and segment addition</a>
            <a href="" className="text-decoration-none text-muted">CMR & DP ID</a>
            <a href="" className="text-decoration-none text-muted">Nomination</a>
            <a href="" className="text-decoration-none text-muted">Transfer and conversion of shares</a>
          </div>
        </div>
        
        <div className="col-12 col-md-4 mb-5">
          <h5 className="mb-4">
            <FaChartBar className="me-2 fs-4" /> Trading and Markets
          </h5>
          <div className="d-flex flex-column gap-3 ms-4 mt-2">
            <a href="" className="text-decoration-none text-muted">Trading FAQs</a>
            <a href="" className="text-decoration-none text-muted">Kite</a>
            <a href="" className="text-decoration-none text-muted">Margins</a>
            <a href="" className="text-decoration-none text-muted">Product and order types</a>
            <a href="" className="text-decoration-none text-muted">Corporate actions</a>
            <a href="" className="text-decoration-none text-muted">Kite features</a>
          </div>
        </div>
        
        <div className="col-12 col-md-4 mb-5">
          <h5 className="mb-4">
            <FaCreditCard className="me-2 fs-4" /> Funds
          </h5>
          <div className="d-flex flex-column gap-3 ms-4 mt-2">
            <a href="" className="text-decoration-none text-muted">Fund withdrawal</a>
            <a href="" className="text-decoration-none text-muted">Adding funds</a>
            <a href="" className="text-decoration-none text-muted">Adding bank accounts</a>
            <a href="" className="text-decoration-none text-muted">eMandates</a>
          </div>
        </div>
        
        <div className="col-12 col-md-4 mb-5">
          <h5 className="mb-4">
            <FaCogs className="me-2 fs-4" /> Console
          </h5>
          <div className="d-flex flex-column gap-3 ms-4 mt-2">
            <a href="" className="text-decoration-none text-muted">IPO</a>
            <a href="" className="text-decoration-none text-muted">Portfolio</a>
            <a href="" className="text-decoration-none text-muted">Funds statement</a>
            <a href="" className="text-decoration-none text-muted">Profile</a>
            <a href="" className="text-decoration-none text-muted">Reports</a>
            <a href="" className="text-decoration-none text-muted">Referral program</a>
          </div>
        </div>
        
        <div className="col-12 col-md-4 mb-5">
          <h5 className="mb-4">
            <FaRegCircle className="me-2 fs-4" /> Coin
          </h5>
          <div className="d-flex flex-column gap-3 ms-4 mt-2">
            <a href="" className="text-decoration-none text-muted">Understanding mutual funds and Coin</a>
            <a href="" className="text-decoration-none text-muted">Coin app</a>
            <a href="" className="text-decoration-none text-muted">Coin web</a>
            <a href="" className="text-decoration-none text-muted">Transactions and reports</a>
            <a href="" className="text-decoration-none text-muted">National Pension Scheme (NPS)</a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CreateTicket;
