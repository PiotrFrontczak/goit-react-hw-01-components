import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import Stats from "./components/Stats.jsx";
import FriendList from "./components/FriendList.jsx";
import friends from "./data/friends.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Stats />
    <FriendList friends={friends} />
  </React.StrictMode>,
);