const Hero = () => {
  return (
    <div className="container text-center mt-5 mb-5 p-5">
      <div className="row mb-5 mt-5">
        <h1 className="fs-1 mb-3">Charges</h1>
        <p className="fs-5 text-muted">
          List of all charges and taxes
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-md-4 p-4">
          <img src="image/pricingEquity.svg" alt="Equity delivery" className="img-fluid mb-4" />
          <h2 className="fs-4 mb-3">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-4">
          <img src="image/intradayTrades.svg" alt="Intraday trades" className="img-fluid mb-4" />
          <h2 className="fs-4 mb-3">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-4">
          <img src="image/pricingMF.svg" alt="Mutual funds" className="img-fluid mb-4" />
          <h2 className="fs-4 mb-3">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
