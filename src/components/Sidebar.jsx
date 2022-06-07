import { Box } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Box bgcolor={"skyblue "} sx={{display:{xs:'none',sm:"block"}}} p={2} flex={1}>
      feed
    </Box>
  )
}

export default Sidebar