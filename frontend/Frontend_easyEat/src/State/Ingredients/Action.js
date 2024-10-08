import {api} from "../../components/config/api"
import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, UPDATE_STOCK } from "./ActionType";




export const getIngredientsOfRestaurant =({id,jwt})=>{
  return async (dispatch)=>{
    

    try{
      
      const response = await api.get(`/api/admin/ingredients/${id}`, 
        {
        headers:{
          Authorization: `Bearer ${jwt}`
        },
      });

 

      console.log("get All Ingredients", response.data)
      
      dispatch({type:GET_INGREDIENTS,payload:response.data});
      

    } catch(error){
      console.log(error);
      
    }
  };
};


export const createIngredients =({data,jwt})=>{
  return async (dispatch)=>{
    

    try{
      
      const response = await api.post(`/api/admin/ingredients}`, data,
        {
        headers:{
          Authorization: `Bearer ${jwt}`
        },
      });

 

      console.log("create Ingredients", response.data)
      
      dispatch({type:CREATE_INGREDIENT_SUCCESS,payload:response.data});
      

    } catch(error){
      console.log(error);
      
    }
  };
};


export const createIngredientCategory =({data,jwt})=>{
  console.log("data ",data ,"jwt ",jwt)
  return async (dispatch)=>{
    

    try{
      
      const response = await api.post(`/api/admin/ingredients/category`, data,
        {
        headers:{
          Authorization: `Bearer ${jwt}`
        },
      });

 

      console.log("create  Ingredients category", response.data)
      
      dispatch({type:CREATE_INGREDIENT_CATEGORY_SUCCESS,payload:response.data});
      

    } catch(error){
      console.log(error);
      
    }
  };
};


export const getIngredientCategory =({id,jwt})=>{
 
  return async (dispatch)=>{
    

    try{
      
      const response = await api.get(`/api/admin/ingredients/restaurant/${id}/category`, 
        {
        headers:{
          Authorization: `Bearer ${jwt}`
        },
      });

 

      console.log("get  Ingredients category", response.data)
      
      dispatch({type:GET_INGREDIENT_CATEGORY_SUCCESS,payload:response.data});
      

    } catch(error){
      console.log(error);
      
    }
  };
};

export const updateStockOgIngredient =({id,jwt})=>{
 
  return async (dispatch)=>{
    

    try{
      
      const {data} = await api.put(`/api/admin/ingredients/${id}/stoke`, {},
        {
        headers:{
          Authorization: `Bearer ${jwt}`
        },
      });

 

      console.log("update  Ingredients stock ", data)
      
      dispatch({type:UPDATE_STOCK,payload:data});
      

    } catch(error){
      console.log(error);
      
    }
  };
};