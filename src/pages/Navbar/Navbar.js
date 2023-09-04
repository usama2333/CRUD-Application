import React, { Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';

const Navbar = () => {
  return (
    <Fragment>
    <Container maxWidth='xl'>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , display : {xs : 'none' , sm : 'flex'} }}>
            Crud Application
          </Typography>
          <Button color="inherit">Category</Button>
          <Button color="inherit">Item</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </Container>
    </Fragment>
  )
}

export default Navbar
