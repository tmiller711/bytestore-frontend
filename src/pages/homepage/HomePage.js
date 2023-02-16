import React from "react";
import "./homepage.css"

const HomePage = () => {

  return (
    <div className="homepage">
      <div className="call-to-action">
        <h2>Start securely storing your files today</h2>
        <button className="get-started">Get Started</button>
      </div>
      <div className="about-us">
        <p>ByteStore is a service to store and share files</p>
        <p>Our cloud platform allows you to securely store an share files</p>
      </div>
      <div className="tiers-info">
        <div className="tier">
          <p>Tier 0</p>
          <p>Our free tier which provides: 1 GB storage</p>
          <button>Free</button>
        </div>
        <div className="tier">
          <p>Tier 1</p>
          <p>Our free tier which provides: 5 GB storage</p>
          <button>$5/m</button>
        </div>
        <div className="tier">
          <p>Tier 2</p>
          <p>Our most premium tier which provides: 10 GB storage</p>
          <button>$7/m</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage