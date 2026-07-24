import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './TopBar';
import Menu from './Menu';
import WatchList from './WatchList';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Profile from './Profile';

const Home = () => {
  return (
    <div className="d-flex bg-light vh-100 overflow-hidden">
      <style>
        {`
          .watchlist-wrapper { width: 350px !important; flex-shrink: 0; }
          @media (max-width: 991px) {
            .watchlist-wrapper { width: 100% !important; height: 40vh; flex-shrink: 1; border-right: none !important; border-bottom: 1px solid #dee2e6; }
          }
        `}
      </style>

      {/* Left Sidebar (Desktop Navigation) */}
      <div className="border-end bg-white d-none d-xl-block" style={{ width: "250px", flexShrink: 0 }}>
        <Menu />
      </div>

      {/* Offcanvas (Mobile Navigation) */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebarOffcanvas" aria-labelledby="sidebarOffcanvasLabel">
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title text-primary fw-bold" id="sidebarOffcanvasLabel">Kite</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-0">
          <Menu />
        </div>
      </div>

      <div className="d-flex flex-column flex-grow-1 overflow-hidden">
        {/* Top Navbar */}
        <TopBar />

        {/* Main Content Area */}
        <div className="d-flex flex-column flex-lg-row flex-grow-1 overflow-hidden">
          
          {/* Watchlist */}
          <div className="border-end bg-white overflow-auto shadow-sm watchlist-wrapper">
             <WatchList />
          </div>

          {/* Dynamic Content (Dashboard, Orders, etc) */}
          <div className="flex-grow-1 p-3 p-md-4 overflow-auto bg-light w-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
