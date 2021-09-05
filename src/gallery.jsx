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
import {useSelector, useDispatch} from 'react-redux';

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
        
        <div id='popup' className={vs}>
        <div className='x' onClick={()=>{
                    visible=false;
                  }}><i className='fas fa-times-circle'></i></div>
                  
          <img name='changing'className='gimg' src={sr}/>
          <div className='images_array'
          
          >
          {
            props.arr.map((e)=>{
              return(
              <img  onClick={function setPopup() 
    
    {
      visible = true;
      vsclass='visible';
      
      
      u(e.image)
    
    }} src={e.image}/>
              )
            })
          }
          </div>
          </div>
      )
  }

export function GalleryImage(props) {
  const [Token,setToken]=React.useState('')
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
  const authtoken=useSelector(state=>{state.token})
  const dispatch= useDispatch();
  const [source, setSource]=React.useState(src);
  const [m,sm]=React.useState([])
  React.useEffect(() => {
    
    axios({
      
      method:'get',
      url:'http://jipastentsail.pythonanywhere.com/jipasApi/imagelist',
      headers:{
        'content-type':'application/json',
      }
      
      
      
    }).then(r=>{
      
      var rm = r.data;
      //alert(JSON.stringify(r))
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
    <Popup vs={visible} arr={m} src={source}/>
    <div className='gallery_container'>
    {m.map(h=>{
    
      return(
      <GalleryImage src={h.image}/>
      )
      
    })}
    </div>
    </div>
    
    )
}
 

