import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import  {AccessTime , DeleteOutline, DraftsOutlined, ArchiveOutlined } from '@mui/icons-material';


const Container = styled(Box)`
    background: #F5F5F5;
`

const AllMessages = styled(Box)`
    height: 100vh;
    width: 98%;
    background: #F5F5F5;
`
const MessageSlits = styled(Box)`
    height: 40px;
    width: 100%;
    background: white;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    &:hover{
        box-shadow: 1px 1px 4px black;
        cursor: pointer;
    }
`
const AllMessagesBoxHeader = styled(Box)`
    height: 50px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
`




const Content = ({setMarginLeft}) => {





  return (
    <Container style={{marginLeft : setMarginLeft}}>
        <AllMessages>
            <AllMessagesBoxHeader/>
            {
                [1,2,3,4,5,6].map(()=>{
                    return (
                        <MessageSlits>
                            <AccessTime />
                            <DeleteOutline/>
                            <DraftsOutlined />
                            <ArchiveOutlined />
                        </MessageSlits>
                    )
                })
            }
            
        </AllMessages>
    </Container>
  )
}

export default Content