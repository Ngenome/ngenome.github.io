import React from 'react';

import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import {useSelector,useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import { CsButton } from './title.jsx';
import axios from 'axios';
import { gsap } from 'gsap';
import updateToken,{changePage} from '../actions/index.js';
import { Redirect} from 'react-router'
const styles= {
  already:{
    color:'purple',
    textDecoration:'none',
    
  }
}
export const LoginPage = () => {
  
  
  const authtoken = useSelector((state) =>state.MyToken);
  
  const isLogged = useSelector((state) =>state.isLogged);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(changePage('login')) 
    
  }, []) 
  return (
  isLogged?<Redirect push to='/'/>:<div className="contact-page">
        <h1 className="contact-title"><i className='fas fa-padlock'></i>Login </h1>
        <div>
          <form action="" className="contact-form">
              <div className="wrap"> 
             <label htmlFor="name" id='name-label'>Enter your Username</label>
             <input
             required
               type="username"
               placeholder="Enter your username"
               id="username"
             />
 </div>
         
            <div className="wrap"> 
            <label htmlFor="name" id='name-label'>Enter your password"</label>
            <input
            required
              type="password"
              placeholder="Enter your password"
              id="password"
            />
            
            <div  style={{
              color:'chartreuse',
              fontSize:'14px',
              fontFamily:'Poppins'
            }}id='already'>Dont have an account <span><Link style={styles.already} to='/signup'>Sign Up</Link></span>
            <div  style={{
              color:'red',
              fontSize:'14px',
              fontFamily:'Poppins'
            }}id='errordiv'></div>
</div>
  
            <button  
            onClick={(e)=>{
              e.preventDefault()
              var password= document.querySelector('#password');
              var errordiv = document.querySelector('#errordiv')
              var username = document.querySelector("#username");

    axios({
      method: "post",
      url: "http://jipastentsail.pythonanywhere.com/auth/login",
      headers: {
        "Content-Type": "Application/json",
      },
      data: {
        "username": username.value,

        "password": password.value,
      },
    }).then((r) => {
        
         dispatch(updateToken(r.data.token));
         errordiv.innerHTML='';
         if (typeof(Storage) !== "undefined") {
           localStorage.setItem("jipasToken", r.data.token);
         } else {
            alert('sorry we couldnt log you in ');
         }
         
    }).catch(e => {
         alert(e)
          errordiv.innerHTML= 'wrong credentials ⚠️'
        });
    
            }}
            
            className='submit'type='submit' >Login</button>
          </div>
          </form>
      </div>
      </div>
  );
}


export const SignupPage= () => {
  const authtoken = useSelector((state) => {
    state.token;
  });
  const isLogged = useSelector((state) =>state.isLogged);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changePage("signup"))
  }, []);
  
  return (
    isLogged?<Redirect push to='/'/>:<div className="contact-page">
        <h1 className="contact-title">Sign up </h1>
        <div>
          <form action="" className="contact-form">
            <div className="wrap"> 
            <label htmlFor="name" id='name-label'>Enter your Username</label>
            <input
            required
              type="text"
              placeholder="Enter your username"
              id="susername"
            />
</div>
 <div className="wrap"> 
            <label htmlFor="email" id='mail-label'>Email</label>
            <input
            required type="text" placeholder="Enter your email  here" id="semail" />
            </div>
          <div className="wrap"> 
             <label htmlFor="name" id='name-label'>Enter your password</label>
             <input
             required
               type="password"
               placeholder="Enter your password"
               id="spassword"
             />
             </div>
             
          <div className="wrap"> 
             <label htmlFor="name" id='name-label'>Enter your password</label>
             <input
             required
               type="password"
               placeholder="Repeat your password"
               id="srpassword"
             />
             
            <div  style={{
              color:'chartreuse',
              fontSize:'14px',
              fontFamily:'Poppins'
            }}id='already'>Already have an account? <span><Link  style={styles.already} to='/login'>Login</Link></span></div>
            
             <div style={{
              color:'red',
              fontSize:'14px',
              fontFamily:'Poppins'
            }}id='serrordiv'></div>
 
         
            
            <button  className='submit'type='submit' 
           
            onClick={(e)=>{
              e.preventDefault()
              
              var semail= document.querySelector('#semail')
              var spassword= document.querySelector('#spassword');
              var serrordiv = document.querySelector('#serrordiv')
              
              var srpassword= document.querySelector('#srpassword');
              var susername = document.querySelector("#susername");
     if (spassword.value!=srpassword.value){serrordiv.innerHTML=' sorry passwords didnt match'
       
     }else{
    axios({
      method: "post",
      url: "http://jipastentsail.pythonanywhere.com/auth/register",
      headers: {
        "Content-Type": "Application/json",
      },
      data: {
        "username": susername.value,
        "email":semail.value,

        "password": spassword.value,
      },
    }).then((r) => {
         alert('user created successfully')
         dispatch(updateToken(r.data.token));
         serrordiv.innerHTML= ''
         if (typeof(Storage) !== "undefined") {
           localStorage.setItem("jipasToken", r.data.token);
         } else {
           alert('sorry we couldnt save your credentials you will have to login again next time');
         }
            
      //sm(rm);
    }).catch(e => {
    
          serrordiv.innerHTML= 'wrong credentials  ⚠️' 
        });}
    
            }}
><i className='fas fa-paper-plane'></i> Signup</button>
          </div>
          </form>
         
      </div>
      </div>
  );
}
export const UploadPage = () => {
  const myToken =useSelector(state=>state.token);
  return (
    <div className="contact-page">
        <h1 className="contact-title">Upload</h1>
        <div>
          <div className="contact-form">
            <div className="wrap"> 
            <label htmlFor="name" id='name-label'>Image Name</label>
            <input
            required
              type="text"
              placeholder="Enter image name"
              id="name"
            />
</div>
 <div className="wrap"> 
            <label htmlFor="email" id='mail-label'>Image</label>
            <input
            name='imgupload'
            required type="file" id="image" />
            </div>
          <div className="wrap"> 
             <label htmlFor="name" id='name-label'>Image Description</label>
             <input
             required
               type="text"
               placeholder="Enter the image Description"
               id="img-desc"
             />
 </div>
         
            
            <button  className='submit'type='submit'
            onClick={
              (e)=>{
                e.preventDefault()
                

var formData = new FormData();
var imagefile = document.querySelector('#image');
formData.append("image", imagefile.files[0]);
formData.append("title", 'testtitle');
formData.append("description", 'testdesc');
formData.append("category", 'yehheee');

                axios({
                  method:'post',
                  url:'http://localhost:8000/images',
                  headers:{
                    'Content-Type':'multipart/form-data',
                    'Authorization':" Token 11863571b36d91bd8b2a9d1c4f5bc5616f152debea73f974e86b9f8ecc991f0cyyyy"
                    
                  },
                  data:formData
                  
                })
              }
            }><i className='fas fa-paper-plane'></i> Upload</button>
          
          </div>
         
      </div>
      </div>
  );
 }
