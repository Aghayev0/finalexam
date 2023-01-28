import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
const Root = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
    
  );
};

export default Root;
