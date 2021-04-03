import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import  classes  from './AddConfiguration.module.css'
class AddConfiguration extends Component {
    state = { config:"",type:"",price:""}

    componentDidMount(){
      this.props.onConfiguraionLoad();
    }
    handleDelete = (Ctype,id) => {
      //Delete main menu - Delete Content -> Delete Sub Menues -> Delete Main Menu.
      if(window.confirm('Are you sure to delete this record?')){
           this.props.onConfigDelete(Ctype,id);
      } 
  }
  handleChange = (e) => {
    this.setState({[e.target.name]:  e.target.value})   
  }
  handleAdd = () =>{
    var pat = /^[+-]?\d+(\.\d+)?$/ ;
    if(!pat.test(this.state.price)){
      alert("Invalid price");
      return;
    }
    if(this.state.config.trim() === "RAM"){
      const ram = [...this.props.Configuration.rams];
      let index =ram.map(x => x.type).indexOf(this.state.type.trim())
      if(index !== -1){
        alert("RAM exits in database.")
      }else{
       const Config  = {
         Type:  this.state.type.trim(),
         Price: this.state.price.trim()
       }
       this.props.onConfiguraionSave(this.state.config,Config);
      }
    }else  if(this.state.config.trim() === "HDD"){
      const hdd = [...this.props.Configuration.hdds];
      let index =hdd.map(x => x.type).indexOf(this.state.type.trim())
      if(index !==  -1){
        alert("Hdd exits in database.")
      }else{
        const Config  = {
          type:  this.state.type.trim(),
          price: this.state.price.trim()
        }
        this.props.onConfiguraionSave(this.state.config,Config);
      }
      
    }else if(this.state.config.trim() === "COLOR"){
      const color = [...this.props.Configuration.colors];
      let index =color.map(x => x.type).indexOf(this.state.type.trim())
      if(index !== -1){
        alert("Color exits in database.")
      }else{
        const Config  = {
          Type:  this.state.type.trim(),
          Price: this.state.price.trim()
        }
        this.props.onConfiguraionSave(this.state.config,Config);
        this.props.history.push('/addconfiguration')
      }
    }
    
  }

  componentDidUpdate(prevProps,prevState){
    if( prevState.type !== this.state.type){
      console.log("componentWillMount")
      this.props.onConfiguraionLoad();
    }
  }
    render() { 
        return (<div style={{margin:"0 auto",width:"100%"}}>
          <h6>ADD NEW CONFIGURATION</h6>
              <div className={classes.row} style={{margin:"0 auto",width:"100%"}}>
              <div className={classes.column2} >
                <table> 
                  <tr>
                    <td>
                      <select name="config" value={this.state.config} onChange={this.handleChange}>
                      <option value=""> -- </option> 
                      <option value="RAM"> RAM</option> 
                      <option value="HDD"> HDD</option> 
                      <option value="COLOR"> COLOR</option>
                      </select>
                    </td>
                    <td><input  name="type" value={this.state.type} onChange={this.handleChange}></input></td>
                    <td><input  name="price" value={this.state.price} onChange={this.handleChange}></input> 
                        <button onClick={this.handleAdd}>Add</button>
                    </td>
                  </tr>
                  </table>
                  </div>
                  </div>
                  <div className={classes.row}>
                    <div className={classes.column} >
                      <h5>RAM</h5>
                      <table className="table">
                        <thead>
                          <tr><th>Type</th><th>Price</th><th></th></tr>
                        </thead>
                          {this.props.Configuration.rams  && this.props.Configuration.rams.map((item)=>{
                              return <tr><td>{item.type}</td><td>{item.price}</td>
                              <td>
                              <button onClick={() => this.handleDelete("RAM",item.id)}  style={{color:"red"}} className="btn btn-link" data-toggle="tooltip" data-placement="top" title="Delete">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                </td></tr> 
                            })}
                           
                        </table>
                    </div>
                    <div className={classes.column}  >
                     <h5>HDD</h5>
                      <table className="table">
                        <thead>
                          <tr><th>Type</th><th>Price</th><th></th></tr>
                        </thead>
                          {this.props.Configuration.hdds  && this.props.Configuration.hdds.map((item)=>{
                              return <tr><td>{item.type}</td><td>{item.price}</td>
                              <td>
                              <button onClick={() => this.handleDelete("HDD",item.id)}  style={{color:"red"}} className="btn btn-link" data-toggle="tooltip" data-placement="top" title="Delete">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                              </td></tr> 
                            })}
                        </table>
                    </div>
                    <div className={classes.column}  >
                    <h5>COLOR</h5>
                      <table className="table">
                        <thead>
                          <tr><th>Type</th><th>Price</th><th></th></tr>
                        </thead>
                          {this.props.Configuration.colors  && this.props.Configuration.colors.map((item)=>{
                              return <tr><td>{item.type}</td><td>{item.price}</td><td>
                                 <button onClick={() => this.handleDelete("COLOR",item.id)}  style={{color:"red"}} className="btn btn-link" data-toggle="tooltip" data-placement="top" title="Delete">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                
                                </td></tr> 
                            })}
                        </table>
                    </div>
                  </div>
        </div>  );
    }
}
const mapStateToProps = (state) => {
    return {
      Configuration: state.home.Configuration
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      onConfigDelete:(Ctype,id) => dispatch(actions.DeleteConfiguraion(Ctype,id)),
      onConfiguraionSave:(type,Config) => dispatch(actions.AddConfiguraion(type,Config)),
      onConfiguraionLoad: () => dispatch(actions.GetConfiguraion()),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(AddConfiguration);
  