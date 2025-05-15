import React from "react";

function LeftFunction({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6">
          <img src={imageUrl} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} className="learnMore">
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/AppStoreBadge.svg" className="learnMore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftFunction;
