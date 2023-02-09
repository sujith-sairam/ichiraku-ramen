import React from "react";

//pages
import MarketPage from "./pages/marketPage";
import LandingPage from "./pages/landingPage";
import FormPage from "./reuse components/formPage";

//routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtecteRoute from "./reuse components/protecteRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route element={<ProtecteRoute />}>
          <Route path="/menu" element={<MarketPage />} />
          <Route path="/login" element={<FormPage flag={0} />} />
          <Route path="/signup" element={<FormPage flag={1} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
