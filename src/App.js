import React from "react";
import "./App.css";
import Shop from "./component/Shop/Shop";
import Review from "./component/Review/Review";
import NotFound from "./component/NotFound/NotFound";
import Inventory from "./component/Inventory/Inventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import ProductDetail from "./component/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="/orderReview" element={<Review />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/product/:productkey" element={<ProductDetail />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
