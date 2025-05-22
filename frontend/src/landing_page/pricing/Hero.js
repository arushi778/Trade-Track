import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-botto text-center">
        <h1> Pricing</h1>
        <h3 className="text-muted mt-3 fs-4">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg"></img>
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/intradayTrades.svg"></img>
          <h1 className="fs-3">Intraday & F&O Trading</h1>
          <p className="text-muted">
            Enjoy ultra-low brokerage with a flat fee of ₹20 or 0.03% per
            executed order—whichever is lower—for intraday trading across
            equities, commodities, and currencies.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3">Zero-Cost Direct Mutual Funds</h1>
          <p className="text-muted">
            Invest in direct mutual funds with zero commission and no DP
            (Depository Participant) charges. 100% free, forever.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
