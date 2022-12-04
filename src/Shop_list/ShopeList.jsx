
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {delete_shope , add_to_filter , filtershops_all} from '../redux/actions/shopeActions'

function ShopeList(props) {

  const[category,setCategory] = useState("")
  const[area,setArea]=useState("")
  const[status,setStatus]=useState("")


  var shops = useSelector((state) => {
    return state.shops_red.shops
  })

  console.log(shops)
  

  var filered_shops = useSelector((state) => {
    return state.shops_red.filtered_shops
  })


  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(add_to_filter(shops))
   
  }, [dispatch,shops]);



  useEffect(() => {
    
    dispatch(filtershops_all(shops,area,category,status))
   
  }, [dispatch,area,category,status,shops]);




  let itemList = filered_shops.map(shop=>{
    return(
      <div className='col-md-4 col-10 mx-auto '>
        <div className="card" key={shop.id}>
                <h4 class="fw-bold mx-auto my-2">{shop.name}</h4>
              <div class="p-5" bg-light>
                <p className='text-center'>Area: {shop.area}</p>
                <p className='text-center'>Category: {shop.category}</p>
                <p className='text-center'>Start Date: {new Date(shop.opening_date).toLocaleDateString()}</p>
                <p className='text-center'>Close Date: {new Date(shop.closing_date+1).toLocaleDateString()}</p>
              </div>
              <div class="mb-3 mx-auto">
                    <button 
                    onClick={()=>{
                      if ( window.confirm("It Will Delete The Shope !!") === true) {
                        dispatch(delete_shope(shop.id))
                      } 
                    }} 
                    class="btn btn-primary mb-3">
                      
                      Delete Shope
                  
                    </button>
    
              </div> 
         </div>
         </div>
        
    )



})





  return (

    
    
    <div className="container">
        <br/>
        <h1 className='text-center'> Shope List</h1>
   
        
        <div class="row g-3">
        
        <div class="col-4"> 
        <label for="validationCustom04" class="form-label">Category</label>
        <select 
        
        class="form-select" 
        id="validationCustom04" 
        name='Area'
        onChange={(event) => {
          setCategory(event.target.value)
    
        }}
    
    
    >
      <option selected value="">Category</option>
      <option value="Grocery">Grocery</option>
      <option value="Butcher">Butcher</option>
      <option value="Baker">Baker</option>
      <option value="Chemist">Chemist</option>
      <option value="Stationery">Stationery</option>
    
      
    </select>
    </div>
        <div class="col-4"> 

        <label for="validationCustom04" class="form-label">Area</label>
    <select 
    class="form-select" 
    id="validationCustom04" 
    name='Area'
    onChange={(event) => {

      setArea(event.target.value)



      }}
    
    >
      <option selected value="">Area</option>
      <option value="Thane">Thane</option>
      <option value="Pune">Pune</option>
      <option value="Mumbai Suburban">Mumbai Suburban</option>
      <option value="Nashik">Nashik</option>
      <option value="Nagpur">Nagpur</option>
      <option value="Ahmednagar">Ahmednagar</option>
      <option value="Solapur">Solapur</option>
      
    </select>



        </div>

        <div class="col-4"> 

        <label for="validationCustom04" class="form-label">Status</label>
    <select 
    class="form-select" 
    id="validationCustom04" 
    name='Area'
    onChange={(event) => {
      setStatus(event.target.value)

      }}
    
    >
      <option selected value="">Status</option>
      <option value="open">Open</option>
      <option value="close">Close</option>
      
      
      
    </select>

      </div>

      </div>

      <br/>
         <center>
                <div className="row  gy-4">
                    {itemList}
                </div>
          </center>
     </div>
  );
}

export default ShopeList;