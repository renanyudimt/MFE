import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/MarketingApp/Header";
import { BrowserRouter } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
