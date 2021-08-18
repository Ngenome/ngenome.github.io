import React from 'react';
import ReactDOM from 'react-dom';
import {CsButton} from './title.jsx';
import axios from 'axios';
import {gsap } from 'gsap';
import about from './images/arch2.jpg'
let visible =false;
 let src= './src/images/archy2.png';
 let u;
let vsclass='invisible';

function Popup(props){
  const [sr, ssr]=React.useState('./images/archy2.jpg');
  const [vs, svs]=React.useState('invisible')
  u=(x)=>{
    ssr(x)
  }
  setInterval(function  sq() {
   if(visible){
     svs('visible')
   }
   if (visible==false) {
     svs('invisible')
   }
   
   
   
  },1000)
  React.useEffect(()=>{
    document.changing.src=sr;
  },[sr])
    return(
        <div className={vs}>
        
        <div className='x' onClick={()=>{
                    visible=false;
                  }}><i className='fas fa-times-circle'></i></div>
                  
          <img name='changing'className='gimg' src={sr}/>
          
          </div>
      )
  }

export function GalleryImage(props) {
  const [activeImage,setActiveImage]=React.useState(src)
  React.useEffect(() => {
    
  
  }, [])
  
  return (
    <div onClick={function setPopup() 
    
    {
      visible = true;
      vsclass='visible';
      
      
      u(props.src)
    
    }} className='gallery_image_container'>
    
    <img src={props.src} />

    
    </div>

  )
}
export function GalleryContainer(){
  const [source, setSource]=React.useState(src);
  const [m,sm]=React.useState([])
  React.useEffect(() => {
    axios({
      
      method:'get',
      url:'https://dummyapi.io/data/v1/user?limit=10',
      headers:{
        'app-id':'611d144c8b1a0883a7ddeaa1'
      }
      
      
      
    }).then(r=>{
      
      var rm = r.data.data;
      sm(rm)
      
    })
    // gsap.from('.gallery_image_container', {
    //   duration: 0.5,
    //   opacity: 0,
    //   stagger:.3,
  
    // })
  
  
  }, [])
  return(
    <div>
    <h2 className='gallery_h2'>Our past Accomplished Designs</h2>
    <Popup vs={visible} src={source}/>
    <div className='gallery_container'>
    {m.map(h=>{
    
      return(
      <GalleryImage src={h.picture}/>
      )
      
    })}
    </div>
    </div>
    
    )
}
 

// <GalleryImage src='images/arch.jpg'/>
//     <GalleryImage src='images/arch2.jpg'/>
//     <GalleryImage src='images/arch3.jpg'/>
//     <GalleryImage src='images/arch4.jpg'/>
//     <GalleryImage src='images/IMG-20210811-WA0015.jpg'/>
//     <GalleryImage src='images/IMG-20210811-WA0016.jpg'/>
//     <GalleryImage src='images/IMG-20210811-WA0017.jpg'/>
//     <GalleryImage src='images/IMG-20210811-WA0018.jpg'/>
//     <GalleryImage src='images/IMG-20210811-WA0019.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0020.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0021.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0022.jpg'/>
//     <GalleryImage src='images/IMG-20210811-WA0023.jpg'/>
//     <GalleryImage src='images/IMG-20210811-WA0024.jpg'/>
//     <GalleryImage src='images/IMG-20210811-WA0025.jpg'/>
//     <GalleryImage src='images/IMG-20210811-WA0034.jpg'/>
//     <GalleryImage src='images/IMG-20210811-WA0027.jpg'/>
//     <GalleryImage src='images/IMG-20210811-WA0035.jpg'/>
//     <GalleryImage src='images/IMG-20210811-WA0029.jpg'/>
//     <GalleryImage src='images/IMG-20210811-WA0030.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0032.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0033.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0036.jpg'/>
    
    
    
    
    
//     <GalleryImage src='images/IMG-20210811-WA0039.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0040.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0041.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0042.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0043.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0044.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0045.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0046.jpg'/>
    
//     <GalleryImage src='images/IMG-20210811-WA0048.jpg'/>
    