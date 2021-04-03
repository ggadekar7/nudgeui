import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { Link } from "react-router-dom";
class Home extends Component{
    state={
        ram:"",
        laptopId:"",
        flag:true
    }
    componentDidMount(){
        this.props.onLaptopLoad();
    }
    componentWillMount(){
        this.props.onLaptopLoad();
     }
    onSelect = (id) => {
        this.setState({laptopId:id})
    }
    handleChange = (event) => {
        this.setState({[event.target.id]:event.target.value})
    }
createDatabase = () => {
    if(this.props.laptops.length === 0)
    {
        this.props.onDbCreate();
        this.setState({flag:!this.state.flag})
        // this.props.history.push("/");
        window.location.reload();
    }else{
        alert("Database is created.")
    }
    
}
componentDidUpdate(prevProps, prevState) {
    if (prevState.flag !== this.state.flag) {
        this.props.onLaptopLoad();
        console.log("componentDidUpdate")
    }
}
    render(){
        return(<div>
            <button style={{float:"left",marginBottom:"20px",marginLeft:"20px"}} className="btn btn-danger" onClick={this.createDatabase}>Create In Memory Database</button>
            {this.props.laptops ? 
            <table className="table table-striped">
                <thead className="thead-light">
                    <tr>
                        <th>Sr.</th>  <th>Laptop</th>  <th>Price</th><th></th>
                    </tr>
                </thead>
            {this.props.laptops.map((item,index) => {
                return <tr><td>{item.id}</td><td>{item.name}</td><td>£{item.price}</td>
                <td>
                    <Link to={`/cart/${item.id}`}>Buy</Link>
                </td>
                </tr>
            })}
             </table> :"Reload"}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        laptops:state.home.Laptops,
        Configuration: state.home.Configuration
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        onDbCreate: () => dispatch(actions.DbCreate()),
        onLaptopLoad: () => dispatch(actions.GetLaptops()),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Home);
  