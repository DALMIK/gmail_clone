import React, { useState } from "react";
import {Box , Button, styled, List, ListItem } from '@mui/material';

import { CreateOutlined } from "@mui/icons-material";

import { SIDEBAR_DATA } from "../Config/SideBar.Config";
import ComposeMail from "./ComposeMail";

const ComposeButton = styled(Button)({
    background :'#c2e7ff',
    color:'#001d35',
    padding : 20,
    borderRadius : 16,
    marginLeft : 5,
    minWidth : '160px',
    textTransform : 'none',
    fontWeight : 'bold',
    fontSize : 16,
    '& > svg' : {
        fontSize : 28
    }
})

const Container = styled(Box)({
    padding : 8,
    '& > ul' : {
        fontSize : 16,
        fontWeight : 500,
        cursor : 'pointer',
    },
    '& > ul > li > svg' : {
        margin:"0 25px 0 10px"
    }
    
})

const SideBarContent = () => {

    const [openDialog, setOpendiallog] = useState(false);


    const toggledialog = ()=>{
        setOpendiallog(prevState => !prevState);
    }







  return (
    <>
      <Container>
        <Box  onClick={toggledialog}>
          <ComposeButton>
            <CreateOutlined style={{ marginRight: "10px" }} /> Compose
          </ComposeButton>
        </Box>
        <List>
          {SIDEBAR_DATA.map((data) => {
            return <ListItem><data.icon fontSize="small" />{data.title}</ListItem>;
          })}
        </List>
        <ComposeMail openDialog={openDialog} />
      </Container>
    </>
  );
};

export default SideBarContent;
