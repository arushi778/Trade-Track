import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row p-5">
        <div className="col-7 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. How do I activate F&O" />
          <br />
          <a href="">Track your account opening progress</a> &nbsp; &nbsp;
          <a href="">Check your segment activation status</a> &nbsp; &nbsp;
          <a href="">View intraday margin requirements</a> &nbsp; &nbsp;
        </div>
        <div className="col-5 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 20XX</a>
            </li>
            <br/>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
