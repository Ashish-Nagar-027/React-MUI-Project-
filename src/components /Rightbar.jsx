import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box bgcolor='pink'  p={2}  flex={2} sx={{ display: {xs: 'none', sm:'block'} }}>Rightbar</Box>
  )
}

export default Rightbar