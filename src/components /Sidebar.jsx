import { Box, List, ListItem, ListItemButton, ListItemIcon, Switch, } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import SidebarIcons from './SidebarIcons';
import { useState } from 'react';

import React from 'react'

const Sidebar = ({theme, setTheme}) => {

  const [Icons] = useState([
    {
      Icon: HomeIcon,
      IconText: 'Homepage'
    },
    {
      Icon: GroupIcon,
      IconText: 'GroupIcon'
    },
    {
      Icon: StorefrontIcon,
      IconText: 'Homepage'
    },
    {
      Icon: Person2Icon,
      IconText: 'Marketplace'
    },
    {
      Icon: SettingsIcon,
      IconText: 'setting'
    },
    {
      Icon: PersonIcon,
      IconText: 'PersonIcon'
    },
  ])


  return (
    <Box  p={2} flex={1} sx={{ display: {xs: 'none', md:'block'}, minWidth:'150px', overflow:'hidden' }} >
     <Box  position='fixed' >
        <List>
            {
              Icons.map((IconInfo,i) => { 
                return <SidebarIcons key={i} IconName={IconInfo.Icon} IconText={IconInfo.IconText} />
              })
            }
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Brightness6Icon />
              </ListItemIcon>
              <Switch onChange={(e) => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            </ListItemButton>
          </ListItem>
        </List>

     </Box>
    </Box>
  )
}

export default Sidebar