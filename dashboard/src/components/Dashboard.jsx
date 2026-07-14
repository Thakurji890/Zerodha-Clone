import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Ordes";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
// import Apps from "./Apps"

import { Routes, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <WatchList />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          {/* <Route path="/apps" element={<Apps />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
