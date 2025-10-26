import React from "react";

import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import "./Root.css";
import Header from "../components/Header";

function Root() {
  return (
    <div>
      <Header />
      <div className="mainbody">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Root;
