import React from 'react';
import Statistics from "./Statistics";

const Stats = () => (
  <div>
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
  </div>
);

export default Stats;
