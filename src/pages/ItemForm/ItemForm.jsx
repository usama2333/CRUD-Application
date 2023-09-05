import React, { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import { itemSchema } from '../../schema/item';
import itemData from '../../services/postItem';
import fetchItem from '../../services/getItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const categoryObj = [
    {
        name : 'Dress',
    },
    {
        name : 'Shoes',
    },
    {
        name : 'Car',
    },
    {
        name : 'Phone',
    },

]


const initialValues = {
    name: "",
    discription: "",
    price: "",
    category: ""
};

const ItemForm = () => {
    const [selectCategory, setSelectCategory] = useState('');

    const handleSelect = (event) => {
        setSelectCategory(event.target.value);
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: itemSchema,
            onSubmit: (values, action) => {
                // AddLoginData(values, history, authCtx, notify , login , setLogin );
                itemData(values,selectCategory);
                fetchItem();
                console.log('data..............');
                console.log(values);
                console.log(selectCategory,'commmmmmmmm')
            },
        });

    return (
        <Fragment>
            <Container maxWidth='xl'>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: '100px' }}>

                        <Box sx={{ width: { lg: '50%', sm: '70%', xs: '80%' }, mb: '30px' }}>
                            <TextField fullWidth id="name" onChange={handleChange} onBlur={handleBlur} value={values.name} name="name" label="Name" variant="outlined" />
                            {errors.name && touched.name ? (
                                <Typography variant="p" color="red" sx={{ fontSize: '14px' }}>
                                    {errors.name}
                                </Typography>
                            ) : null}
                        </Box>


                        <Box sx={{ width: { lg: '50%', sm: '70%', xs: '80%' }, mb: '30px' }}>
                            <TextField fullWidth onChange={handleChange} onBlur={handleBlur} value={values.discription} name='discription' id="discription" label="Description" variant="outlined" />
                            {errors.discription && touched.discription ? (
                                <Typography variant="p" color="red" sx={{ fontSize: '14px' }}>
                                    {errors.discription}
                                </Typography>
                            ) : null}
                        </Box>

                        <Box sx={{ width: { lg: '50%', sm: '70%', xs: '80%' }, mb: '30px' }}>
                            <TextField fullWidth onChange={handleChange} onBlur={handleBlur} value={values.price} id="price" name='price' label="Price" variant="outlined" />
                            {errors.discription && touched.discription ? (
                                <Typography variant="p" color="red" sx={{ fontSize: '14px' }}>
                                    {errors.price}
                                </Typography>
                            ) : null}
                        </Box>

                        <Box sx={{ width: { lg: '50%', sm: '70%', xs: '80%' }, mb: '30px' }}>
                            {/* <TextField fullWidth onChange={handleChange} onBlur={handleBlur} value={values.category} id="category" name='category' label="Category" variant="outlined" />
                            {errors.category && touched.category ? (
                                <Typography variant="p" color="red" sx={{ fontSize: '14px' }}>
                                    {errors.category}
                                </Typography>
                            ) : null} */}
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select

                                    value={selectCategory}
                                    label="Category"
                                    onChange={handleSelect}
                                    onBlur={handleBlur} id="category" name='category'
                                >

                                {categoryObj.map((categoryData) => (
                                    <MenuItem value={categoryData.name}>{categoryData.name}</MenuItem>
    
                                ))}
                                    

                                </Select>
                            </FormControl>
                        </Box>




                        <Button
                            type="submit"
                            size="large"
                            variant="outlined"
                            color="primary"
                            sx={{ mt: "30px" }}
                        >
                            Submit
                        </Button>

                    </Box>
                </form>
            </Container>

        </Fragment>
    )
}

export default ItemForm;

