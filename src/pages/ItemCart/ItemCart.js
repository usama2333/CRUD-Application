import React, { Fragment, useState, useEffect } from "react";
import { Box, Container, Stack } from "@mui/material";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../../store/table";
import apiCall from "../../services/apiCall";
import store from "../../store";

const ItemCart = () => {
  const data = useSelector((state) => state.table.data);

  const onResponse = (data) => {
    store.dispatch(tableActions.setData(data));
  };

  useEffect(() => {
    apiCall("get", null, null, onResponse);
  }, []);

  return (
    <Fragment>
      <Container maxWidth="xl" sx={{ mt: "50px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {data.map((data) => (
            <Cart
              key={data.id}
              id={data.id}
              name={data.name}
              price={data.price}
              description={data.discription}
              category={data.category}
            />
          ))}
        </Box>
      </Container>
    </Fragment>
  );
};

export default ItemCart;
