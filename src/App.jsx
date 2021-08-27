import React, {useState,useEffect}from 'react';
import ReactDOM from 'react-dom';
import {CsButton} from './title.jsx'
import {GalleryContainer} from './gallery.jsx'
import {gsap} from 'gsap'
import {ServicePage} from './services.jsx' 

 import * as THREE from "three";
 import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {AboutPage} from './about.jsx'
import {Contact } from './contact'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import arch1 from './images/p01.jpg'
import arch2 from './images/p02.jpg'
import arch3 from './images/p03.jpg'
import arch4 from './images/p01.jpg'
import arch5 from './images/p02.jpg'
import arch6 from './images/p03.jpg'
//import {Importthem} from './3d.js' 
const archies= [arch1,arch2,arch3,arch4,arch5,arch6];
const clips=['polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)','polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)','polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)']
let y=1;
var i = document.querySelector('.home_image');
function  z (){
    
 
    gsap.from('.home_image', {       
     duration: 1,
     opacity: 0,
    filter:'blur(5px)',

    
 
    })
  //  gsap.fromTo(
    //'.home_image',{clipPath:clips[0]},{
       // clipPath:'polygon(100% 0%,100% 100%,0% 100%,0% 0%)'
     
  //  })
   // if(i!=null) {
  //alert('yes')
   document.home_image.src=archies[y]
        if (y < 5) {
          y = y + 1;
        
        }
        else {
          y = 1;
        }
    //}
  
}

let checkWidth;
function MainTitlePage() {
    const [device,setDevice]=React.useState('desktop');
  const [currentImage,setCurrentImage]=React.useState(y);
  const [count, setCount]=React.useState(1)
  
   
  useEffect(()=>{
  gsap.from('.show', {
  duration: 2,
  opacity: 0,
  ease: 'bounce',
})
gsap.from('.title_btn',{
  opacity:0,
  duration:2,
  delay:4,
})
gsap.from('.jp',{

  opacity:0,
  duration:1,
  delay:0,
  stagger:1,
})
 gsap.to('.span',{
   duration:2,
   opacity:1,
   
   delay:3 ,
   stagger:.4,


 })
gsap.from('.span',{
  //x:-4.9,
  y:-8,
  delay:3,
  ease:'bounce',
  duration:1,
  stagger:1,


})
  
  },[]);
  

  useEffect(() => {

    gsap.from('.home_image', {
      duration: 1,
    opacity: 0,
      
   })
      var xm =setInterval(z,8900 );
         
  return()=>{
    clearInterval(xm);
    //clearInterval(mn);
  }
  
  }, []); 

  const[cw, sw] = React.useState(480);
    const wWidth=window.innerWidth;
    const wHeight= window.innerHeight;
    checkWidth = ()=>{

    
    if (wWidth<480){
    cHeight = wHeight/2;  
    cWidth = wWidth;
    setDevice('phone');
    sw(480)


    }
if (wWidth>480 && wWidth<768){
    cHeight = wHeight/2;
    cWidth = wWidth;
    setDevice('tablet');
     sw(768) 


  }

  }
   
  return (
    <div className="main-flex">
      <div className="title_view">
        <div className="show">
          <h2>
            <span className="jp">Jipas</span> <br />
            <span className="jp">Tensail</span><br/>
            <span className="jp"> Architectural</span>
          </h2>
          <div className="spans">
            <span className="span span1">Quality tents. </span>
            <span className="span span2">Quality living.</span>
          </div>
        </div>
        <div className="btns">
          <Link to="/gallery">
            <CsButton btnname="See More" />
          </Link>
        </div>
      </div>
      <div className="home_slide">
        <div className="home_slide_img_div">
          
             <img
             name="home_image"
            className="home_image"
               src={archies[1]}
            />
          
        </div>

      </div>
    </div>
  );
}
//let bg;
//let nv;

//let nav_list;
var xf =[]
let mu = 0;
function f (){
  
  
}

