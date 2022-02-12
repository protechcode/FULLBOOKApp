import { React, useState } from 'react';
import axios from 'axios';
import './Admin.css'

function Microservices() {
    const [usersLength, setUserLength] = useState();
    const [itemsLength, setItemLength] = useState();
    const [cartsLength, setCartLength] = useState();
    async function get_users(){
        await axios.get("http://localhost:4000/api/users")
        .then(res=>{
            const data = res.data;
            console.log(data)
            const len = data.length;
            setUserLength(len)
        })
    }
    async function get_items(){
        await axios.get("http://localhost:4000/api/items")
        .then(res=>{
            const data = res.data;
            console.log(data)
            const len = data.length;
            setItemLength(len)
        })
    }
    async function get_carts(){
        await axios.get("http://localhost:4000/api/carts")
        .then(res=>{
            const data = res.data;
            console.log(data)
            const len = data.length;
            setCartLength(len)
        })
    }

  return(
      <div id="micro-services">
          <button onClick={()=>{get_users(); get_items();get_carts()}}>Get Stats </button>
          <h1>Microservices</h1>
          <div id="square">
            <p>Users in db: {usersLength}</p>
          </div>
          <div id="square">
            <p>items in db: {itemsLength}</p>
          </div>
          <div id="square">
            <p>Carts in db: {cartsLength}</p>
          </div>

      </div>
  );
}
export default Microservices