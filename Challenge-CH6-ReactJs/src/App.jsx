import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ListCarProvider } from "./CarContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import CarPage from "./components/CarPage";

function App() {
  return (
    <Router>
      <ListCarProvider>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cars" element={<CarPage />} />
          </Routes>
          <Footer />
        </>
      </ListCarProvider>
    </Router>
  );
}

export default App;
