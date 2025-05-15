import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          Started with simplifying investments.
          <br />
          Now, building smarter tech to empower every investor.
        </h1>
        </div>
        <div className=" aboutPara row p-5 mt-5 border-top text-muted">
            <div className="col-6 p-5">
              <p>
                We launched this platform to make investing simpler, more
                transparent, and accessible to everyone — especially those new
                to the markets. High costs, complex tools, and lack of guidance
                shouldn't hold anyone back.
              </p>
              <p>
                Inspired by what worked, we’ve focused on keeping things clear —
                no hidden charges, no distractions — just powerful tools to help
                you invest with confidence.
              </p>
              <p>
                Today, we're growing steadily with a community of users who
                trust us to deliver a smooth, reliable investing experience.
              </p>
            </div>
            <div className="col-6 p-5">
              <p>
                We’re also building a community around financial learning —
                through open, beginner-friendly resources and engaging content
                that help users make informed investment decisions.
              </p>
              <p>
                Our initiative, <a href="">CapitalSpring</a>
                , supports early-stage fintech startups that share our vision of
                making finance more accessible and inclusive across India.
              </p>
              <p>
                We're constantly working on new ideas and features. Stay updated
                with our latest developments on our blog or check out what
                others are saying about us.
              </p>
            </div>
        </div>
      </div>
  );
}

export default Hero;
