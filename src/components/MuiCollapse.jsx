import React, { useState } from 'react' 
import { Box,Card,CardContent,Collapse, CardHeader, IconButton, Container } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function MuiCollapse() {

    const [open,setOpen]= useState(false)
  return (
    <Box width='300px'>
        <Card sx={{minWidth: 300, border:"1px solid rgba(211,211,211,0.6)"}}>
            <CardHeader 
            title="Expand Me"
            action={
                <IconButton onClick={()=>setOpen(!open)} size="small">
                    {open? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}
                </IconButton>
            }>

            </CardHeader>
            <Box>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Container sx={{height:36,lineHeight:2}}>This is CardContent Area</Container>
                    </CardContent>
                </Collapse>
            </Box>
        </Card>
    </Box>
  )
}

export default MuiCollapse