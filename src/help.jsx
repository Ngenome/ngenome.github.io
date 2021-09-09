import React from 'react';
import ReactDOM from 'react-dom';
import {CsButton} from './title.jsx';
import axios from 'axios';
import {gsap } from 'gsap';
import {useSelector,useDispatch} from 'react-redux'
import {changePage} from '../actions/index'
//const dispatch=useDispatch()
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
  const [visible,setVisible]=React.useState(0)
  const dispatch =useDispatch()
  dispatch(changePage('contact'))
  React.useEffect(()=>{
   gsap.to('.fa-paper-plane',{
     rotate:1.7,
     yoyo:true,
     duration:5,
     repeat:-1,
     ease:'sine.inOut'
   })
  },[])
  
  React.useEffect(()=>{
    if(visible==1){
   gsap.to('.pop',{
     display:'flex',
    
     duration:1,
     
     
   })}else{
     gsap.to('.pop', {
       display:'none',
     
       duration: 1,
     
     
     })
   }
     
   
  },[visible])
    return (
      <div className="contact-page">
        <h1 className="contact-title">Help Center </h1>
        <div className="help">
          <h3>
            Here you can find a list of frequently asked questions. If none of
            them answers your questions, feel free to contact us.
          </h3>
          <div className="faqs"></div>
          <div className="cannot">
            <h3> Cannot find what you're looking for?</h3>
             <Link to='/contact' >
               Contact us
             </Link>
          </div>
        </div>
      </div>
    );
}