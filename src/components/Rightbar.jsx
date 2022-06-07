import { Box } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box bgcolor={"green"} p={2} sx={{display:{xs:'none',sm:"block"}}} flex={2}>Rightbar</Box>
  )
}

export default Rightbar