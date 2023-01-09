import { CardMedia } from '@mui/material'
import { Typography } from '@mui/material'
import { CardActions } from '@mui/material'
import { Collapse } from '@mui/material'
import { Container } from '@mui/material'
import { Button } from '@mui/material'
import { CardContent } from '@mui/material'
import { Card } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

function MuiComplexCard() {

    const [open,setOpen]=useState()
  return (

        <Box width={300}>
            <Card>
                <CardMedia
                component="img"
                height={140}
                image='https://source.unsplash.com/random'
                alt='unsplash image'/>
                <CardContent>
                <Typography gutterBottom variant='h5' component="div">
                    A kép neve
                </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, ullam suscipit aut doloribus aperiam modi sunt autem mollitia, fugiat unde sit nam voluptatum beatae qui porro odit exercitationem expedita quaerat!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=>setOpen(!open)}>
                        {open? "Show less": "Show more"}
                    </Button>
                </CardActions>
                <Box>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Container sx={{height:36,lineHeight:2}}>This is CardContent Area</Container>
                    </CardContent>
                </Collapse>
            </Box>
            </Card >
        </Box>

  )
}

export default MuiComplexCard