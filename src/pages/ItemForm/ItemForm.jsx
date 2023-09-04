import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import { itemSchema } from '../../schema/item';


const initialValues = {
    name: "",
    discription: "",
    price: "",
    category: ""
};


   

    const ItemForm = () => {

        const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: itemSchema,
            onSubmit: (values, action) => {
                // AddLoginData(values, history, authCtx, notify , login , setLogin );
                console.log('data..............');
                console.log(values.name);
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
                            <TextField fullWidth onChange={handleChange} onBlur={handleBlur} value={values.category} id="category" name='category' label="Category" variant="outlined" />
                            {errors.category && touched.category ? (
                                <Typography variant="p" color="red" sx={{ fontSize: '14px' }}>
                                    {errors.category}
                                </Typography>
                            ) : null}
                        </Box>
                        

                        

                        <Button type='submit' size='large' variant="outlined" color="primary" sx={{ mt: '0px' }}>
                            Submit
                        </Button>

                    </Box>
</form>
                </Container>

            </Fragment>
        )
    }

    export default ItemForm;

