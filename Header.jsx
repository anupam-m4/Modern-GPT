import React from "react";
import "../header/header.css";
import people from "../../Asset/people.png";
import ai from "../../Asset/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          ChatGPT has continued to dazzle the internet with AI-generated
          content, morphing from a novel chatbot into a piece of technology that
          is driving the next era of innovation.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address.." />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Header;
