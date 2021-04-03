import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import LaptopImage from '../../assets/images/Laptop.jpg'
import { Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
class Cart extends Component {
    state = {config:{ram:0,hdd:0,color:0} , laptop:{},  total:0,ram:"",hdd:"",color:""}
    componentDidMount() {
        const {id} = this.props.match.params;
            this.props.onLaptopLoad(id);
            this.props.onConfiguraionLoad();
           
        }
        handleChange = (e) => {
            const tempConfig={...this.state.config}
            tempConfig[e.target.name] = e.target.value;

            this.setState({config: tempConfig,[e.target.name]:  e.target.value})          
        }

        handleAddCart = ()=>{
            if(parseFloat(this.state.config.ram) > 0 && parseFloat(this.state.config.hdd) > 0 &&  parseFloat(this.state.config.color))
            {
                const ram=[...this.props.Configuration.rams]
                const hdd=[...this.props.Configuration.hdds]
                const color=[...this.props.Configuration.colors]
                const laptop ={
                    Id :0,
                    Name: this.props.laptop.name,
                    Ram:ram.filter(x => x.price  === this.state.config.ram)[0].type ,
                    Hdd:  hdd.filter(x => x.price  === this.state.config.hdd)[0].type ,
                    Color: color.filter(x => x.price  === this.state.config.color)[0].type ,
                    Price: this.state.total.toString()
                }
                this.props.onAddToCart(laptop);
                this.props.history.push("/shoppingcart");
            }else{
                alert("Please select configuration.")
            }
        }
        componentDidUpdate(prevProps, prevState) {
            if (prevState.config !== this.state.config) {
                console.log('check',this.state.config)
                console.log('totla',this.state.total)
                let total = parseFloat(this.props.laptop.price) + parseFloat(this.state.config.ram) + parseFloat(this.state.config.hdd)  + parseFloat(this.state.config.color);
                this.setState({total:total.toFixed(2)})
                
            }
          }
    render() { 
        return ( <div>Cart
        { this.props.laptop ? 
                <table className="table table-striped" style={{textAlign:"center"}}>
                          <tr><td>
                              {/* {this.props.laptop.id} */}
                              <div className="card mb-3"  >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <div style={{margin:"0 auto",float:"right"}}>
                                        <img alt="" src={LaptopImage} style={{width:"100px",height:"100px"}}></img>
                                        <br></br>
                                        {this.props.laptop.name}
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"> 
                                            <span style={{color:"#565959",fontSize:"14px"}}> Price:</span> 
                                            <span style={{color:"#B12704",fontSize:"18px"}}> £ {this.props.laptop.price}</span>
                                        </h5>
                                    <div style={{display:"inline-table",textAlign:"left"}}>
                                    <div> 
                                      <select className="form-select" style={{margin:"0 auto",marginTop:"10px"}} 
                                        id="ram" value={this.state.config.ram}
                                        onChange={this.handleChange}  name="ram" >
                                            <option value="0">Ram</option>
                                            {this.props.Configuration.rams  && this.props.Configuration.rams.map((item)=>{
                                                return <option value={item.price}>{item.type}</option>
                                            })}
                                    </select>
                                    </div>
                                    <div>
                                    <select style={{width:"auto",marginTop:"10px"}}
                                    id="hdd" value={this.state.config.hdd}
                                    onChange={this.handleChange} name="hdd"
                                    >
                                        <option value="0">Hdd</option>
                                        {this.props.Configuration.hdds  && this.props.Configuration.hdds.map((item)=>{
                                            return <option value={item.price}>{item.type}</option>
                                        })}
                                    </select>
                                    </div>
                                    <div>
                                    <select style={{width:"auto",marginTop:"10px"}}
                                    id="color" value={this.state.config.color}
                                    onChange={this.handleChange} name="color"
                                    >
                                        <option value="0">Color</option>
                                        {this.props.Configuration.colors  && this.props.Configuration.colors.map((item)=>{
                                            return <option value={item.price}>{item.type}</option>
                                        })}
                                    </select>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </td>
                        <td> <br></br> <br></br>
                        <h5 className="card-title"> 
                                            <span style={{color:"#565959",fontSize:"14px"}}>  Total: </span> 
                                            <span style={{color:"#B12704",fontSize:"18px"}}> £ {this.state.total}</span>
                                        </h5>
                       
                       <br></br>  <br></br> 
                        <Button  className="btn btn-danger active"  onClick={this.handleAddCart} startIcon={<AddShoppingCartIcon></AddShoppingCartIcon>}>Add to cart</Button>
                        </td>
                   </tr>
                </table>:""}
        </div> );
    }
}
 

const mapStateToProps = (state) => {
    return {
        laptop :state.home.Laptop,
        Configuration: state.home.Configuration
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (laptop) => dispatch(actions.AddToCart(laptop)),
        onLaptopLoad: (id) => dispatch(actions.GetLaptopsById(id)),
        onConfiguraionLoad: () => dispatch(actions.GetConfiguraion()),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
  