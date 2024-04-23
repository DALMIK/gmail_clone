import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useState } from 'react'

import AllMessagesBox from './AllMessagesBox'




const Content = ({setMarginLeft}) => {


  return (
    <AllMessagesBox setMarginLeft={setMarginLeft}/>
  )
}

export default Content