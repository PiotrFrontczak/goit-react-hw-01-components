import Profile from "./Profile";
import user from "../data/user.json";
import React from "react";
import Stats from "../components/Stats";

function App() {
  return (
    <>
      
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
}

export default App;