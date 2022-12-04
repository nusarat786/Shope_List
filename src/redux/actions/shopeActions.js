import { ActionTypes } from "../constants/action-types";


export const add_shope = (data) => {
  return {
    type: ActionTypes.ADD_SHOPE,
    payload: data,
  };
};


export const delete_shope = (id) => {
  return {
    type: ActionTypes.DELETE_SHOPE,
    id:id
  };
};

export const add_to_filter = (data) => {
  return {
    type: ActionTypes.ADD_TO_FILTER,
    payload:data
  };
};


export const filtershops_all = (main_shops,area,category,status) => {

  function check_status(status, shop){

    switch(status){
                
      case "close":
          return  !((shop.opening_date < time) && (  time < shop.closing_date));
        
      case "open":
          return ((shop.opening_date < time) && (  time < shop.closing_date));
      
      default:
        return shop
      }
  
  }

  console.log(main_shops.filter((x) => x.area.includes()))
  var time = new Date().getTime()
  console.log(time)
  return{
    type: ActionTypes.FILTER_MAIN,    
    payload: {
      status: status,
      category: category,
      area: area,
      shops:
        status === "" && category === "" && area === ""
          ? main_shops
          : main_shops.filter(
            function(shop){

              return shop.category.includes(category) && shop.area.includes(area)  &&   check_status(status ,shop)
            
              }         
            ),
    },
  };
};

