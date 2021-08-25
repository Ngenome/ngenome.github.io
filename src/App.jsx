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
import arch1 from './images/arch.jpg'
import arch2 from './images/arch2.jpg'
import arch3 from './images/arch3.jpg'
import arch4 from './images/arch4.jpg'
import arch5 from './images/arch5.jpg'
import arch6 from './images/arch6.jpg'
//import {Importthem} from './3d.js' 
const archies= [arch1,arch2,arch3,arch4,arch5,arch6];
let y=1;
function z(){
// for (var i=0;i<6;i++){
//   alert(i)
// }
if (y<5){
  y=y+1;
  
}
else{
  y=1;
}


  
}
 let checkWidth;
function MainTitlePage() {
    const [device,setDevice]=React.useState('desktop');
  const [currentImage,setCurrentImage]=React.useState(y);
  const [count, setCount]=React.useState(1)
  function setImg() {
  
    setCurrentImage(y);
  
    // if (count >5){
    //   setCount(1);
    // }
    // else{
    // setCount(count+1);
    // }
  
  
  }

  var xn = setInterval(z, 3000);
  var mn = setInterval(setImg, 5600);
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
    //gsap.from('.home_image', {
     // duration: 2,
    //  opacity: 0,
      
 //   })
         
  return()=>{
    clearInterval(xn);
    clearInterval(mn);
  }
  
  }, [currentImage]); 
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
   
  useEffect(()=>{

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 300 / 300, 0.1, 1000);
scene.add(camera);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setSize(300, 300);
camera.position.setZ(10);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.z += 0.01;
  renderer.render(scene, camera);
}

animate();
  },[])
  
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
          
             <img style={{display:'none'}}
             name="home_image"
            className="home_image"
               src={archies[currentImage]}
            />
          
        </div>
        <canvas id="bg"></canvas>
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

