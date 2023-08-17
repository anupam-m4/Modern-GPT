import React from "react";
import "../possibility/possibility.css";
import PossibilityImage from "../../Asset/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={PossibilityImage} alt="possibility" srcset="" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Using GPT-3, Viable identifies themes, emotions, and sentiment from
          surveys, help desk tickets, live chat logs, reviews, and more. It then
          pulls insights from this aggregated feedback and provides a summary in
          seconds.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
