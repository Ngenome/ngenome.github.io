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
  const [isSent,setIsSent] =React.useState(false)
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
  React.useEffect(() => {
    gsap.from('.contact-title', {
      y:-3,
      
      duration: 2,
      delay:3,
      
      
    })
  }, [])
  
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
        <h1 className="contact-title">Contact us </h1>
        
        <div className='top_welcome'>
        Got a question for the team at Jipas Tentsail? Please fill out the form below and we will get back to you as soon as possible. Alternatively, contact us by phone or whatsapp.
        </div>
        <div  className='pop'>
        {isSent?
        <div className='popcheck'>
        <i className='fas fa-check'></i>
        <span>Email sent successfully</span>
        </div>:<div className='loader'></div>}
        </div>
        <div className='forms'>
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
            <label htmlFor="url" id='web-label'>Subject</label>
            <input
              type="text"
             
              placeholder="Enter the email subject here"
              id="subject"
            />
            </div>
             <div className="wrap"> 
            <label htmlFor="message" id='message-label'>Message</label>
            <textarea name="message" id="message-textarea" cols="30" placeholder="Enter the email body here" rows="10"/>
</div>
             <div  style={{
                       color:'red',
                       fontSize:'14px',
                       fontFamily:'Poppins'
                     }}id='errordiv'></div>   
            <button  className='submit'
            
            onClick={(e)=>{
              e.preventDefault()
              setVisible(1)
              var name= document.querySelector('#name');
              var subject= document.querySelector('#subject');
              var email= document.querySelector('#message-textarea');
              var errordiv = document.querySelector('#errordiv')
              var fromEmail = document.querySelector("#mailin");

    axios({
      method: "post",
      url: "http://jipastentsail.pythonanywhere.com/jipasApi/sendemail/",
      headers: {
        "Content-Type": "Application/json",
      },
      data: 
      {"name":name.value,"email":email.value,"fromEmail":fromEmail.value,"subject":subject.value
      },
    }).then((r) => {
    setIsSent(true)
        
        setTimeout(()=>{
          setVisible(0)
        },4000)
         
         
    }).catch(e => {
         
          errordiv.innerHTML= `Network Error,please try again later<br>
          here is the actual error${e}`
        });
    
            }}
      
            type='submit' ><i className='fas fa-paper-plane'></i></button>
          
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