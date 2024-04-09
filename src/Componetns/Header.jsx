import React from 'react'
import { AppBar, Toolbar, InputBase, Box ,styled} from '@mui/material'
import { Menu as MenuIcon, Search, Tune, HelpOutlineOutlined, SettingsOutlined, AppsOutlined, AccountCircleOutlined } from '@mui/icons-material';
import { GmailLogo } from '../Constants/Constants';


const StyledAppBar = styled(AppBar)({
    backgroundColor: "#F5F5F5",
    boxShadow: 'none',
    minHeight : 75,
    position :'sticky'
})
const SearchBar = styled(Box)({
    display: 'flex',
    // width:"100%",
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#EAF1FB',
    borderRadius: 28,
    marginLeft : 100,
    minWidth : 765,
    maxWidth: 800,
    height : 55,
    padding: '0 20px',
    '& > div' : {
        width : '100%',
        padding : '0 15px'
    }
})
const OptioonsWrapper = styled(Box)({
    marginLeft : 50,
    width : '100%',
    display: 'flex',
    justifyContent : 'end',
    '& > svg' : {
        marginRight: '17px',
        fontSize : '27px'
    },
    '& > svg : hover' : {
        cursor : 'pointer'
    }
})







const Header = ({toggleDrawer}) => {
  return (
    <StyledAppBar>
        <Toolbar>
            <MenuIcon style={{color: 'black', cursor:"pointer"}} onClick={toggleDrawer} />
            <img src={GmailLogo} alt="logo" style={{width:"8%" , marginLeft:"15px"}} />
            <SearchBar>
                <Search color='action' />
                <InputBase placeholder='Search mail' />
                <Tune color='action'/>
            </SearchBar>
            <OptioonsWrapper>
                <HelpOutlineOutlined color='action'/>
                <SettingsOutlined color='action'/>
                <AppsOutlined color='action'/>
                <AccountCircleOutlined color='action'/>
            </OptioonsWrapper>
        </Toolbar>
    </StyledAppBar>
  )
}

export default Header