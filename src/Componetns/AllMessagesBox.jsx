import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import  {AccessTime , DeleteOutline, DraftsOutlined, ArchiveOutlined, CheckBoxOutlineBlank, StarBorder, DragIndicator, MoreVert, Refresh ,DataArray } from '@mui/icons-material';





const Container = styled(Box)`
    /* background: #b72424; */
    position: static;
    width: ${(props)=> props.width == "276px" ? "80%" : "99%"};
    height: 90vh;
    border-radius: 20px;
    /* overflow: scroll; */
`

const AllMessages = styled(Box)`
    height: 81vh;
    width: 98%;
    background: #F5F5F5;
    overflow: scroll;
    border-radius: 0 0 20px 20px;
`
const MessageSlits = styled(Box)`
    height: 40px;
    width: 99.8%;
    display: flex;
    /* align-items: center; */
    background: white;
    margin-bottom: 2px;
    position: relative;
    &:hover{
        box-shadow: 1px 1px 4px #c3c3c3 ;
        cursor: pointer;
    }
`
const AllMessagesBoxHeader = styled(Box)`
    height: 50px;
    width: 96.5%;
    padding-left: 15px;
    display: flex;
    align-items: center;
    background: #ffffff;
    border-radius: 20px 20px 0 0;
    position: sticky;
    & > svg {
        font-size: 18px;
        margin-right: 20px;
    }
`

const SlitsContainer = styled(Box)`
    overflow: hidden;
    /* height: 100vh; */
    width: 100%;
`

const SlitButtons = styled(Box)`
    position: absolute;
    right: 0;
    display: flex;
    height: 100%;
    align-items: center;
`
const StyledIcons = styled(Box)`
    margin-right: 20px;
    color: #444444;
    & > svg {
        font-size: 20px;
    }
    &:hover {
        cursor: pointer;
    }
`
const StyledSlitStarAndCheckBoxIcons = styled(Box)`
    margin-right: 10px;
    /* color: ${(props)=> props.color}; */
    & > svg {
        font-size: 18px;
    }
    &:hover {
        cursor: pointer;
        color: ${(props)=>props.color};
    }
`
const TimeDiv = styled(Box)`
    font-weight: 700px;
    position: absolute;
    right: 20px;
    font-family: sans-serif;
`
const SlitContentContainer = styled(Box)`
    display: flex;
    height: 100%;
    align-items: center;
`

const StarAndCheckboxSlitDiv = styled(Box)`
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    left: 16px;
`

const AllMessagesBox = ({setMarginLeft}) => {


    const [iconVisibilityForHoveredSlit, setIconVisibilityForHoveredSlit] = useState(-1)
    const [dataArray, setDataArray] = useState([1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6])

    const handleMouseEnter = (index) =>{
        setIconVisibilityForHoveredSlit(index);
    }
    const handleMouseLeave = () =>{
        setIconVisibilityForHoveredSlit(-1);
    }




    
  return (
    <Container style={{marginLeft : setMarginLeft}} width={setMarginLeft}>
        <AllMessagesBoxHeader>
            <CheckBoxOutlineBlank />
            <Refresh/>
            <MoreVert/>
        </AllMessagesBoxHeader>
        
        <AllMessages>
            <SlitsContainer>
            {
                dataArray.map((data,index)=>{
                    return (
                        <MessageSlits
                            key={index}
                            onMouseEnter={() => { handleMouseEnter(index) }}
                            onMouseLeave={handleMouseLeave}
                        >
                            {iconVisibilityForHoveredSlit === index ? <DragIndicator fontSize='small' style={{marginTop:"8px", color:"#c3c3c3"}} /> :""}
                            <StarAndCheckboxSlitDiv>
                                <StyledSlitStarAndCheckBoxIcons color={iconVisibilityForHoveredSlit === index ? "#1f1f1f" : "#b8b8b8"}>
                                    <CheckBoxOutlineBlank />
                                </StyledSlitStarAndCheckBoxIcons>
                                <StyledSlitStarAndCheckBoxIcons color={iconVisibilityForHoveredSlit === index ? "#1f1f1f" : "#b8b8b8"}>
                                    <StarBorder />
                                </StyledSlitStarAndCheckBoxIcons>
                                <Box style={{width:"160px", fontFamily:"sans-serif", fontWeight : "700", fontSize:"0.885rem"}}>Marketing Team</Box>
                                <Box style={{width:"900px", fontFamily:"sans-serif", fontWeight : "700", fontSize:"0.885rem"}}>dalmik chad the boss
                                </Box>
                            </StarAndCheckboxSlitDiv>
                            
                            <SlitContentContainer>
                                {iconVisibilityForHoveredSlit !== index ? <TimeDiv>
                                    <h5>7 Apr</h5>
                                </TimeDiv>
                                    : ""}
                                {iconVisibilityForHoveredSlit === index ?
                                    <SlitButtons>
                                        <StyledIcons>
                                            <ArchiveOutlined />
                                        </StyledIcons>
                                        <StyledIcons>
                                            <DeleteOutline />
                                        </StyledIcons>
                                        <StyledIcons>
                                            <DraftsOutlined />
                                        </StyledIcons>

                                        <StyledIcons>
                                            <AccessTime />
                                        </StyledIcons>
                                    </SlitButtons>
                                    : ""}
                            </SlitContentContainer>
                        </MessageSlits>
                    )
                })
            }
            </SlitsContainer>
            
            
        </AllMessages>
    </Container>
  )
}

export default AllMessagesBox