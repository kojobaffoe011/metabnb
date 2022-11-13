import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import LandingPage from "../pages/LandingPage";
import PlaceToStay from "../pages/PlaceToStay";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/place-to-stay" element={<PlaceToStay />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
