import React from "react";
import MarketPage from "./pages/marketPage";
import LandingPage from "./pages/landingPage";

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtecteRoute from "./reuse components/protecteRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route element={<ProtecteRoute />}>
          <Route path="/user" element={<MarketPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
