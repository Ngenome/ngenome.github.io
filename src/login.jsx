import React from 'react';
import ReactDOM from 'react-dom';
import { CsButton } from './title.jsx';
import axios from 'axios';
import { gsap } from 'gsap';


export const LoginPage = () => {
  React.useEffect(() => {
    gsap.to('.fa-paper-plane', {
      rotate: 1.7,
      yoyo: true,
      duration: 5,
      repeat: -1,
      ease: 'sine.inOut'
    })
  }, []) 
  return (
    <div className="contact-page">
        <h1 className="contact-title"><i className='fas fa-padlock'></i>Login </h1>
        <div>
        
          <form action="" className="contact-form">
              <div className="wrap"> 
             <label htmlFor="name" id='name-label'>Enter your Username</label>
             <input
             required
               type="username"
               placeholder="Enter your username"
               id="name"
             />
 </div>
         
            <div className="wrap"> 
            <label htmlFor="name" id='name-label'>Enter your password"</label>
            <input
            required
              type="password"
              placeholder="Enter your password"
              id="name"
            />
</div>
  
            <button  className='submit'type='submit' ><i className='fas fa-paper-plane'></i>Login</button>
          
          </form>
      </div>
      </div>
  );
}


export const SignupPage= () => {
  React.useEffect(() => {
    gsap.to('.fa-paper-plane', {
      rotate: 1.7,
      yoyo: true,
      duration: 5,
      repeat: -1,
      ease: 'sine.inOut'
    })
  }, [])
  return (
    <div className="contact-page">
        <h1 className="contact-title">Sign up </h1>
        <div>
          <form action="" className="contact-form">
            <div className="wrap"> 
            <label htmlFor="name" id='name-label'>Enter your Username</label>
            <input
            required
              type="text"
              placeholder="Enter your username"
              id="name"
            />
</div>
 <div className="wrap"> 
            <label htmlFor="email" id='mail-label'>Email</label>
            <input
            required type="text" placeholder="Enter your email  here" id="mailin" />
            </div>
          <div className="wrap"> 
             <label htmlFor="name" id='name-label'>Enter your password</label>
             <input
             required
               type="password"
               placeholder="Enter your password"
               id="name"
             />
 </div>
         
            
            <button  className='submit'type='submit' 
            onClick={
              (e)=>{
                e.preventDefault()
                axios({
                  method:'post',
                  
                })}
}><i className='fas fa-paper-plane'></i> Signup</button>
          
          </form>
         
      </div>
      </div>
  );
}
export const UploadPage = () => {
  
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

// var formData = new FormData();
// var imagefile = document.querySelector('#file');
// formData.append("image", imagefile.files[0]);
// axios.post('upload_file', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }})