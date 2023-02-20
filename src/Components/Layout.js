import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className="App">
      <Header title="React Protfolio" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
