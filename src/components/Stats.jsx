import React from 'react';
import Statistics from "../components/Statistics";
import { Component } from "react";
import data from "../data/data.json";

const Stats = () => (
  <div>
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
  </div>
);

export default Stats;
