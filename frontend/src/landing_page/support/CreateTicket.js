import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          To create a ticket, select a relevant topic
        </h1>
      </div>
      <div className="row">
        <div className="col p-5 mt-2 ">
        <h4 className="fs-4">
          <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
        </h4>
        <a href="">Online Account Opening</a>
        <br />
        <a href="">Offline Account Opening</a>
        <br />
        <a href="">Company, Partnership and HUF Account</a>
        <br />
        <a href="">Opening</a>
        <br />
        <a href="">NRI Account Opening</a>
        <br />
        <a href="">Charges at TradeTrack</a>
        <br />
        <a href="">TradeTrack IDFC FIRST Bank 3-in-1 Account</a>
        <br />
        <a href="">Getting Started</a>
        <br />
      </div>
      <div className="col p-5 mt-2">
        <h4 className=""> <i class="fa fa-user"></i> Your TradeTrack Account</h4>
        <a href="">Your Profile</a>
        <br />
        <a href="">Account Modification</a>
        <br />
        <a href="">
          Client Master Report (CMR) and Depository Participant (DP)
        </a>
        <br />
        <a href="">Nomination</a>
        <br />
        <a href="">Transfer and Conversion of Securities</a>
        <br />
      </div>
      </div>
    </div>
  );
}

export default CreateTicket;
