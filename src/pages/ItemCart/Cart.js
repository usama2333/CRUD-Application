import React, { Fragment } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Stack } from '@mui/material';
import apiCall from '../../services/apiCall';
import store from '../../store';
import { tableActions } from '../../store/table';
import { useSelector,useDispatch, } from 'react-redux';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const notify = (error) => toast(error);
const Cart = ({key ,id,name,price,description,category}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const reduxData = useSelector((state) => state.table.data);

    const onResponse = (id)=>{

    }

    const onPress = (type) => {
    if(type == 'delete'){
        apiCall('delete',null,id, ()=>{
            const newData=   reduxData.filter((item)=> item.id !== id)
            store.dispatch(tableActions.setData(newData))
            notify('Item Deleted Successfully')
        })
    }
    else {
       
        history.replace('/item');
        dispatch(tableActions.setId(id));
        dispatch(tableActions.setUpdate(true));
        
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
    <ToastContainer />
    </Fragment>
  )
}

export default Cart
