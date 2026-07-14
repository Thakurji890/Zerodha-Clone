import React from 'react';
import { holdings } from '../data/data';

const Holdings = () => {
  return (
    <div>
      <h3 className="mb-4 text-muted">Holdings <span className="fs-5 fw-normal">({holdings.length})</span></h3>
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light text-muted">
              <tr>
                <th className="py-3 px-4">Instrument</th>
                <th className="py-3 px-4 text-end">Qty.</th>
                <th className="py-3 px-4 text-end">Avg. cost</th>
                <th className="py-3 px-4 text-end">LTP</th>
                <th className="py-3 px-4 text-end">Cur. val</th>
                <th className="py-3 px-4 text-end">P&L</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((h, i) => {
                const curVal = h.qty * h.ltp;
                const pl = curVal - (h.qty * h.avgPrice);
                const isProfit = pl >= 0;
                
                return (
                  <tr key={i}>
                    <td className="py-3 px-4 fw-semibold text-primary">{h.instrument}</td>
                    <td className="py-3 px-4 text-end">{h.qty}</td>
                    <td className="py-3 px-4 text-end">{h.avgPrice.toFixed(2)}</td>
                    <td className="py-3 px-4 text-end">{h.ltp.toFixed(2)}</td>
                    <td className="py-3 px-4 text-end">{curVal.toFixed(2)}</td>
                    <td className={`py-3 px-4 text-end ${isProfit ? 'text-success' : 'text-danger'}`}>
                      {isProfit ? '+' : ''}{pl.toFixed(2)} <small className="text-muted">({h.netChange})</small>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
