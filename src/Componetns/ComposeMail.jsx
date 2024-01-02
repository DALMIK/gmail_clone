import React from 'react'
import {Dialog} from '@mui/material'

const ComposeMail = ({openDialog}) => {
  return (
    <Dialog
    open={openDialog}
    onClose={false}
    >
        ComposeMail
    </Dialog>
  )
}

export default ComposeMail