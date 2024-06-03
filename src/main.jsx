import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import Stats from "./components/Stats.jsx";
import FriendList from "./components/FriendList.jsx";
import friends from "./data/friends.json";
import TransactionHistory from "./components/TransactionHistory.jsx";
import transactions from "./data/transactions.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Stats />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </React.StrictMode>,
);