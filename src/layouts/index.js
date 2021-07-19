import React from "react";

import Header from "../components/ui/header";
import Nav from "../components/ui/nav";

import "./styles.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Nav />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
