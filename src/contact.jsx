import React from 'react';
import ReactDOM from 'react-dom';
import {CsButton} from './title.jsx';
import axios from 'axios';
import {gsap } from 'gsap';
const Icon= (props)=>{

    return(
        <div className='icon-div '> 
         <i className={props.fm}></i>


        </div>
    )
} 
const Display=(props)=>{
    return(
        <div className='display'>
        <div className='top_display'>
        
        <Icon fm={props.fm}/>
        <h3>{props.desc}</h3>
        
        </div>
            <h4>{props.det}</h4>
        </div>    
               )
}

export const Contact=()=>{
    return(

        <div className='contact-page'>
        <h1 className='contact-title'>If you want to reach us </h1> 
        <div>
       <Display fm='fab fa-whatsapp' desc='Whatsapp'/>
       <Display fm='fab fa-facebook' desc='Facebook'/>
       <Display fm='fas fa-envelope' desc='Mail'/>
       <Display fm='fab fa-twitter' desc='Twitter'/>
       <Display fm='fas fa-phone' desc='Call us'/>

        </div>
        </div>
    )
}