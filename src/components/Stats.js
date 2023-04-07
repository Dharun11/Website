import React from "react";
import stats from "./stats.css";
function Stats() {
  return (
    <div className="stats">
      <h1>Metrics</h1>
      <div className="stats__container">
        <div className="stats__wrapper">
          <ul className="stats__items">
            530,953
            <h6>Total users in App</h6>
          </ul>
          <ul className="stats__items">
            17,032,144 $T
            <h6>Total value locked on platform</h6>
          </ul>
          <ul className="stats__items">
            4,874,114
            <h6>Total gold likes given</h6>
          </ul>
          <ul className="stats__items">34,268,371.66
          <h6>Total rewards paid out</h6></ul>
        </div>
      </div>
    </div>
  );
}
export default Stats;
