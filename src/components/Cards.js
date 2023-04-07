import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Team Members</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/i2.jpg"
              text="Kevin Chou is a 5X founder with deep crypto experience. He is the co-founder of Rally Network (~$3B USD market cap)."
              label="co-founder"
              path="/blog"
            ></CardItem>
             <CardItem
              src="images/i2.jpg"
              text="Kevin Chou is a 5X founder with deep crypto experience. He is the co-founder of Rally Network (~$3B USD market cap)."
              label="co-founder"
              path="/blog"
            ></CardItem>
             <CardItem
              src="images/i2.jpg"
              text="Kevin Chou is a 5X founder with deep crypto experience. He is the co-founder of Rally Network (~$3B USD market cap)."
              label="co-founder"
              path="/blog"
            ></CardItem>
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/i1.jpg"
              text="Kevin Chou is a 5X founder with deep crypto experience. He is the co-founder of Rally Network (~$3B USD market cap)."
              label="co-founder"
              path="/blog"
            ></CardItem>
             <CardItem
              src="images/i1.jpg"
              text="Kevin Chou is a 5X founder with deep crypto experience. He is the co-founder of Rally Network (~$3B USD market cap)."
              label="co-founder"
              path="/blog"
            ></CardItem>
             <CardItem
              src="images/i1.jpg"
              text="Kevin Chou is a 5X founder with deep crypto experience. He is the co-founder of Rally Network (~$3B USD market cap)."
              label="co-founder"
              path="/blog"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
