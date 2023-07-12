import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home/home.jsx";
import Cart from "./pages/cart/cart.jsx";
import { StoreContextProvider } from "./context/store-context";

function App() {
  return (
    <div className="container">
      <StoreContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </StoreContextProvider>
    </div>
  );
}

export default App;
