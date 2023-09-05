import React, { Fragment } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Stack } from '@mui/material';
import putData from '../../services/putItem';
import apiCall from '../../services/apiCall';
import store from '../../store';
import { tableActions } from '../../store/table';
import { useSelector } from 'react-redux';



const Cart = ({key ,id,name,price,description,category}) => {
    const reduxData = useSelector((state) => state.table.data);

    const onResponse = (id)=>{

    }
let data = {
    "description": "description 1",
    "name": "Muhammad Usama Ahmed",
    "price": "56",
    "category": "test",
    "id": "1",
    "discription": "test"
}
    const onPress = (type) => {
    if(type == 'delete'){
        apiCall('delete',null,id, ()=>{
            const newData=   reduxData.filter((item)=> item.id !== id)
            store.dispatch(tableActions.setData(newData))
        })
    }
    else {
        apiCall('put',data,id, onResponse)
    }
     }
   
  return (
    
    <Fragment>
     <Card sx={{ maxWidth: 345 , width : '500px', mt : '30px', border : '2px solid gray' }}>
      
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
      <Stack direction='row' justifyContent={'space-between'}>
      <Typography gutterBottom variant="h6" component="div">
          id
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {id}
        </Typography>

      </Stack>
      </CardContent>
      <CardActions>

        <Button onClick={()=> onPress('update')} variant="outlined" color='success' size="small">Update</Button>
        <Button onClick={()=> onPress('delete')} variant="outlined" color="error"  size="small">Delete</Button>
      </CardActions>
    </Card>
      
    </Fragment>
  )
}

export default Cart
