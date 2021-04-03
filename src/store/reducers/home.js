import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {   
  Laptops: [
    {   },
  ],
  Configuration:{},
  Laptop:{},
  error:"",
  ShoppingCart:{},
  Config:{},
};

const GetLaptops = (state, action) => {
  console.log("HOME",action.Laptops)
  const updatedState = {
    Laptops: action.Laptops,
  };
  return updateObject(state, updatedState);
};

const GetConfiguration = (state, action) => {
  const updatedState = {
    Configuration: action.Configuration,
  };
  return updateObject(state, updatedState);
};


const GetLaptopsById = (state, action) => {
  const updatedState = {
    Laptop: action.laptop,
  };
  return updateObject(state, updatedState);
};


const AddToCartSuccess = (state, action) => {
  const updatedState = {
    ShoppingCart: action.laptop,
  };
  return updateObject(state, updatedState);
};

const AddToCartFail = (state, action) => {
  const updatedState = {
    error: action.error,
  };
  return updateObject(state, updatedState);
};

const GetShoppingCartSuccess = (state, action) => {
  const updatedState = {
    ShoppingCart: action.ShoppingCart,
  };
  return updateObject(state, updatedState);
};

const CartItemRemovedSuccess = (state, action) => {
  console.log(state.ShoppingCart)
  const tempShoppingCart = {...state.ShoppingCart};
  const index = tempShoppingCart.laptops.indexOf(m => m.id === action.id);
  tempShoppingCart.laptops.splice(index-1,1);
  const updatedState = {
    ShoppingCart: tempShoppingCart,
  };
  return updateObject(state, updatedState);
};



const AddLaptopSuccess = (state, action) => {
  console.log("Aaaaaaaaaaaaaaaaaaa",action.Laptops)
  const updatedState = {
    Laptops: action.Laptops,
  };
  return updateObject(state, updatedState);
};

const AddLaptopFail = (state, action) => {
  const updatedState = {
    error: action.error,
  };
  return updateObject(state, updatedState);
};

const AddConfiguraionSuccess= (state, action) => {
   if(action.ctype === "RAM"){
    console.log("wwwwwww 1");
    const rams = [...state.Configuration.rams]
    const tConfig = {...action.Config};
    tConfig.id= (rams[rams.length -1].id + 1);
    console.log("wwwwwww 1.1. tConfig",tConfig);
    rams.push(tConfig)
    console.log("wwwwwww 2",rams);
    const tempConfig = {...state.Configuration};
    tempConfig.rams = rams;
    console.log("wwwwwww 3",tempConfig);
    const updatedState = {
      Configuration: tempConfig,
    };
    return updateObject(state, updatedState);
   }else  if(action.ctype === "HDD"){
    const hdds = [...state.Configuration.hdds]
    hdds.push(action.Config)
    const tempConfig = {...state.Configuration};
    tempConfig.hdds = hdds;
    const updatedState = {
      Configuration: tempConfig,
    };
    return updateObject(state, updatedState);
  }else  if(action.ctype === "COLOR"){
    const colors = [...state.Configuration.colors]
    colors.push(action.Config)
    const tempConfig = {...state.Configuration};
    tempConfig.colors = colors;
    const updatedState = {
      Configuration: tempConfig,
    };
    return updateObject(state, updatedState);
  }
    
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LAPTOPS:
      return GetLaptops(state, action);
    case actionTypes.GET_CONFIGURATION:
      return GetConfiguration(state, action);
    case actionTypes.GET_LAPTOPBYID:
      return GetLaptopsById(state, action);
    case actionTypes.ADD_CART_SUCCESS:
      return AddToCartSuccess(state, action);
    case actionTypes.ADD_CART_FAIL:
      return AddToCartFail(state, action); 
    case actionTypes.GET_SHOPPING_CART:
      return GetShoppingCartSuccess(state, action); 
    case actionTypes.DEL_SHOPPING_CART_ITEM:
      return CartItemRemovedSuccess(state, action); 
    case actionTypes.ADD_NEW_LAPTOP_SUCCESS:
      return AddLaptopSuccess(state, action); 
    case actionTypes.ADD_NEW_LAPTOP_FAIL:
        return AddLaptopFail(state, action); 
    case actionTypes.ADD_NEW_CONFIG:
      return AddConfiguraionSuccess(state, action); 
    default:
      return state;
  }
};
export default reducer;
