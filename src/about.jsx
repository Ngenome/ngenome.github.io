import React from 'react';
import ReactDOM from 'react-dom';
//import {BlueButton} from './title'
import about from './abt.jpg'
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
  return (
    <div className="about_flex">
     <div className="about_image">
       <img src={about} />
     </div>
     <div className="about_desc">
        <div className="about_desc_top">
          <h1 className="abt_title">About us</h1>
          <div className="hr"></div>
          <p>
            We take pride in our wide knowledge in shading systems. Our
            specialty lies in luxury cottage tents,car shades,event tents, and
            dome tents.Our clientele ranges from hotels,resorts,organizations,
            estates and individuals. Our tents are guaranteed cocktail of
            aesthetic beauty, durability and versatility. Link up with us for
            more.
          </p>
        </div>
        <div className="about_desc_bottom">
          <SocialIcons
            inlink="https://www.linkedin.com"
            twitterlink='https://www.instagram.com'
            fblink="https://www.facebook.com"
            whatsapplink="https://api.whatsapp.com/send?phone=254736886886"
            iglink="www.instagram.com"
          />
        </div>
      </div>
    </div>
  );
}

const  href="https://twitter.com/intent/tweet?text=Hello%20world"
