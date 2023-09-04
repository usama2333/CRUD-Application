import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';


const ItemForm = () => {
  return (
    <Fragment>
     <Container maxWidth='xl'>
     

     <Box sx={{display : 'flex' , flexDirection : 'column', justifyContent : 'center' , alignItems : 'center', mt : '100px' }}>
     
     <Box sx={{width : '50%', mb : '30px'}}>
     <TextField  fullWidth id="outlined-basic" label="Name" variant="outlined" />
     </Box>

     <Box sx={{width : '50%',mb : '30px'}}>
     <TextField  fullWidth id="outlined-basic" label="Description" variant="outlined" />
     </Box>

     <Box sx={{width : '50%',mb : '30px'}}>
     <TextField  fullWidth id="outlined-basic" label="Price" variant="outlined" />
     </Box>

     <Box sx={{width : '50%'}}>
     <TextField  fullWidth id="outlined-basic" label="Category" variant="outlined" />
     </Box>
     
     <Button size='large' variant="outlined" color="primary" sx={{mt : '30px'}}>
  Submit
</Button>
    
     </Box>

     </Container>
      
    </Fragment>
  )
}

export default ItemForm

