import react, { Fragment } from 'react';
import logo from './logo.svg';
import Navbar from './pages/Navbar/Navbar';
import CategoryForm from './pages/CategoryForm/CategoryForm';
import ItemForm from './pages/ItemForm/ItemForm';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
  
    <Fragment>
     <Navbar/>
     
        
          <CategoryForm/>
       
        
          <ItemForm/>
  
     
     
    </Fragment>
  );
}

export default App;
