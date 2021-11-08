import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import 'swiper/swiper-bundle.css';
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { Helmet } from "react-helmet";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCoverflow } from "swiper";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { CsButton } from "./title.jsx";
import { GalleryContainer } from "./gallery.jsx";
import { gsap } from "gsap";
import { ServicePage } from "./services.jsx";
import { createStore } from "redux";
import { useSelector, useDispatch } from "react-redux";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { AboutPage } from "./about.jsx";
import { Contact, iconUrl } from "./contact";
import { Nav } from "./nav";
import { LoginPage, SignupPage, UploadPage } from "./login";
import { updateToken, changePage } from "../actions/index";
import { allReducers } from "../reducers/index";
import { SocialIcons, FooterSocialIcons } from "./about.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import arch1 from "./images/arch2.jpg";
import arch2 from "./images/arch.jpg";
import arch3 from "./images/arch4.jpg";
import { LogoutPage } from "./logout";
import { HelpPage } from "./help";
const archies = [arch1, arch2, arch3];
const clips = [
  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
];
let y = 1;
const StateStore = createStore(allReducers);
let checkWidth;

function MainTitlePage() {
  const dispatch = useDispatch();
  SwiperCore.use([Autoplay]);
  const [device, setDevice] = React.useState("desktop");
  const [currentImage, setCurrentImage] = React.useState(y);
  const [count, setCount] = React.useState(1);

  useEffect(() => {
    dispatch(changePage("home"));
    gsap.from(".show", {
      duration: 2,
      opacity: 0,
      ease: "bounce",
    });
    gsap.from(".title_btn", {
      opacity: 0,
      duration: 2,
      delay: 4,
    });
    gsap.from(".jp", {
      opacity: 0,
      duration: 1,
      delay: 0,
      stagger: 1,
    });
    gsap.to(".span", {
      duration: 2,
      opacity: 1,

      delay: 3,
      stagger: 0.4,
    });
    gsap.from(".span1", {
      //x:-4.9,
      y: -8,
      delay: 3,
      ease: "bounce",
      duration: 1,
    });
    gsap.from(".span2", {
      //x:-4.9,
      y: -8,
      //opacity:0,

      delay: 3.5,
      ease: "bounce",
      duration: 1,
    });
    gsap.from(".span2", {
      opacity: 0,

      delay: 3,
      duration: 1,
    });
  }, []);
  React.useEffect(() => {
    gsap.from(".jtp", {
      opacity: 0,

      delay: 0,
      duration: 1,
    });
  }, []);
  // useEffect(() => {

  //   gsap.from('.home_image', {
  //     duration: 1,
  //   opacity: 0,

  // })
  //     var xm =setInterval(z,8900 );

  // return()=>{
  //   clearInterval(xm);
  //   //clearInterval(mn);
  // }

  // }, []);

  const [cw, sw] = React.useState(480);
  const wWidth = window.innerWidth;

  const wHeight = window.innerHeight;
  checkWidth = () => {
    if (wWidth < 480) {
      cHeight = wHeight / 2;
      cWidth = wWidth;
      setDevice("phone");
      sw(480);
    }
    if (wWidth > 480 && wWidth < 768) {
      cHeight = wHeight / 2;
      cWidth = wWidth;
      setDevice("tablet");
      sw(768);
    }
  };

  return (
    <div className="main-flex">
      <Helmet>
        <title>Jipas Tentsail Architectural|Home</title>
        <link rel="icon" href={iconUrl} />
        <meta
          name="description"
          content="Jipas Tensail is an architectural company that provides Flexible, on-demand talent to help you develop architectural solutions for your business"
        />
        <meta name="theme-color" content="red" />
        <meta property="og:image" content={iconUrl} />
        <meta
          property="og:description"
          content="Jipas Tensail is an architectural company that provides Flexible, on-demand talent to help you develop architectural solutions for your business"
        />
        <meta property="og:title" content="Jipas Tensail Architectural|Home" />
      </Helmet>
      <div className="title_view">
        <div className="show">
          <h1>
            <span className="jp">Jipas</span> <br />
            <span className="jp">Tensail</span>
            <br />
            <span className="jp"> Architectural</span>
          </h1>
          <div className="spans">
            <span className="span span1">Quality tents. </span>
            <span className="span span2">Quality living.</span>
          </div>
        </div>
        <div className="btns"></div>
      </div>
      <div className="home_slide">
        <div className="home_slide_img_div">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            autoplay={{
              delay: 8000,
            }}
            navigation
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
            }}
            scrollbar={{ draggable: true }}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="swipe_wrap">
                <img className="swp" src={arch1} />

                <p className="jtp">
                  Flexible, on-demand talent to help you develop architectural
                  solutions for your business
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swipe_wrap">
                <img className="swp" src={arch2} />

                <p className="jtp">
                  Combine elegance and functionality with our amazing range of
                  architectural structures with fabric. This semi-permanent
                  garden canopy is ideal for hotels, apartment and office suites
                  and institutions..
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swipe_wrap">
                <img className="swp" src={arch3} />

                <p className="jtp">Nothing less than the best</p>
              </div>
            </SwiperSlide>
          </Swiper>

          {
            // <img
            // name="home_image"
            // className="home_image"
            // />
          }
        </div>
      </div>
    </div>
  );
}
//let bg;
//let nv;

//let nav_list;
var xf = [];
let mu = 0;

function f() {}

function Footer() {
  return (
    <div className="footer">
      <div>
        <ul className="footer_list">
          <li className="footer_li">
            <Link className="footer_anchor" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="footer_li">
            <Link className="footer_anchor" to="/help">
              Help Center
            </Link>
          </li>
          <li className="footer_li">
            <Link className="footer_anchor" to="/help#refund">
              Refund Policy
            </Link>
          </li>
        </ul>
        <div className="footer_icons">
          <a className="footer_a" href="https://m.facebook.com/jipastensail">
            <i className="fab fa-facebook"> </i>
          </a>
          <a className="footer_a" href="#">
            <i className="fab fa-whatsapp"> </i>
          </a>
          <a className="footer_a" href="#">
            <i className="fab fa-youtube"> </i>
          </a>
        </div>
      </div>
      <span>
        {" "}
        Jipas Tentsail &copy; 2021 |<br />
        Designed and developed with <i className="fas fa-heart"> </i>by{" "}
        <a href="https://interstellarcodegit.github.io">Interstellar Code</a>
      </span>
    </div>
  );
}

function Intro() {
  return <div></div>;
}

function Main() {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof Storage !== "undefined") {
      try {
        const authtoken = localStorage.getItem("jipasToken");
        if (authtoken != null) {
          dispatch(updateToken(authtoken));
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      // Sorry! No Web Storage support..
    }
    gsap.to("body", {
      opacity: 1,

      duration: 1,
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={MainTitlePage} />

          <Route path="/about" component={AboutPage} />

          <Route path="/services" component={ServicePage} />

          <Route path="/gallery" component={GalleryContainer} />
          <Route path="/contact" component={Contact} />

          <Route path="/login" component={LoginPage} />

          <Route path="/signup" component={SignupPage} />

          <Route path="/upload" component={UploadPage} />

          <Route path="/logout" component={LogoutPage} />

          <Route path="/help" component={HelpPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
ReactDOM.render(
  <Provider store={StateStore}>
    <Main />
  </Provider>,
  document.querySelector(".react-app")
);
