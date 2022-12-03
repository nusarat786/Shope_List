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


export const filtershops_area = (main_shops, area) => {

  console.log(main_shops.filter((x) => x.area.includes(area)))
  return{
    type: ActionTypes.FILTER_BY_AREA,    
    payload: {
      area: area,
      shops:
        area === ""
          ? main_shops
          : main_shops.filter(
              (shope) => shope.area.includes(area)               
            ),
    },
  };
};



export const filtershops_category = (main_shops, category) => {

  console.log(main_shops.filter((x) => x.area.includes(category)))
  return{
    type: ActionTypes.FILTER_BY_CATEGORY,    
    payload: {
      category: category,
      shops:
        category === ""
          ? main_shops
          : main_shops.filter(
              (shope) => shope.category.includes(category)               
            ),
    },
  };
};

export const filtershops_status = (main_shops, status) => {

  console.log(main_shops.filter((x) => x.area.includes()))
  var time = new Date().getTime()
  console.log(time)
  return{
    type: ActionTypes.FILTER_BY_STATUS,    
    payload: {
      status: status,
      shops:
        status === ""
          ? main_shops
          : main_shops.filter(
            function(shop){
              switch(status){
              
              case "close":
                  return  !((shop.opening_date < time) && (  time < shop.closing_date));
                
              case "open":
                  return ((shop.opening_date < time) && (  time < shop.closing_date));
              
              
              }
              }         
            ),
    },
  };
};



