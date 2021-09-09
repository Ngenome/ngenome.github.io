import React from 'react';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow,Pagination } from 'swiper';

import {useSelector,useDispatch} from 'react-redux'
import {changePage} from '../actions/index'
//const dispatch=useDispatch()
//import {BlueButton} from './title'
import about from './abt.jpg'
import about1 from './images/arch2.jpg'
import about2 from './images/arch5.jpg'
import about3 from './images/arch6.jpg'
export function SocialIcons(props){
  return(
       <div className='social_icons'>
       
          <a id={props.size} className='anchor_social' href={`${props.fblink}`}><i className='fab fa-facebook'></i></a>
          
          <a id={props.size} className='anchor_social' href={`${props.twitterlink}`}><i className='fab fa-twitter'></i></a>
          
          <a id={props.size} className='anchor_social' href={`${props.whatsapplink}`}><i className='fab fa-whatsapp'></i></a>
          
          <a id={props.size}className='anchor_social' href={`${props.inlink}`}><i className='fab fa-linkedin'></i></a>
          
          
          <a id={props.size} className='anchor_social' href={`https://${props.iglink}`} ><i className='fab fa-instagram'></i></a>
            </div>
    )
  
}
export function FooterSocialIcons(props) {
  return (
    <div className='social_icons'>
       
          <a id={props.size} href={`${props.fblink}`}><i className='fab fa-facebook'></i></a>
          
          <a id={props.size}  href={`${props.twitterlink}`}><i className='fab fa-twitter'></i></a>
          
          <a id={props.size}  href={`${props.whatsapplink}`}><i className='fab fa-whatsapp'></i></a>
          
          <a id={props.size} href={`${props.inlink}`}><i className='fab fa-linkedin'></i></a>
          
          
          <a id={props.size} href={`https://${props.iglink}`} ><i className='fab fa-instagram'></i></a>
            </div>
  )

}
export function AboutPage(){
  SwiperCore.use([Autoplay])
  
  const dispatch=useDispatch()
  React.useEffect(()=>{
    dispatch(changePage('about'))
  },[])
  return (
    <div className="about_flex">
     <div className="about_image">
      {// <img src={about} />
      }
      <Swiper modules={[EffectCoverflow]} effect="coverflow"
           autoplay={{
             delay:8000
           }}
           
           coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}} pagination={true} 
           loop={true}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide><img className='swp'src={about} /></SwiperSlide>
            <SwiperSlide><img className='swp' src={about1} /></SwiperSlide>
            <SwiperSlide><img className='swp'src={about2} /></SwiperSlide>
            <SwiperSlide><img className='swp'src={about3} /></SwiperSlide>
            
          </Swiper>
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
