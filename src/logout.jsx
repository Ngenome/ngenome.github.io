import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { CsButton } from "./title.jsx";
import axios from "axios";
import { gsap } from "gsap";
import updateToken from "../actions/index.js";
import {logout} from '../actions/index'  
export const LogoutPage=()=>{
  const dispatch = useDispatch()
  
    return(
         <div className="logout">
         <div className='main'>

             <span className='logout_span'>Do  you really want to Log out?</span>
           <button onClick={()=>{
           
             location.replace('/');
             dispatch(logout);
             
           }}className="logout_button">
             <span>  Log out</span>
           </button>
</div>
         </div>
    )
}