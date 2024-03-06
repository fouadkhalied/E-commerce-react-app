






import React from 'react';
import './header.css';
import { Container } from 'react-bootstrap';
import data from '../Pages/labtopsjson/dell.json'

function Cart() {
   const x = JSON.parse(localStorage.getItem("productsID"));
   var total = 0;
   return (
      <div className='cart-div text-center'>
         <Container>
            <h1 style={{display : x.length > 0 ? 'block' : 'none'}}>
               {
                  x.map((obj)=>{
                     total += data[obj].price
                  })
               }
               Total price is {total}$
            </h1>
            <h1 style={{display : x.length > 0 ? 'none' : 'block'}}>No items to display</h1>
             {
               x.map((obj)=>{
                  return <div className='cart-div-ele'>
                     <img src={data[obj].image} width="350px"/>
                     <div>
                     <h2>Brand : <h3 style={{display : 'inline'}}>{data[obj].brand}</h3></h2>
                     <h2>Model : <h3 style={{display : 'inline'}}>{data[obj].model}</h3></h2>
                     <h2>Price : <h3 style={{display : 'inline'}}>{data[obj].price}$</h3></h2>
                     </div>
                  </div>
               })
             }
         </Container>
      </div>
  );
}




export default React.memo(Cart);