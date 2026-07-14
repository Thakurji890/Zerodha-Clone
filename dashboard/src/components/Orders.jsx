import React from 'react';
import { orders } from '../data/data';

const Orders = () => {
  return (
    <div>
      <h3 className="mb-4 text-muted">Orders</h3>
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Instrument</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Qty.</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="py-3 px-4">{order.date}</td>
                  <td className="py-3 px-4 fw-semibold text-primary">{order.stock}</td>
                  <td className="py-3 px-4">
                    <span className={`badge ${order.type === 'BUY' ? 'bg-primary' : 'bg-danger'}`}>{order.type}</span>
                  </td>
                  <td className="py-3 px-4">{order.qty}</td>
                  <td className="py-3 px-4">
                    <span className={`badge ${order.status === 'COMPLETED' ? 'bg-success' : 'bg-secondary'}`}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {orders.length === 0 && <div className="p-4 text-center text-muted">No orders yet.</div>}
        </div>
      </div>
    </div>
  );
};

export default Orders;
