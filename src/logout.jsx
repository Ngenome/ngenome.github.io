import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { CsButton } from "./title.jsx";
import axios from "axios";
import { gsap } from "gsap";
import updateToken, {change} from "../actions/index.js";
import {logout} from '../actions/index'  
export const LogoutPage=()=>{
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(change('logout'))
  },[])
    return(
         <div className="logout">
         <div className='main'>

             <span className='logout_span'>Do  you really want to Log out?</span>
           <button onClick={()=>{
             dispatch(logout);
             location.replace('/');
             if (typeof(Storage) !== "undefined") {
             try{
               localStorage.removeItem("jipasToken");
               
             }catch(e){
               console.log(e)
             }
} else {
  // Sorry! No Web Storage support..
}

             
             
             
           }}className="logout_button">
             <span>  Log out</span>
           </button>
</div>
         </div>
    )
}