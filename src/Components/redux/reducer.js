






//reducer 
// access => state , action
// state => edit by action

import { json } from "react-router-dom";
import { add100, addProduct , addFavorite, deleteProduct, removeFavorite } from "./Actions/action-types";

const intialstate = {
    cartTotalQuantity : 0,
    cartTotalAmount : 0, 
}

let cartID = JSON.parse(localStorage.getItem("productsID"))||[];
let favoID = JSON.parse(localStorage.getItem("favoID")) || [];



const reducer1 = (state = {x1 : 0} , action)=>{
    switch (action.type) {  
        case add100:
        {
            localStorage.setItem("key" , action.value);
            return {...state , x1 : action.value}
        }
        case addProduct:
        {
            const c = cartID.find((obj) => {return obj === action.id});
            if(c===undefined)
            {
                cartID.push(action.id);
                localStorage.setItem("productsID",JSON.stringify(cartID))
            }
            return {...state}
        }
        case deleteProduct:
        {
            const c = cartID.findIndex((obj)=>{return obj === action.index});
            if (c!==-1) {
                cartID.splice(c,1);
                localStorage.setItem("productsID" , JSON.stringify(cartID))
            }
            return {...state}
        }     
        case addFavorite:
            {
                const c = favoID.find((obj) => {return obj === action.id});
                if(c===undefined)
                {
                    favoID.push(action.id);
                    localStorage.setItem("favoID",JSON.stringify(favoID))
                }
                return {...state}
            }
        case removeFavorite:
            {
                const c = favoID.findIndex((obj)=>{return obj === action.index});
                if (c!==-1) {
                    favoID.splice(c,1);
                    localStorage.setItem("favoID" , JSON.stringify(favoID))
                }
                return {...state}
            }          
        default:
            return state;
    }
}
export default reducer1;

