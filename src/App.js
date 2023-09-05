import react, { Fragment } from "react";
import logo from "./logo.svg";
import Navbar from "./pages/Navbar/Navbar";
import CategoryForm from "./pages/CategoryForm/CategoryForm";
import ItemForm from "./pages/ItemForm/ItemForm";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemCart from "./pages/ItemCart/ItemCart";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
      <Route exact path="/" component={CategoryForm} />

      <Route exact path="/item" component={ItemForm} />
      
      <Route exact path="/cart" component={ItemCart} />
      </Switch>
      </Router>
  );
}

export default App;
