import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { categorySchema } from "../../schema/category";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  name: "",
};

const notify = (error) => toast(error);

const CategoryForm = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(tableActions.setAdd(true));
    dispatch(tableActions.setDel(false));
    console.log("add");
  };

  const handleDelete = () => {
    dispatch(tableActions.setDel(true));
    dispatch(tableActions.setAdd(false));
    console.log("delete");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: categorySchema,
      onSubmit: (values, action) => {
        console.log("data..............");
        console.log(values, "category form .................");
        dispatch(tableActions.setCategory(values));
        notify("Done successfully");
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
              mt: "200px",
            }}
          >
            <Box
              sx={{ width: { lg: "50%", sm: "70%", xs: "80%" }, mb: "30px" }}
            >
              <TextField
                id="name"
                name="name"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                label="Name"
                variant="outlined"
              />
              {errors.name && touched.name ? (
                <Typography variant="p" color="red" sx={{ fontSize: "14px" }}>
                  {errors.name}
                </Typography>
              ) : null}
            </Box>

            <Box sx={{ width: { lg: "50%", sm: "70%", xs: "80%" } }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Description"
                variant="outlined"
              />
            </Box>
            <Box>
              <Button
                type="submit"
                size="large"
                variant="outlined"
                color="primary"
                sx={{ mt: "30px", mr: "20px" }}
                onClick={handleAdd}
              >
                Add Category
              </Button>
              <Button
                type="submit"
                size="large"
                variant="outlined"
                color="error"
                onClick={handleDelete}
                sx={{ mt: "30px" }}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default CategoryForm;
