import React from 'react';
import ReactDOM from 'react-dom';
//import {BlueButton} from './title'
export function SocialIcons(props){
  return(
       <div className='social_icons'>
       
          <a className='anchor_social' href={`${props.fblink}`}><i className='fab fa-facebook'></i></a>
          
          <a className='anchor_social' href={`${props.twitterlink}`}><i className='fab fa-twitter'></i></a>
          
          <a className='anchor_social' href={`${props.whatsapplink}`}><i className='fab fa-whatsapp'></i></a>
          
          <a className='anchor_social' href={`${props.inlink}`}><i className='fab fa-linkedin'></i></a>
          
          
          <a className='anchor_social' href={`https://${props.iglink}`} ><i className='fab fa-instagram'></i></a>
            </div>
    )
  
}
export function AboutPage(){
  return(
    <div className='about_flex'>
    
     <div className='about_image'>
        <img src='./abt.jpg'/>
       </div>
     <div className='about_desc'>
     <div className='about_desc_top'>
        <h1 className='abt_title'>
        About us
        </h1>
       <div className='hr'></div>
        <p>
        Jipas tensail architectural is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore praesentium, distinctio saepe quidem nobis, qui debitis, suscipit laboriosam quis impedit quisquam autem? Deleniti voluptatum, nihil eos atque. A, fuga?
        Design & Detailing
        
        </p>
        </div>
       <div className='about_desc_bottom'>
     <SocialIcons 
     
    inlink='www.linkedin.com'
    twitterlink='www.twitter.com'
    fblink='www.facebook.com'
    whatsapplink='www.whatsapp.com'
    iglink='www.instagram.com'
     />
     </div>
        </div>
    </div>
    )
}
