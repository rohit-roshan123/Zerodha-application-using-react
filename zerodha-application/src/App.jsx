import "./App.css";

import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Order from "./components/Orders/order";
import { Routes, Route } from "react-router-dom";
import Holdings from "./components/Holdings/Holdings";
import Positions from "./components/Positions/Positions";
import Bids from "./components/Bids/Bids";
import Funds from "./components/Funds/Funds";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Main />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/bids" element={<Bids />} />
          <Route path="/funds" element={<Funds />} />
        </Routes>
    </>
  );
}

export default App;
