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
import {changePage} from '../actions/index'
function Popup(props){
  //React.useEffect()
  const [sr, ssr]=React.useState('./images/archy2.jpg');
  const [si, ssi]=React.useState(0);
  const [vs, svs]=React.useState('invisible')
  u=(x,y)=>{ 
    ssr(x)
    ssi(y)
  }
  setInterval(function  sq() {
   if(visible){
     svs('visible')
   }
   if (visible==false) {
     svs('invisible')
   }
   
   
   
  },1000)
  
  React.useLayoutEffect(()=>{
    
    gsap.to('.gimg',{
      opacity:0,
      duration:0.1
    })
    gsap.to('.gimg', {
          opacity: 1,
          duration: 1,
        }
      )
      
      document.changing.src=sr;
        
    
    
  },[sr])
    return(
        
        <div id='popup' className={vs}>
        <div className='x' onClick={()=>{
                    visible=false;
                  }}><i className='fas fa-times-circle'></i></div>
             <div className='popup_image_wrap'> 
             
             <div className='main_image'>
         <div className='prev'     onClick={function() 
    
    {
      
      
      u(props.arr[si-1].image,si-1)
      
    
    }}><i className='fas fa-arrow-left'></i></div> <img name='changing'className='gimg' src={sr}/>
         <div className='next'
          onClick={function() 
    
    {
      
      
      u(props.arr[si+1].image, si+1)
      
    
    }}
         ><i className='fas fa-arrow-right'></i></div>
          </div>
          <div className='images_array'
          
          >
          {
            props.arr.map((e,i)=>{
              return(
              <img  onClick={function setPopup() 
    
    {
      visible = true;
      vsclass='visible';
      
      
      u(e.image,i)
      
    
    }} src={e.image}/>
              )
            })
          }
          </div>
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
      
      
      u(props.src,props.index)
      
    
    }} className='gallery_image_container'>
    
    <img src={props.src} />

    
    </div>

  )
}
export function GalleryContainer(){
  const authtoken=useSelector(state=>{state.token})
  const dispatch= useDispatch();
  dispatch(changePage('gallery'))
  const [source, setSource]=React.useState(src);
  const [m,sm]=React.useState([])
  React.useEffect(() => {
    
    axios({
      
      method:'get',
      url:'https://jipastentsail.pythonanywhere.com/jipasApi/imagelist',
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
    <div className='gallery_h2_wrap'>
    <h2 className='gallery_h2'>Our past Accomplished Designs</h2>
    </div>
    <Popup vs={visible} arr={m} src={source}/>
    <div className='gallery_container'>
    {m.map((h,i)=>{
    
      return(
      <GalleryImage src={h.image} index={i}/>
      )
      
    })}
    </div>
    </div>
    
    )
}
 

