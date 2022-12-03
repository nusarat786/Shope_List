import React, { useState ,useEffect } from 'react';
import DatePicker from "react-datepicker";
import DateTimePicker from 'react-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
//import {setProducts} from '../redux/actions/shopeActions'
import moment from 'moment'
import shortid from 'shortid'

import {add_shope} from '../redux/actions/shopeActions'
function Add_Shope() {
   
  
  const [openingdate, Setopeningdate] = useState(new Date());
  const [colsingdate, SetclosingDate] = useState(new Date());


  const [ShopeName, setShopeName] = useState("");
  const [Area, setArea] = useState("");
  const [Category, setCategory] = useState("");
  
  const shops = useSelector((state) => state)
  
  function onlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]*$/.test(str);
  }



  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();

    if(onlyLettersAndSpaces(ShopeName)){

     //var id = shops.allshops.products.length + 1

     var Shope_Obj = {

      id: shortid.generate() , 
      name: ShopeName , 
      area: Area, 
      category: Category, 
      opening_date: openingdate.getTime() , 
      closing_date:colsingdate.getTime()
      
    }
    dispatch(add_shope(Shope_Obj))
      alert("Shope Added")

    

    }else{
      alert("Name Can Contain Alphabates Only")
    }

    
   
  }

  




  return (
    <>

    <div className='my-5'> 
            <h1 className='text-center'> Add Shope</h1>
    </div>

    <div className='row'>
      <div className='col-md-6 col-10 mx-auto'>
      <form onSubmit={handleSubmit}>
    
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Shope Name</label>
      <input 
      required 
      type="text"
      class="form-control" 
      id="exampleFormControlInput1" 
      placeholder="Babul Grocery"
      name="Shope Name"
      onKeyPress={event => (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)}
      onChange={(event) => {
      setShopeName(event.target.value);
      }}
      value={ShopeName}
      
      />
    
    </div>
    
    <div class="mb-3">
    <label for="validationCustom04" class="form-label">Area</label>
    <select 
    required 
    class="form-select" 
    id="validationCustom04" 
    name='Area'
    value={Area}
    onChange={(event) => {
      setArea(event.target.value);
      }}
    
    >
      <option selected disabled value="">Choose...</option>
      <option value="Thane">Thane</option>
      <option value="Pune">Pune</option>
      <option value="Mumbai Suburban">Mumbai Suburban</option>
      <option value="Nashik">Nashik</option>
      <option value="Nagpur">Nagpur</option>
      <option value="Ahmednagar">Ahmednagar</option>
      <option value="Solapur">Solapur</option>
      
    </select>
    <div class="invalid-feedback">
      Please select a valid Area.
    </div>
    </div>

    <div class="mb-3">
    <label for="validationCustom04" class="form-label">Category</label>
    <select 
    required 
    class="form-select" 
    id="validationCustom04" 
    name='Area'
    value={Category}
    onChange={(event) => {
      setCategory(event.target.value);
      }}
    
    
    >
      <option selected disabled value="">Choose...</option>
      <option value="Grocery">Grocery</option>
      <option value="Butcher">Butcher</option>
      <option value="Baker">Baker</option>
      <option value="Chemist">Chemist</option>
      <option value="Stationery">Stationery</option>
    
      
    </select>
    <div class="invalid-feedback">
      Please select a valid Category.
    </div>
    </div>

    <div class="row g-3">
      
      <div class="col-auto">
      <label for="exampleFormControlInput1" class="form-label">Starting Date  :</label>  
      <DateTimePicker
      format='dd/MM/yyyy'  
      disableClock='true'
      clearIcon={null}
      name="Starting Date"
      onChange={Setopeningdate} 
      value={openingdate}
      required
      minDate={new Date()}
      >
      </DateTimePicker> 
      </div>

      <div class="col-auto">
      <label for="exampleFormControlInput1" class="form-label">Closing Date  :  </label>  
      <DateTimePicker
      format='dd/MM/yyyy'  
      disableClock='true'
      clearIcon={null}
      name='Closing Date'
      onChange={SetclosingDate} 
      value={colsingdate}
      required
      minDate={openingdate}
      >
        </DateTimePicker>

      </div>

     

      </div>
      <br/>

      <div class="mb-3">
        
        <button type="submit" class="btn btn-primary mb-3">Add Shope</button>
    
      </div> 
      

  
    </form>


      </div>

      



    </div>
    
    </>
  );
}

export default Add_Shope;