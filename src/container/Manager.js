import React from "react";
import Players from "../components/Manager/Players";
import { Provider } from "react-redux";
import store from "../redux/store";
import PartySelected from "../components/Manager/PartySelected";

const Manager = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Ed Manager</h1>
        <Players />
        <PartySelected />
      </div>
    </Provider>
  );
};

export default Manager;
