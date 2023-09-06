import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { itemSchema } from "../../schema/item";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiCall from "../../services/apiCall";
import { tableActions } from "../../store/table";

var categoryObj = [
  {
    name: "men",
  },
  {
    name: "women",
  },
  {
    name: "dress",
  },
  {
    name: "shoes",
  },
];

const notify = (error) => toast(error);

const initialValues = {
  name: "",
  discription: "",
  price: "",
  category: "",
};

const ItemForm = () => {
  const [selectCategory, setSelectCategory] = useState("");
  const category = useSelector((state) => state.table.category);
  const [test ,setTest] = useState(null);
  const id = useSelector((state) => state.table.id);
  const update = useSelector((state) => state.table.update);
  const dispatch = useDispatch();
  const add = useSelector((state) => state.table.add);
  const del = useSelector((state) => state.table.del);

  console.log(category,'.cat.....................................')

  useEffect(() => {
    setTest(category);
    if (category === null) {
      return;
    }
    if (add == true) {
     
      const foundItems = categoryObj.filter(item => item.name === category.name);
    
        if(foundItems.length > 0) {

            return;
        }
        else {     
          categoryObj.push(category);
        }       
      
    }
    if (del == true) {
    
    const delArray = categoryObj.filter (item => item.name !== category.name);
    categoryObj= delArray;
    console.log(delArray,'del array')
    }
    
  }, [category]);

  const handleSelect = (event) => {
    setSelectCategory(event.target.value);
  };
  const handleClick =() => {
    console.log('click..............')
  }
  const onResponse = () => {};
  const onResponsee = (id) => {};
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: itemSchema,
      onSubmit: (values, action) => {
        
        if (update === true) {
          console.log(id, "api id is .............");
          apiCall("put", values, id, onResponsee);
          dispatch(tableActions.setUpdate(false));
        } else {
          console.log("post......................");
          apiCall(
            "post",
            { ...values, category: selectCategory },
            null,
            onResponse
          );
        }

        notify("Items added to the Cart");
      },
    });

  return (
    <Fragment>
      <Container maxWidth="xl">
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt: "100px",
            }}
          >
            <Box
              sx={{ width: { lg: "50%", sm: "70%", xs: "80%" }, mb: "30px" }}
            >
              <TextField
                fullWidth
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                label="Name"
                variant="outlined"
              />
              {errors.name && touched.name ? (
                <Typography variant="p" color="red" sx={{ fontSize: "14px" }}>
                  {errors.name}
                </Typography>
              ) : null}
            </Box>

            <Box
              sx={{ width: { lg: "50%", sm: "70%", xs: "80%" }, mb: "30px" }}
            >
              <TextField
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.discription}
                name="discription"
                id="discription"
                label="Description"
                variant="outlined"
              />
              {errors.discription && touched.discription ? (
                <Typography variant="p" color="red" sx={{ fontSize: "14px" }}>
                  {errors.discription}
                </Typography>
              ) : null}
            </Box>

            <Box
              sx={{ width: { lg: "50%", sm: "70%", xs: "80%" }, mb: "30px" }}
            >
              <TextField
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                id="price"
                name="price"
                label="Price"
                variant="outlined"
              />
              {errors.discription && touched.discription ? (
                <Typography variant="p" color="red" sx={{ fontSize: "14px" }}>
                  {errors.price}
                </Typography>
              ) : null}
            </Box>

            <Box
              sx={{ width: { lg: "50%", sm: "70%", xs: "80%" }, mb: "30px" }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  value={selectCategory}
                  label="Category"
                  onChange={handleSelect}
                  onBlur={handleBlur}
                  id="category"
                  name="category"
                  onClick={handleClick}
                >
               
                  {categoryObj.map((categoryData) => (
                    <MenuItem value={categoryData.name}>
                      {categoryData.name}
                    </MenuItem>
                  ))}

                </Select>
              </FormControl>
            </Box>

            {update && (
              <Button
                type="submit"
                size="large"
                variant="outlined"
                color="primary"
                sx={{ mt: "10px" }}
              >
                Update Items
              </Button>
            )}

            {!update && (
              <Button
                type="submit"
                size="large"
                variant="outlined"
                color="primary"
                sx={{ mt: "10px" }}
              >
                Add Items
              </Button>
            )}
          </Box>
        </form>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default ItemForm;
