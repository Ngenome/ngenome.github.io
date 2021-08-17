import React from 'react';
import ReactDOM from 'react-dom';
//import {BlueButton} from './title

export function Card(props){
  return(
    <div className='card'>
      <div className='card_title'>
      <i className={`fas fa-${props.icon}`}></i>
      <h2>{props.title} </h2>
      </div>
      <div className='card_description'>
      <p > {props.description}</p>
      <button>{props.buttonText}</button>
      </div>
    </div>
    
    )
  
}
export function TestimonialCard(props) {
  return (
    <div className='tcard'>
    <div className='tImage'>
      <img src={props.imagelink} alt={props.title}/>
      </div>
        <div className='tcard_title'>
            
            <h2>{props.title} </h2>
            </div>
      <div className='tcard_description'>
      <p > {props.description}</p>
      <div className='tsocial'>
      <a className='tanchor_social' href={`${props.whatsapplink}`}><i className='fab fa-whatsapp tsicon '></i></a>
      
      <a className='tanchor_social' href={`${props.iglink}`}><i className='fab fa-instagram tsicon'></i></a>
      
      <a className='tanchor_social' href={`${props.fblink}`}><i className='fab fa-facebook tsicon'></i></a>
      </div>
      </div>
    </div>

  )

}
export function Comment(){
  return(
    <div className='Comment'>
    
    <h2 className='comment_title'> Comments</h2>
    <form className='comment_form'>
    <textarea placeholder='Write your comment here' className='comment_textarea' />
    
    <button className='post_button' onClick=''><i className='fas fa-paper-plane'></i></button>
    
    </form>
    
    </div>
    
    )
}