import React from 'react';
import ReactDOM from 'react-dom';
//import {BlueButton} from './title
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
export function Card(props) {
  return (
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
    <div className='tImage_wrap'>
    <div className='tImage'>
      <img src={props.imagelink} alt={props.title}/>
      </div></div>
        <div className='tcard_title'>
            <div className='head_wrap'>
            <h2>{props.title} </h2>
            <h3 className='work_title'>{props.prof}</h3>
            
            </div>
            
            </div>
      <div className='tcard_description'>
      <p > {props.description}</p>
      
    <div className='footer_icons'>
    <a className='footer_a'  href={`${props.whatsapplink}`}>
    <i className='fab fa-facebook'> </i>
    </a>
    <a className='footer_a'  href={`${props.whatsapplink}`}>
        <i className='fab fa-whatsapp'> </i>
        </a>
    <a className='footer_a'  href={`${props.youtubelink}`}>
        <i className='fab fa-youtube'> </i>
        </a>
    </div>
      </div>
    </div>

  )

}
export function Comment() {
  const [isSent,setIsSent] =React.useState(false)
  const authtoken = useSelector(state => state.MyToken);
  const [visible,setVisible]=React.useState(0)

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
      <div className='Comment'>
    
    <h2 className='comment_title'> Comments</h2>
    <form className='comment_form'>
    <textarea placeholder='Write your comment here' className='comment_textarea' />
     <div  style={{
            color:'red',
              fontSize:'6px',
                    fontFamily:'Poppins'
                         }}id='errordiv'></div>
    <button className='post_button' onClick={(e)=>{

              e.preventDefault()
              setVisible(1)
              e.preventDefault()
              var comment= document.querySelector('.comment_textarea');
              var errordiv = document.querySelector('#errordiv')
            

    axios({
      method: "POST",
      url: "http://jipastentsail.pythonanywhere.com/jipasApi/comments/",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Token ${authtoken}`
      },
      data: {
        "comment": comment.value
      },
    }).then((r) => {
      setVisible(1)
        setIsSent(true)

      setTimeout(() => {
        setVisible(0)
      }, 4000)
    
    
    }).catch(e => {
    alert(authtoken)
    alert(JSON.stringify(e.response))
      errordiv.innerHTML = `Network Error,please try again later<br>
      
              here is the actual error
              <br>${e.response.status}`
    });
    
            }}
            ><i className='fas fa-paper-plane'></i></button>
    
    </form>
    
    </div>
    
    )
}
