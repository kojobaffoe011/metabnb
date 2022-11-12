import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Links from "../pages/Links";
// import ContactPage from "../pages/ContactPage";
import Layout from "../components/Layout";
import LandingPage from "../pages/LandingPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
