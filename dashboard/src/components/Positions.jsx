import React from 'react';
import { positions } from '../data/data';

const Positions = () => {
  return (
    <div>
      <h3 className="mb-4 text-muted">Positions <span className="fs-5 fw-normal">({positions.length})</span></h3>
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light text-muted">
              <tr>
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">Instrument</th>
                <th className="py-3 px-4 text-end">Qty.</th>
                <th className="py-3 px-4 text-end">Avg. cost</th>
                <th className="py-3 px-4 text-end">LTP</th>
                <th className="py-3 px-4 text-end">P&L</th>
              </tr>
            </thead>
            <tbody>
              {positions.map((p, i) => {
                const isProfit = p.pnl.startsWith('+');
                return (
                  <tr key={i}>
                    <td className="py-3 px-4"><span className="badge bg-light text-dark border">CNC</span></td>
                    <td className="py-3 px-4 fw-semibold text-primary">{p.stock}</td>
                    <td className="py-3 px-4 text-end">{p.qty}</td>
                    <td className="py-3 px-4 text-end">{p.avgPrice.toFixed(2)}</td>
                    <td className="py-3 px-4 text-end">{p.ltp.toFixed(2)}</td>
                    <td className={`py-3 px-4 text-end fw-semibold ${isProfit ? 'text-success' : 'text-danger'}`}>
                      {p.pnl}
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

export default Positions;
