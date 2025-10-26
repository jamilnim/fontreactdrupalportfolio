import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import "./Root.css"

function Root() {
  return (
    <div>
    <Header/>
    <div className='mainbody'>
    <main > 
      <Outlet/>
    </main>
    </div>
    <Footer/>
  </div>
  );
}

export default Root;
