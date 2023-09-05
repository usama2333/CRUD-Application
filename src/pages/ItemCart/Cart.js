import React, { Fragment } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Stack } from '@mui/material';

const Cart = ({id,name,price,description,category}) => {
  return (
    
    <Fragment>
     <Card sx={{ maxWidth: 345 , width : '500px', mt : '30px' }}>
      
      <CardContent>
      
      <Stack direction='row' justifyContent={'space-between'}>
      <Typography gutterBottom variant="h6" component="div">
          Name
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>

      </Stack>

      <Stack direction='row' justifyContent={'space-between'}>
      <Typography gutterBottom variant="h6" component="div">
          Discription
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {description}
        </Typography>

      </Stack>
        
      <Stack direction='row' justifyContent={'space-between'}>
      <Typography gutterBottom variant="h6" component="div">
          Price
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {price}
        </Typography>

      </Stack>
      <Stack direction='row' justifyContent={'space-between'}>
      <Typography gutterBottom variant="h6" component="div">
          Category
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {category}
        </Typography>

      </Stack>
        
      </CardContent>
      <CardActions>
        
        <Button variant="outlined" color='success' size="small">Update</Button>
        <Button  variant="outlined" color="error"  size="small">Delete</Button>
      </CardActions>
    </Card>
      
    </Fragment>
  )
}

export default Cart
