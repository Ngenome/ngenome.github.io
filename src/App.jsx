import React, {useEffect}from 'react';
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
const archquotes=['']
let y=1;
var i = document.querySelector('.home_image');
function  z (){
    if(i!=null) {
  //alert('yes')
   document.home_image.src=archies[y]
        if (y < 5) {
          y = y + 1;
        
        }
        else {
          y = 1;
        }
    }
  
}
setInterval(z,5200 );
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
         
  return()=>{
   // clearInterval(xn);
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
            <span className="jp">Jipas</span> <br />{" "}
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
function Nav(){
  return(
    <nav className='nav'>
    <h2>JT</h2>
    <ul>
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
    gsap.to('.rand2',{
     y:-170,
     yoyo:true,
     repeat:-1,
     duration:25,
     ease:'sine.inOut',
     


    })
      gsap.to('body',{opacity:1,duration:1})

    gsap.to('.rand3',{
     y:120,                                                    yoyo:true,                                                  repeat:-1,
      duration:25,
  ease:'sine.inOut',
                                                            

    })
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

