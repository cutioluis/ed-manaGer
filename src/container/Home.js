import React from "react";
import "../styles/App.scss";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

const App = () => {
  return (
    <div>
      <div>
        <Navigation></Navigation>
        <Header></Header>
      </div>
    </div>
  );
};

export default App;
