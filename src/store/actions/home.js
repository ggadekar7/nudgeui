import * as actionsTypes from "./actionTypes";
import axios from "axios";
export const GetLaptopsSuccess = (Laptops) => {
  return {
    type: actionsTypes.GET_LAPTOPS,
    Laptops: Laptops,
  };
};

 
export const GetLaptops = () => {
  return (dispatch) => {
    const data = {
    };
    let url = "http://localhost:5000/api/LaptopShop/laptops";

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .get(url, {
        headers: headers,
      })
      .then((response) => {
        console.log(response)
       dispatch(GetLaptopsSuccess(response.data.laptops));
      })
      .catch((err) => {
        if (err.code === 1) {
          err.message = "Please add menu.";
        }
        console.log(err.message)
      });
  };
};
 


export const GetConfiguraionSuccess = (Configuration) => {
  return {
    type: actionsTypes.GET_CONFIGURATION,
    Configuration: Configuration,
  };
};

 
export const GetConfiguraion = (id) => {
  return (dispatch) => {
    const data = {
    };
    let url = "http://localhost:5000/api/LaptopShop/configurations";

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .get(url, {
        headers: headers,
      })
      .then((response) => {
        console.log("Confi")
        console.log(response.data)
       dispatch(GetConfiguraionSuccess(response.data));
      })
      .catch((err) => {
        if (err.code === 1) {
          err.message = "Please add menu.";
        }
        console.log(err.message)
      });
  };
};
 



export const GetLaptopsByIdSuccess = (laptop) => {
  return {
    type: actionsTypes.GET_LAPTOPBYID,
    laptop: laptop,
  };
};

export const GetLaptopsById = (id) => {
  return (dispatch) => {
    const data = {
    };
    let url = "http://localhost:5000/api/LaptopShop/laptops/"+id;

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .get(url, {
        headers: headers,
      })
      .then((response) => {
       dispatch(GetLaptopsByIdSuccess(response.data));
      })
      .catch((err) => {
        if (err.code === 1) {
          err.message = "Please add menu.";
        }
        console.log(err.message)
      });
  };
};

export const AddToCartSuccess = (laptop) => {
  return {
    type: actionsTypes.ADD_CART_SUCCESS,
    laptop: laptop,
  };
};

export const AddToCartFail = (error) => {
  return {
    type: actionsTypes.ADD_CART_FAIL,
    error: error,
  };
};

export const AddToCart = (laptop) => {
return (dispatch) => {
  const data = {
    shoppingCart: laptop,
  };
  let url = "http://localhost:5000/api/LaptopShop/laptop/addcart";
console.log(JSON.stringify(data))
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  axios
    .post(url,  laptop  , {
      headers: headers,
    })
    .then((response) => {
      dispatch(AddToCartSuccess(response.data));
    })
    .catch((err) => {
      if (err.code === 1) {
        err.message = "Add cart fail!";
        dispatch(AddToCartFail(err));
      }
      //(fetchSubMenuFail(err));
    });
};
}





export const GetShoppingCartSuccess = (ShoppingCart) => {
  return {
    type: actionsTypes.GET_SHOPPING_CART,
    ShoppingCart: ShoppingCart,
  };
};

 
export const GetShoppingCart = () => {
  return (dispatch) => {
    const data = {
    };
    let url = "http://localhost:5000/api/LaptopShop/shoppingcart";

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .get(url, {
        headers: headers,
      })
      .then((response) => {
       dispatch(GetShoppingCartSuccess(response.data));
      })
      .catch((err) => {
        if (err.code === 1) {
          err.message = "Please add menu.";
        }
        console.log(err.message)
      });
  };
};
 


export const DbCreateSuccess = (ShoppingCart) => {
  
};
export const DbCreate = (laptop) => {
  return (dispatch) => {
    const data = {
    };
    let url = "http://localhost:5000/api/LaptopShop/createdatabase";
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .post(url  , {
        headers: headers,
      })
      .then((response) => {
        dispatch(DbCreateSuccess(response.data));
      })
      .catch((err) => {
        if (err.code === 1) {
          err.message = "Add cart fail!";
          //dispatch(AddToCartFail(err));
        }
        //(fetchSubMenuFail(err));
      });
  };
  }


  
