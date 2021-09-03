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
  React.useEffect(()=>{
   gsap.to('.fa-paper-plane',{
     rotate:1.7,
     yoyo:true,
     duration:5,
     repeat:-1,
     ease:'sine.inOut'
   })
  },[])
    return (
      <div className="contact-page">
        <h1 className="contact-title">Contact us </h1>
        <div>
          <form action="" className="contact-form">
            <div className="wrap"> 
            <label htmlFor="name" id='name-label'>Enter your Name</label>
            <input
            required
              type="text"
              placeholder="Enter your full name here"
              id="name"
            />
</div>
 <div className="wrap"> 
            <label htmlFor="email" id='mail-label'>Email</label>
            <input
            required type="text" placeholder="Enter your email  here" id="mailin" />
            </div>
             <div className="wrap"> 
            <label htmlFor="url" id='web-label'>Website</label>
            <input
              type="url"
             
              placeholder="Enter your website url here"
              id="webin"
            />
            </div>
             <div className="wrap"> 
            <label htmlFor="message" id='message-label'>Message</label>
            <textarea name="message" id="mess-textarea" cols="30" rows="10"/>
</div>
            
            <button  className='submit'type='submit' ><i className='fas fa-paper-plane'></i></button>
          
          </form>
          <div className='lower-contacts' style={{display:'flex', justifyContent:'center'}}>
          <div className='wrap-contact'  style={{display:'flex',
          flexDirection:'column',
          justifyContent:'space-around'}}>
          <div className='c-ds'> <i className='fas fa-envelope'></i>  <a href='mailto:jipasgarments@gmail.com'>Email us</a>
           
          </div>
          
          <div className='c-ds'> 
          <i className='fab fa-whatsapp'></i>
          
          <a href="https://api.whatsapp.com/send?phone=254736886886">
          Send Message 
          </a>
          </div>
          
          <div className='c-ds'> 
                    <i className='fas fa-phone'></i>
                    <a href="tel:0736886886">
                    Call us
                    </a>
                    </div>
          
          </div>
          </div>
        </div>
      </div>
    );
}