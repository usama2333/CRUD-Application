import React, { Fragment , useState, useEffect} from 'react';
import { Box, Container, Stack } from '@mui/material';
import Cart from './Cart';
import fetchItem from '../../services/getItem';
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from '../../store/table';

const ItemCart = () => {
    

    const data = useSelector((state) => state.table.data);

    const dispatch = useDispatch();

   
    useEffect(() => {
        fetchItem( dispatch, tableActions);

       console.log(data,'this is cart data')
      }, []);

  return (
    <Fragment>
    <Container maxWidth='xl' sx={{mt : '50px'}}>

    <Box sx={{display : 'flex' , justifyContent : 'center' ,justifyContent : 'space-evenly', flexWrap : 'wrap'}}>
   
   {data.map((data) => (
    <Cart name={data.name} id={data.id} price={data.price} description={data.discription} category={data.category} />
   ))}
    
         
    </Box>

    </Container>
    </Fragment>
  )
}

export default ItemCart
