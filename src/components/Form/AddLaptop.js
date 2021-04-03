import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
class AddLaptop extends Component {
    state = { name:"",price:"" }

    handleChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      this.setState({[name]:value})
    }

    handleSave = () => {
      var pat = /^[+-]?\d+(\.\d+)?$/ ;
      if(!pat.test(this.state.price) && this.state.nam !== ""){
        alert("Invalid data");
      }else{
        const laptops = [...this.props.laptops];
        let index =laptops.map(x => x.name).indexOf(this.state.name.trim())
        if(index !== -1){
          alert("Laptop exits in database.")
        }else{
          const Laptop ={
              Id:0,
              Name:this.state.name,
              Price:this.state.price
          }
          this.props.onSaveLaptop(Laptop)
          this.props.history.push("/")
      }
    }
    }
    render() { 
        return (<div style={{margin:"0 auto"}}>
          <h6>ADD NEW LAPTOP</h6>
          <table className="table" style={{margin:"0 auto",width:"40%"}}>
            <tr>
              <td>Name</td><td> <input style={{width:"300px"}} className="form-control" value={this.state.name} name="name" onChange={this.handleChange}></input></td>
            </tr>
            <tr>
              <td>Price</td><td><input style={{width:"300px"}}  className="form-control"  value={this.state.price} name="price" onChange={this.handleChange}></input></td>
            </tr>
            <tr>
              <td></td><td  style={{float:"left"}}> <button onClick={this.handleSave}>Save</button></td>
            </tr>
          </table>
        </div>  );
    }
}
const mapStateToProps = (state) => {
    return {
      laptops:state.home.Laptops,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      onSaveLaptop: (Laptop) => dispatch(actions.AddLaptop(Laptop)),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(AddLaptop);
  