import { ActionTypes } from "../constants/action-types";
const intialState = {
  shops: [
    {
        id: "EcNK0b61n",
        name: "Dudheswar Parlour",
        area: "Thane",
        category: "Baker",
        opening_date: 1670051433195,
        closing_date: 1671865833196
    },
    {
        id: "Iaq3ponWl",
        name: "Genreal Store",
        area: "Thane",
        category: "Chemist",
        opening_date: 1670051625097,
        closing_date: 1671779625097
    },
    {
        id: "Wm6bdZ2SO",
        name: "Sadhu Store",
        area: "Ahmednagar",
        category: "Chemist",
        opening_date: 1670051674921,
        closing_date: 1672557274921
    }
    ,

    
],

filtered_shops : [],
area : "",
category:"",
status:""
};



export const ShopeReducer = (state = intialState, action) => {

  console.log(typeof(action.id))
  console.log(state.shops.filter(shope=> shope.area.includes(action.id)))  
  
  switch (action.type) {
    
    case ActionTypes.ADD_SHOPE:
      return { ...state, shops:[...state.shops, action.payload]  };

    case ActionTypes.DELETE_SHOPE:  
       return {...state ,shops: state.shops.filter(shope=> action.id !== shope.id)}  
    
    
    case ActionTypes.FILTER_BY_CATEGORY:
        return{...state,filtered_shops:action.payload.shops,category: action.payload.category} 


    case ActionTypes.FILTER_BY_AREA:
        return{...state,filtered_shops:action.payload.shops,area: action.payload.area}        
    
    case ActionTypes.FILTER_BY_STATUS:
            return{...state,filtered_shops:action.payload.shops,status: action.payload.status}     

       
    case ActionTypes.ADD_TO_FILTER:
            return{...state,filtered_shops:action.payload}          
    
    default:
      return state;
  }
};


