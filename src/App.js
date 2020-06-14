import React from "react";
import List from "./containers/List";
import Search from "./components/search/brand";
import "./global.css";
import "./components/styles/card.css";
import "./components/styles/search.css";
import Brand from "./components/search/brand";

const App = () => {
  return (
    <>
      <Brand />
      <hr></hr>
      <main className="container">
        <List />
      </main>
    </>
  );
};

export default App;
