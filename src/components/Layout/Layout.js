import React from "react";
import Aux from "../../hoc/Auxillary";
import classes from "./Layout.module.css";
import { connect } from "react-redux";
import NavigationItem from './Navigations/NavigationItem'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; 
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';  
import * as actions from "../../store/actions/index";
import { Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };
  componentDidMount() {
    this.props.onGetShoppingCart();
  }
  render() {
    return (
      <Aux>
        <div style={{display:"inline-flex",backgroundColor:"grey",width:"100%",margin:"0 auto"}}>
            <NavigationItem link="/home">
              <HomeIcon style={{width:"30px",height:"30px"}}></HomeIcon>
            </NavigationItem>
            <NavigationItem link="/addlaptop">
            <Button id="btn" className="btn btn-info" startIcon={<AddShoppingCartIcon></AddShoppingCartIcon>}> NEW LAPTOP</Button>
              </NavigationItem>
            <NavigationItem link="/addconfiguration">
            <Button  className="btn btn-info" startIcon={<SettingsIcon></SettingsIcon>}> NEW CONFIGURATION</Button>
            </NavigationItem>
            <NavigationItem link="/about">
            <Button  className="btn btn-info" startIcon={<SettingsIcon></SettingsIcon>}> ABOUT</Button>
            </NavigationItem>
            <NavigationItem link="/shoppingcart">
              <Tooltip title="Shopping Cart">{this.props.ShoppingCart.laptops   ?
              <Badge className={classes.Notif} color="secondary" badgeContent={this.props.ShoppingCart.laptops.length}> 
                <ShoppingCartIcon style={{width:"30px",height:"30px"}}></ShoppingCartIcon>
               </Badge> :   <ShoppingCartIcon style={{width:"30px",height:"30px"}}></ShoppingCartIcon>}
              </Tooltip>
              </NavigationItem> 
        </div>
        <main className={classes.Content}>{this.props.children}</main>
        <div style={{width:"100%",height:"10px",fontSize:"6px", backgroundColor:"grey",position:"fixed",bottom:"0"}}>@Ganesh</div>
      </Aux>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    ShoppingCart :state.home.ShoppingCart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetShoppingCart: () => dispatch(actions.GetShoppingCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);

