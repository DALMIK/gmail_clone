import React from 'react';
import SideBarContent from './SideBarContent';
import { Drawer} from '@mui/material';

const Sidebar = ({openDrawer}) => {
  return (
    <Drawer
        anchor='left'
        open={openDrawer}
        hideBackdrop={true}
        ModalProps={{
            keepMounted: true
        }}
        sx={{
            '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper ' : {
                marginTop: '75px',
                width:275,
                background: '#F5F5F5',
                borderRight: 'none',
                height: 'Calc(100vh-75px)'
            }
        }}
        variant="persistent"
    >
        <SideBarContent />
    </Drawer>
  )
}

export default Sidebar