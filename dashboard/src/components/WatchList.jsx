import React, { useState } from 'react';
import { watchlist } from '../data/data';

const WatchList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredWatchlist = watchlist.filter(stock => 
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex flex-column h-100">
      <div className="p-3 border-bottom sticky-top bg-white">
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search text-muted"></i>
          </span>
          <input 
            type="text" 
            className="form-control border-start-0 ps-0 shadow-none" 
            placeholder="Search eg: infy bse, nifty fut" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <ul className="list-group list-group-flush flex-grow-1">
        {filteredWatchlist.map((stock, index) => (
          <li 
            key={stock.symbol} 
            className="list-group-item d-flex justify-content-between align-items-center p-3"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ cursor: "pointer", transition: "background-color 0.2s" }}
          >
            <div>
              <span className="fw-bold d-block" style={{ fontSize: "14px", color: stock.change.startsWith('-') ? '#e74c3c' : '#27ae60' }}>
                {stock.name}
              </span>
              <small className="text-muted">{stock.symbol}</small>
            </div>
            
            {hoveredIndex === index ? (
              <div className="d-flex gap-2">
                <button className="btn btn-sm btn-primary fw-bold px-3">B</button>
                <button className="btn btn-sm btn-danger fw-bold px-3">S</button>
                <button className="btn btn-sm btn-outline-secondary"><i className="bi bi-trash"></i></button>
              </div>
            ) : (
              <div className="text-end">
                <span className="d-block fw-bold text-dark" style={{ fontSize: "14px" }}>{stock.price}</span>
                <small className="text-muted">{stock.change}</small>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
