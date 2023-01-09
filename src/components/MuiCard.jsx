import React from 'react' 
import { Box,Card,CardContent,Typography,Button,CardActions } from '@mui/material'


function MuiCard() {
    


  return (
    <Box width="300px">
        <Card>
            <CardContent>
                <Typography gutterBottom variant='h5' component="div">
                    React
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate, debitis ea dolore omnis velit dolorum quos eligendi quidem atque asperiores quia, error, unde sapiente. Hic explicabo repellat excepturi deleniti?
                </Typography>
            </CardContent>
            <CardActions>
                <Button>Share</Button>
                <Button>Lear More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard