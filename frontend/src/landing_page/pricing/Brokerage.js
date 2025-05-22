import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="">
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul>
            <ul className="text-muted ">
              <li>
                Call & Trade / RMS Auto-Square Off: ₹50 + GST per executed
                order.
              </li>
              <li>
                Contract Notes: Digital contract notes are emailed free of
                charge.
              </li>
              <li>
                Physical Contract Notes: ₹20 per contract note, plus applicable
                courier charges.
              </li>
              <li>
                NRI (Non-PIS) Accounts: 0.5% or ₹100 per executed equity order,
                whichever is lower.
              </li>
              <li>
                NRI (PIS) Accounts: 0.5% or ₹200 per executed equity order,
                whichever is lower.
              </li>
              <li>
                Debit Balance Charges: If your account is in debit, a flat ₹40
                will be charged per executed order.
              </li>
            </ul>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="">
            <h3 className="fs-5">List of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
