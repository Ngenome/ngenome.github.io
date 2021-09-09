import React from 'react';
import ReactDOM from 'react-dom';

import {useSelector,useDispatch} from 'react-redux'
import {change} from '../actions/index'
//const dispatch=useDispatch()
//import {BlueButton} from './title
import {Card, TestimonialCard ,Comment} from './components'

import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow,Pagination } from 'swiper';
import axios from 'axios'
//import Tilt  from 'react-vanilla-tilt'
class Tilt extends React.Component {
  componentDidMount() {
    VanillaTilt.init(this.rootNode, {
      max: 25,
      speed: 800, 
    })
  }
  render() {
     return (
      <div
        ref={node => (this.rootNode = node)}
        className="tilt-root"
        >
        <div className="tilt-child">
          <div className="totally-centered" {...this.props} />
        </div>
      </div>
    )
  }
}

  const options ={
    max: 20,
      speed: 400,
      glare: true,
      'max-glare': 0.1,
  }
export function ServicePage(){
  const [m,sm]=React.useState([]);
  const dispatch= useDispatch()
  SwiperCore.use([Autoplay])
  
  React.useEffect(()=>{
    
    dispatch(change('servicepage'))
    axios({
    
      method: 'get',
      url: 'https://dummyapi.io/data/v1/user?limit=3',
      headers: {
        'app-id': '611d144c8b1a0883a7ddeaa1'
      }
    
    
    
    }).then(r => {
    
      var rm = r.data.data;
      sm(rm)
    
    })
  },[])
  return(
    <div className='service_flex'>
    
    <div className='services'>
    <h2 className='st'>Our Services</h2>
    <div className='tilts'>
    
    <Card
    title='Design and detailing'
    icon='cog'
    description="Our products are beautifully designed keeping in mind the fastest market trends, we have ensures top - quality product
        
        a team of skilled and experience designer 's that
        
        for our valuable clients
        ."
    buttonText='Engage'
    />
    
    <Card
        title='Engineering'
        icon='hard-hat'
        description='Our team of qualified and experienced engineers ensures any challenge product manufacturer and installation'
        buttonText='More'
        />
        
     <Card
            title='Manufacturing'
            icon='hammer'
            description='
        Our products are manufactured using high - quality materials, And all the applications like welding sewing tailoring are done with extensive care'
            buttonText='Engage'
            />
            
            </div>
            </div>
            <div className='testimonials'>
            <h2 className='testimonials_heading'>What my clients say</h2>
            <div className='testimonial_cards'>
 
           
          
            {
          
              
               m.length===0? <div>loading</div>:
              m.map(h=>{
            
              return(
            
              <TestimonialCard
                          title = {h.firstName}
                          prof='Senior Person at Somewhere'
                          imagelink={h.picture}
                          description = 'Jipas is a very talented dynamic and creative architect. He takes time to think through whichever assignment. He designed my  restaurant which is very beautiful and my customers love it. '
                          
                          iglink='https://www.instagram.com'
                          fblink='https://www.facebook.com'
                          whatsapplink='https://www.whatsapp.com'
                                  />
                                  
              
              )
            })
          }
 
        
            </div>
            
            </div>
            <Comment/>
            </div>
    
    
    )
  
}
