export const watchlist = [
  { name: "RELIANCE", symbol: "RELIANCE", price: 2950.5, change: "+1.5%" },
  { name: "TCS", symbol: "TCS", price: 3820.0, change: "-0.8%" },
  { name: "INFY", symbol: "INFY", price: 1450.2, change: "+2.1%" },
  { name: "HDFCBANK", symbol: "HDFCBANK", price: 1650.0, change: "+0.5%" },
  { name: "ICICIBANK", symbol: "ICICIBANK", price: 1040.3, change: "-1.2%" },
  { name: "SBIN", symbol: "SBIN", price: 780.0, change: "+1.8%" },
];

export const holdings = [
  { instrument: "RELIANCE", qty: 50, avgPrice: 2400.0, ltp: 2950.5, netChange: "+22.9%" },
  { instrument: "TCS", qty: 20, avgPrice: 3200.0, ltp: 3820.0, netChange: "+19.3%" },
  { instrument: "HDFCBANK", qty: 100, avgPrice: 1500.0, ltp: 1650.0, netChange: "+10.0%" },
];

export const positions = [
  { stock: "INFY", qty: 10, avgPrice: 1420.0, ltp: 1450.2, pnl: "+302.0" },
  { stock: "SBIN", qty: -50, avgPrice: 790.0, ltp: 780.0, pnl: "+500.0" },
];

export const orders = [
  { stock: "ITC", type: "BUY", qty: 100, status: "COMPLETED", date: "2026-07-14" },
  { stock: "WIPRO", type: "SELL", qty: 50, status: "REJECTED", date: "2026-07-14" },
];

export const funds = {
  availableMargin: 125000.0,
  usedMargin: 45000.0,
  totalFunds: 170000.0,
};

export const profile = {
  name: "John Doe",
  email: "john.doe@example.com",
  accountId: "XU12345",
  phone: "+91 9876543210",
};
