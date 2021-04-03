import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
class ShoppingCart extends Component {
    state = {flag:true  }

    componentWillMount(){
        this.props.onGetShoppingCart();
    }

   componentDidMount(){
       this.props.onGetShoppingCart();
       console.log("I am called")
    }

    handleRemove = (id) => {
        if(window.confirm('Are you sure to delete this item?')){
            this.props.onCartItemRemoved(id);
        } 
    }
    
    render() { 
        return (<div>
            Cart items
            {this.props.ShoppingCart.laptops ? <table className="table">
                <thead className="thead-light">
                <tr>
                    <th>Sr.</th><th>Laptop</th><th>Ram</th><th>Hard disk</th><th>Color</th><th>Price</th><th></th>
                </tr>
                </thead>
            {this.props.ShoppingCart.laptops.map((item,index) => {
                return <tr><td>{item.id}</td><td>{item.name}</td><td>{item.ram}</td><td>{item.hdd}</td><td>{item.color}</td><td>£{item.price}</td>
                <td>
                <button onClick={() => this.handleRemove(item.id)}  style={{color:"red"}} className="btn btn-link" data-toggle="tooltip" data-placement="top" title="Delete">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                    
                </td>
                </tr>
            })}
             </table> :"Cart is empty."}
        </div>  );
    }
}
 
const mapStateToProps = (state) => {
    return {
        ShoppingCart :state.home.ShoppingCart,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        onCartItemRemoved: (id) => dispatch(actions.CartItemRemoved(id)),
        onGetShoppingCart: () => dispatch(actions.GetShoppingCart()),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
  