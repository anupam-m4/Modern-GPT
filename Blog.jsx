import React from "react";
import "../blog/blog.css";
import { Article } from "../../components";

import blog01 from "../../Asset/blog01.png";
import blog02 from "../../Asset/blog02.png";
import blog03 from "../../Asset/blog03.png";
import blog04 from "../../Asset/blog04.png";
import blog05 from "../../Asset/blog05.png";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article
              imgUrl={blog01}
              date="Jan 26, 2023"
              title=" ChatGPT has continued to dazzle the internet with AI-generated content, morphing from a novel chatbot into a piece of technology that is driving the next era of innovation.  "
            />
          </div>

          <div className="gpt3__blog-container_groupB">
            <Article
              imgUrl={blog02}
              date="Oct 06, 2022"
              title="ChatGPT is a language model developed by OpenAI, designed to respond to text-based queries."
            />
            <Article
              imgUrl={blog03}
              date="Nov 22, 2022"
              title=" ChatGPT is an artificial intelligence  chatbot developed by OpenAI and released in November 2022."
            />
            <Article
              imgUrl={blog04}
              date="Dec 03, 2022"
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog05}
              date="Jan 10, 2023"
              title="The launch of a new technology called GPT-3 made quite a stir."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
