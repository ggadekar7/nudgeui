import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from './components/Home/Home';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import  ShoppingCart from './components/ShoppingCart/ShoppingCart';
import AddConfiguration from'./components/Form/AddConfiguration';
import AddLaptop from'./components/Form/AddLaptop';
class App extends React.Component {
  componentDidMount() {
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/cart/:id/" component={Cart}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/shoppingcart" exact component={ShoppingCart}></Route>
        <Route path="/addconfiguration" exact component={AddConfiguration}></Route>
        <Route path="/addlaptop" exact component={AddLaptop}></Route>
        <Route to="/" component={Home}></Route>
      </Switch>
    );
    return (
      <div className="App">
        <div style={{display:"contents"}}>
          <Layout> {routes} </Layout>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
