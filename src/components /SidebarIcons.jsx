import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const SidebarIcons = ({IconName, IconText}) => {
    // console.log(IconName);
  return (<ListItem disablePadding key={IconName}>
    <ListItemButton component='a' href='#'>
      <ListItemIcon>
       { <IconName /> }
      </ListItemIcon>
      <ListItemText primary={IconText} />
    </ListItemButton>
  </ListItem>
  )
}

export default SidebarIcons