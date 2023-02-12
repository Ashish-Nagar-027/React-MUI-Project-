import { AppBar, Toolbar,styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent: 'space-between',
})


const SearchBox = styled("div")(({ theme }) => ({
     backgroundColor: 'white',
     padding: '0px 10px',
     borderRadius: theme.shape.borderRadius,
     width:'40%',

}))

const Icons = styled(Box)(({ theme }) =>({
     display: 'none',
     gap:'10px',
     alignItems:'center',
     [theme.breakpoints.up('sm')]: {
      display:'flex'
     }
     
}))

const UserBox = styled(Box)(({ theme }) =>({
     display: 'flex',
     gap:'10px',
     alignItems:'center',
     [theme.breakpoints.up('sm')]: {
      display:'none'
     }
}))

const Navbar = () => {

  const [closeMenu, setCloseMenu] = useState(false)


  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI Dev
        </Typography>
        <WhatshotIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBox>
          <InputBase placeholder="Search here..." />
        </SearchBox>
        <Icons>
          <Badge badgeContent={4} color="error" >
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar onClick={(e) => setCloseMenu(true)} alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ height:'30', width:'30' }} />
        </Icons>
        <UserBox onClick={(e) => setCloseMenu(true)}>
        <Avatar  alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ height:'30', width:'30' }} />
        <Typography variant="span" >
          MUIDev
        </Typography>  
        </UserBox>
      </StyledToolbar >

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={closeMenu}
        onClose={(e) => setCloseMenu(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar