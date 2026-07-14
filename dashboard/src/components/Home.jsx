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
      {/* Left Sidebar (Navigation Menu) */}
      <div className="border-end bg-white" style={{ width: "250px", flexShrink: 0 }}>
        <Menu />
      </div>

      <div className="d-flex flex-column flex-grow-1 overflow-hidden">
        {/* Top Navbar */}
        <TopBar />

        {/* Main Content Area */}
        <div className="d-flex flex-grow-1 overflow-hidden">
          
          {/* Watchlist (Fixed on the left side of the content area) */}
          <div className="border-end bg-white overflow-auto shadow-sm" style={{ width: "350px", flexShrink: 0 }}>
             <WatchList />
          </div>

          {/* Dynamic Content (Dashboard, Orders, etc) */}
          <div className="flex-grow-1 p-4 overflow-auto bg-light">
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