function Nav(){
  const [yes,setYes]=useState('no');
  
  
  React.useEffect(()=>{
   var bg = document.querySelector('.burger')
   var nv = document.querySelector('.nav');
  var nav_list = document.querySelector('.nav_list');
    var bars = document.querySelector('.bars');
    var an =document.querySelectorAll('.nav_anchor');
    bg.addEventListener('click', () => {
      
      if (mu ==0){
        bars.classList.remove('fa-bars')
        bars.classList.add('fa-times')
        gsap.fromTo('.nav',  {height:'5vh'},{
      
          height:'100vh',
          ease:'bounce',
          delay:2,
          duration: 2,
        });
        gsap.fromTo('.nav',{width:'100vh'}, {
          duration: 2,
          width: '60vw',
          
        });
        gsap.to('.nav_anchor', {
          duration: 0.5,
          left: 25,
          opacity:1,
          stagger: 0.2,
          delay:4,
        });
        mu=1;
      }
      else if(mu==1){
           bars.classList.remove('fa-times')
           bars.classList.add('fa-bars')
        gsap.fromTo('.nav', {height:'100vh'}, {
          duration: 1,
          height:'5vh',
          delay:2,
        });
        gsap.to('.nav',{
          duration: 2,
          width: '100vw',
          delay: 3,
          ease:'bounce'
        });
        gsap.to('.nav_anchor', {
          duration: 1,
          opacity:0,
          
          stagger:0.5,
        });
        gsap.to('.nav_anchor', {
          duration: 0.5,
          
          left: -70,
          stagger: 0.2,
          delay:0.3
        });
        mu=0;
      }
      
  
    });
    an.forEach(a =>{
      a.addEventListener('click',()=>{
      bars.classList.remove('fa-times')
  bars.classList.add('fa-bars')
  gsap.fromTo('.nav', { height: '100vh' }, {
    duration: 1,
    height: '5vh',
    delay: 2,
  });
  gsap.to('.nav',  {
    duration: 2,
    width: '100vw',
    delay: 4,
    ease: 'bounce'
  });
  gsap.to('.nav_anchor', {
    duration: 1,
    opacity: 0,
  
    stagger: 0.5,
  });
  gsap.to('.nav_anchor', {
    duration: 0.5,
  
    left: -70,
    stagger: 0.2,
    delay: 0.3
  });
  mu = 0;
    })})
    
  },[])

  return(
    <nav className='nav'>
<div className='th2'>
      <h2>JT</h2>
      <span className='burger'><i className='bars fas fa-bars'></i></span>
      </div>
    <ul className='nav_list'>
    <Link className='li' to='/'>
    <li>
    <a className='nav_anchor'>Home</a>
     </li>
     </Link>
     <Link  className='li' to='/services'>
      <li>
     <a className='nav_anchor'>Services</a>
       </li>
       </Link>
       <Link  className='li' to='/about'>
        <li>
       <a className='nav_anchor' >About</a>
      </li>
      </Link>
      <Link  className='li' to='/contact'>
     <li>
      <a className='nav_anchor'>Contact</a>
       </li>
       </Link>
    </ul>
    </nav>
    
    )
}
function Intro(){
  return(
    <div>
    
    
    </div>
    )
  
}
function Main(){
  useEffect(()=>{
      gsap.to('body',{opacity:1,duration:1})

      },[]);
  return(
    <Router>
    <div className='App'>
    <Nav/>
    <Switch>
    <Route  path='/' exact component={MainTitlePage}/>
    
    <Route  path='/about' component={AboutPage}/>
    
    <Route  path='/services' component={ServicePage}/>
        
    <Route path='/gallery' component={GalleryContainer}/>
    <Route path='/contact' component={Contact}/>
      </Switch>
      </div>
    </Router>
    
    )
}
ReactDOM.render(
  <Main  />,
  document.querySelector('.react-app')
);

