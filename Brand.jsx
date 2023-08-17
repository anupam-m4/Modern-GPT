import React from "react";
import google from "../../Asset/google.png";
import slack from "../../Asset/slack.png";
import atlassian from "../../Asset/atlassian.png";
import dropbox from "../../Asset/dropbox.png";
import shopify from "../../Asset/shopify.png";

import "./brand.css";

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