export const CartItemRemovedSuccess = (id) => {
  return {
    type: actionsTypes.DEL_SHOPPING_CART_ITEM,
    id: id,
  };
};
export const CartItemRemoved = (id) => {
  return (dispatch) => {
    const data = {
    };
    let url = "http://localhost:5000/api/ShoppingCart/deletecartitem?id="+id;
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .delete(url  , {
        headers: headers,
      })
      .then((response) => {
          dispatch(CartItemRemovedSuccess(id));
      })
      .catch((err) => {
        if (err.code === 1) {
          err.message = "Add cart fail!";
          //dispatch(AddToCartFail(err));
        }
        //(fetchSubMenuFail(err));
      });
  };
 
  }
  


  

  
export const AddLaptopSuccess = (Laptops) => {
  return {
    type: actionsTypes.ADD_NEW_LAPTOP_SUCCESS,
    Laptops: Laptops,
  };
};

export const AddLaptopFail = (error) => {
  return {
    type: actionsTypes.ADD_NEW_LAPTOP_FAIL,
    error: error,
  };
};

export const AddLaptop = (laptop) => {
return (dispatch) => {
  const data = {
  };
  let url = "http://localhost:5000/api/LaptopShop/laptop/add";
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  axios
    .post(url,  laptop  , {
      headers: headers,
    })
    .then((response) => {
      dispatch(AddLaptopSuccess(response.data.laptops));
    })
    .catch((err) => {
      if (err.code === 1) {
        err.message = "Add cart fail!";
        dispatch(AddLaptopFail(err));
      }
      //(fetchSubMenuFail(err));
    });
};
}






export const AddConfiguraionSuccess = (type,Config) => {
  return {
    type: actionsTypes.ADD_NEW_CONFIG,
    Config: Config,
    ctype:type
  };
};

// export const AddLaptopFail = (error) => {
//   return {
//     type: actionsTypes.ADD_NEW_LAPTOP_FAIL,
//     error: error,
//   };
// };

export const AddConfiguraion = (type,Config) => {
return (dispatch) => {
 
  const data = {
  };
  let url = "";
  if(type === "RAM"){
    url = "http://localhost:5000/api/LaptopShop/ram/add";
  }else   if(type === "HDD"){
    url = "http://localhost:5000/api/LaptopShop/hdd/add";
  }else   if(type === "COLOR"){
    url = "http://localhost:5000/api/LaptopShop/color/add";
  }
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  axios
    .post(url,  Config  , {
      headers: headers,
    })
    .then((response) => {
         let url = "http://localhost:5000/api/LaptopShop/configurations";
         axios
           .get(url, {
             headers: headers,
           })
           .then((response) => {
            dispatch(GetConfiguraionSuccess(response.data));
           })
           .catch((err) => {
             if (err.code === 1) {
               err.message = "add.";
             }
             console.log(err.message)
           });
    })
    .catch((err) => {
      if (err.code === 1) {
        err.message = "Add cart fail!";
        // dispatch(AddConfiguraionFail(err));
      }
    });
};
}

// export const AddLaptopFail = (error) => {
//   return {
//     type: actionsTypes.ADD_NEW_LAPTOP_FAIL,
//     error: error,
//   };
// };

export const DeleteConfiguraion = (Ctype,id) => {
return (dispatch) => {
  let url = "http://localhost:5000/api/LaptopShop/deleteconfiguration/"+Ctype+"/"+id+"";
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  axios
    .delete(url  , {
      headers: headers,
    })
    .then((response) => {
         let url = "http://localhost:5000/api/LaptopShop/configurations";
         axios
           .get(url, {
             headers: headers,
           })
           .then((response) => {
            dispatch(GetConfiguraionSuccess(response.data));
           })
           .catch((err) => {
             if (err.code === 1) {
               err.message = "add.";
             }
             console.log(err.message)
           });
    })
    .catch((err) => {
      if (err.code === 1) {
        err.message = "Add cart fail!";
        // dispatch(AddConfiguraionFail(err));
      }
    });
};
}