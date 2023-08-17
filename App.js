import React from "react";
import { Brand, CTA, Navbar } from "./components";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGpt,
  Header,
} from "./containers";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
