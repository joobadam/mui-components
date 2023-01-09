import React from 'react'
import { Button, Container, FormLabel, TextField, Box } from '@mui/material'

function MuiForm() {
  return (
    <Container>
        <Box>
            <FormLabel>
             Lorem ipsum dolor sit amet.
            </FormLabel>
            <Box>
                <TextField 
                 id="outlined-basic"
                 label="my email address" 
                 variant="outlined" />
                <Box>
                    <Button variant='contained'>Submit</Button>
                </Box> 
            </Box>
        </Box> 
    </Container>
  )
}

export default MuiForm