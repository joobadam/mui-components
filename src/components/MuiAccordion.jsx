import {Accordion,AccordionSummary, AccordionDetails,Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MuiAccordion() {
  return (
    <div>
        <Accordion sx={{width:300}}>
            <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eaque, reiciendis doloribus velit explicabo adipisci eius impedit? Provident magni aut officia ipsa neque, in voluptatem eveniet id dicta corrupti ad.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordion