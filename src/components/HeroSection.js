import React from "react";
import "../app.css";
import { Button } from "./Button";
import "./herosection.css";

function HeroSection() {
  return (
    <div className="body">
      <div className="hero-container">
        <h1>Own your token -</h1>
        <p>powered social network</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            claim my Bitc
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
