import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top ">
        <h1 className=" text-center ">People</h1>
      </div>
      <div className=" row p-3 text-muted">
        <div className="col-6 p-5 text-center">
          <img className="Arushi" src="media/images/Arushi.jpg" />
          <h4 mt-5>Arushi Gupta</h4>
          <h6>Founder, Developer</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Arushi built this project to bridge the gap between complex
            financial tools and everyday users. With a strong grasp of both
            frontend and backend development, she focused on creating a
            user-friendly, secure, and responsive platform.
          </p>
          <p>
            She took charge of the entire development lifecycle—from designing
            clean interfaces to implementing scalable APIs—while ensuring a
            smooth user experience through continuous testing and refinement.
          </p>
          <p>
            Outside of coding, Arushi enjoys reading fast-paced thriller novels,
            which sharpen her attention to detail and problem-solving mindset.
          </p>
          <p>
            Connect on <a href='https://www.linkedin.com/in/arushi-gupta1604'>linkedin</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
