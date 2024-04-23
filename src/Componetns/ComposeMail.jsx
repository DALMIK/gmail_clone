import React, { useState } from 'react'
import {Dialog, Box, Typography, InputBase, TextField, Button} from '@mui/material'
import styled from '@emotion/styled'
import { Close, DeleteOutline } from '@mui/icons-material'
import useApi from '../hooks/useApi'
import { API_URLS } from '../services/apiUrls'


const dialogStyle = {
  height : "80%",
  width : "80%",
  maxWidth : "100%",
  maxWidth : "100%",
  boxShadow : "none",
  borderRadius : "10px"
}

const Header = styled(Box)({
  padding : "12px",
  display : "flex",
  justifyContent : "space-between",
  background : "#f2f6fc",
  '& > p' : {
      fontSize : "15px",
      fontWeight : 600,
      filter: "drop-shadow(2px 3px 7px black)"

  }
})

const RecipientWrapper = styled(Box)({
  display : "flex",
  flexDirection : "column",
  padding : "0 15px",
  '& > div' : {
    fontSize : 14,
    borderBottom : "1px solid #F1F1F1",
    marginTop : 10
  }
})
const Footer =  styled(Box)({
  display : "flex",
  justifyContent : "space-between",
  padding : "10px 15px 1px 15px",
  alignItems : "center"
})
const SendButton = styled(Button)({
  background : "blue",
  color : "white",
  padding : "7px 20px",
  borderRadius : "28px",
  fontWeight : 500,
  textTransform : "none",
  cursor : "pointer"
})







const ComposeMail = ({openDialog, setOpendiallog}) => {


  const [data, setData] = useState({});

  const sentEmailService = useApi(API_URLS.saveSentEmail);



// console.log(process.env.HOST,"dmcbdskhh")

  // const Config = {
  //   Host : "smtp.elasticemail.com",
  //   Username : "dalmikchad1234@yopmail.com",
  //   Password : "1BD511683FCE773DCDB42CE330CE939DF6F0",
  //   Port : 2525,
  // }


  const closeComposeMail = (e)=>{
    e.preventDefault();
    setOpendiallog(prevState => !prevState);
  }

  const onValueChange = (e)=>{
    // console.log(e.target.value, e.target.name);
    setData({...data, [e.target.name] : e.target.value});
    console.log(data);

  }

  const sendMail= (e)=>{
    e.preventDefault();
    
    if(window.email){
      window.email.send({
        Host : "smtp.elasticemail.com",
        Username : "dalmikchad1234@yopmail.com",
        Password : "1BD511683FCE773DCDB42CE330CE939DF6F0",
        Port : 2525,
        To : 'dalmik081219998@gmail.com',
        From : "dalmik081219998@gmail.com",
        Subject : "This is the subject hiiiiiiii done nicely done",
        Body : "And this is the body"
        }).then(
          message => alert(message,"manish")
        ).catch((err)=>{
          console.log(err,"dalmik")
        })
    }

    // const payload = {
    //   To : 'dalmik081219998@gmail.com',
    //   From : "dalmik081219998@gmail.com",
    //   Subject : "This is the subject",
    //   Body : "And this is the body",
    //   Date : "now"
    // }

    const response = sentEmailService.call(data);

    if(!response.error){
      setOpendiallog(false);
      setData({});
    }else{
      console.log("we got the error ", response.error);
    }
    
    setOpendiallog(false);

  }




  return (
    <Dialog
    open={openDialog}
    onClose={false}
    PaperProps={{sx : dialogStyle}}
    >
      <Header>
        <Typography>New Message</Typography>
        <Close  fontSize='small' cursor="pointer" onClick={(e)=> closeComposeMail(e)} />
      </Header>
      <RecipientWrapper>
        <InputBase placeholder="Recipients" name='to' onChange={(e) => onValueChange(e)} />
        <InputBase placeholder="Subject" name='subject' onChange={(e) => onValueChange(e)}  />
      </RecipientWrapper>
      <TextField 
        multiline
        rows={16}
        sx={{'& .MuiOutlinedInput-notchedOutline' : { border: "none" }}}
        name='body'
        onChange={(e) => onValueChange(e)}  
      />
      <Footer>
        <SendButton onClick={(e)=>sendMail(e)}>Send</SendButton>
        <DeleteOutline cursor="pointer" onClick={()=> setOpendiallog(false)} />
      </Footer>
    </Dialog>
  )
}

export default ComposeMail