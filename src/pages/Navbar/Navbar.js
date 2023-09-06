import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const categoryHandler = () => {
    history.replace("/");
  };

  const cartHandler = () => {
    history.replace("/cart");
  };
  const itemHandler = () => {
    history.replace("/item");
  };
  return (
    <Fragment>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Button
                onClick={cartHandler}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
              >
                Item Card
              </Button>
              <Button color="inherit" onClick={categoryHandler}>
                Category
              </Button>
              <Button color="inherit" onClick={itemHandler}>
                Item
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Navbar;
