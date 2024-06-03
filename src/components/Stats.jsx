import React from 'react';
import Statistics from "./Statistics";
import data from "../data/data.json";

const Stats = () => (
  <div>
    <Statistics title="Upload stats" stats={data} />
  </div>
);

export default Stats;
