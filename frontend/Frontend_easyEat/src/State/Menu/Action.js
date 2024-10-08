import {api} from "../../components/config/api"
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType";


export const createMenuItem =({menu,jwt})=>{
  return async (dispatch)=>{
    dispatch({type: CREATE_MENU_ITEM_REQUEST});

    try{
      const {data} = await api.post(`/api/admin/food`,menu,
        {
        headers:{
          Authorization: `Bearer ${jwt}`
        },
      });
      console.log("created menu",data );
      dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data});
      

    } catch(error){
      console.log(error);
      dispatch({type:CREATE_MENU_ITEM_FAILURE,payload:error})
    }
  };
};

export const getMenuItemsByRestaurantId =(reqdata)=>{
  return async (dispatch)=>{
    dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST});

    try{
      const {data} = await api.get(`/api/food/restaurant/${reqdata.restaurantId}?vegetarian=${reqdata.vegetarian}&nonveg=${reqdata.nonveg}&seasonal=${reqdata.seasonal}&food_category=${reqdata.foodCategory}`,
        {
        headers:{
          Authorization: `Bearer ${reqdata.jwt}`
        },
      });
      console.log("getMenuItemsByRestaurantId callled")
      console.log("menu items by restaurantsssssssssssssss",data );
      dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,payload:data});
      

    } catch(error){
      console.log("error===========".error);
      dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,payload:error})
    }
  };
};

export const searchMenuItem =({keyword,jwt})=>{
  return async (dispatch)=>{
    dispatch({type: SEARCH_MENU_ITEM_REQUEST});

    try{
      const {data} = await api.get(`/api/food/search?name=${keyword}`,
        {
        headers:{
          Authorization: `Bearer ${jwt}`
        },
      });
      console.log("data------",data );
      dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});
      

    } catch(error){
      console.log(error);
      dispatch({type:SEARCH_MENU_ITEM_FAILURE,payload:error})
    }
  };
};


// export const getAllIngredientsOfMenuItem =(reqdata)=>{
//   return async (dispatch)=>{
//     dispatch({type:GET_});

//     try{
//       const {data} = await api.get(`/api/food/search?name=${keyword}`,
//         {
//         headers:{
//           Authorization: `Bearer ${jwt}`
//         },
//       });
//       console.log("data------",data );
//       dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});
      

//     } catch(error){
//       console.log(error);
//       dispatch({type:SEARCH_MENU_ITEM_FAILURE,payload:error})
//     }
//   };
// };

export const updateMenuItemAvailability =({foodId,jwt})=>{
  return async (dispatch)=>{
    dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST});

    try{
      const {data} = await api.put(`/api/admin/food/${foodId}`,{},
        {
        headers:{
          Authorization: `Bearer ${jwt}`
        },
      });
      console.log("update menu Items Availability ",data );
      dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,payload:data});
      

    } catch(error){
      console.log(error);
      dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,payload:error})
    }
  };
};

export const deleteFoodAction =({foodId,jwt})=>{
  return async (dispatch)=>{
    dispatch({type: DELETE_MENU_ITEM_REQUEST});

    try{
      const {data} = await api.delete(`/api/admin/food/${foodId}`,
        {
        headers:{
          Authorization: `Bearer ${jwt}`
        },
      });
      console.log("dlete food ",data );
      dispatch({type:DELETE_MENU_ITEM_SUCCESS,payload:data});
      

    } catch(error){
      console.log(error);
      dispatch({type:DELETE_MENU_ITEM_FAILURE,payload:error})
    }
  };
};