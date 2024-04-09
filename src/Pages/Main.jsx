import React, { useState } from "react";
import Header from "../Componetns/Header";
import Sidebar from "../Componetns/Sidebar";
import Content from "../Componetns/Content";

const Main = () => {


  const [openDrawer, setOpenDrawer] = useState(true);


  const toggleDrawer = ()=>{
    setOpenDrawer(prevState => !prevState);
  }



  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} />
      <Content setMarginLeft={openDrawer ? "276px" : "10px"}/> 
    </>
  );
};

export default Main;
