import React, { useState } from "react";
import Header from "../Componetns/Header";
import Sidebar from "../Componetns/Sidebar";

const Main = () => {


  const [openDrawer, setOpenDrawer] = useState(true);


  const toggleDrawer = ()=>{
    setOpenDrawer(prevState => !prevState);
  }



  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} />
    </>
  );
};

export default Main;
