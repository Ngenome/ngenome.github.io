import React, { useState, useEffect } from "react";

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
import { LoginPage, SignupPage, UploadPage } from "./login";
import { updateToken, changePage } from "../actions/index";
import { allReducers } from "../reducers/index";
import { SocialIcons, FooterSocialIcons } from "./about.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Icon(props) {
  return <i id="nav_icon" className={props.cls}></i>;
}
let mu = 0;
export  function Nav() {
  let active;
  const [yes, setYes] = useState(0);

  const isLogged = useSelector((state) => state.isLogged);
  //const currentPage = useSelector(state => state.currentPage)
  // React.useEffect(() => {

  //   active = document.querySelector(`.${currentPage}`);
  //   alert(currentPage)
  //   var anchor_list = document.querySelectorAll('.nav_anchor');
  //   anchor_list.forEach(e => {
  //     e.style.color = 'white'

  //   })
  //   active.style.color = 'red'

  // }, [yes])"
  React.useEffect(() => {
    var bg = document.querySelector(".burger");
    var nv = document.querySelector(".nav");
    var nav_list = document.querySelector(".nav_list");
    var bars = document.querySelector(".bars");

    var an = document.querySelectorAll(".li");

    an.forEach((a) => {
      a.addEventListener("click", () => {
        if (yes === 0) {
          setYes(1);
        } else {
          setYes(0);
        }
      });
    });
    //active.classList.add('.active')

    if (window.innerWidth <= 768) {
      bg.addEventListener("click", () => {
        if (mu == 0) {
          bars.classList.remove("fa-bars");
          bars.classList.add("fa-times");
          gsap.to(".nav", {
            width: "60vw",
            opacity: 1,
            display: "flex",

            height: "100vh",

            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(5px)",
            zIndex: 5,
            delay: 0,
            duration: 1,
          });

          gsap.to(".li", {
            duration: 0.5,
            x: 15,
            opacity: 1,
            stagger: 0.2,
            delay: 2,
            display: "block",
          });
          gsap.to(".nav_anchor", {
            duration: 0.5,
            opacity: 1,
            stagger: 0.5,
            delay: 3,
          });
          gsap.to("#nav_icon", {
            duration: 1,

            opacity: 1,
            stagger: 0.2,
            delay: 2,
          });
          mu = 1;
        } else if (mu == 1) {
          bars.classList.remove("fa-times");
          bars.classList.add("fa-bars");
          gsap.to(".nav", {
            width: "100vw",
            opacity: 0,
            zIndex: -10,
            display: "none",
            height: "5vh",

            background: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(5px)",

            delay: 2,
            duration: 2,
          });

          gsap.to(".li", {
            duration: 0.5,
            x: -15,
            opacity: 0,
            stagger: 0.2,
            delay: 0,
            display: "none",
          });
          gsap.to(".nav_anchor", {
            duration: 0.5,

            opacity: 0,
            stagger: 0.2,
            delay: 0,
          });
          mu = 0;
        }
      });
      an.forEach((a) => {
        a.addEventListener("click", () => {
          bars.classList.add("fa-bars");
          bars.classList.remove("fa-times");
          gsap.to(".nav", {
            width: "100vw",
            opacity: 0,
            zIndex: -10,
            display: "none",
            height: "5vh",

            background: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(5px)",

            delay: 2,
            duration: 2,
          });

          gsap.to(".li", {
            duration: 0.5,
            x: -15,
            opacity: 0,
            stagger: 0.2,
            delay: 0,
            display: "none",
          });
          gsap.to(".nav_anchor", {
            duration: 0.5,

            opacity: 0,
            stagger: 0.2,
            delay: 0,
          });
          mu = 0;
        });
      });
    }
  }, []);

  return (
    <div>
      <h2 className="jt">JT</h2>
      <span className="burger">
        <i className="bars fas fa-bars"></i>
      </span>

      <nav className="nav">
        <div className="th2">
          <h2>JT</h2>
        </div>
        <div className="nav-wrap">
          <ul className="nav_list">
            <li>
              <Link className="li" to="/">
                <Icon cls="fas fa-home" />
              <span className="nav_anchor home">Home</span>       </Link>
            </li>
            <li>
              <Link className="li" to="/services">
                <Icon cls="fas fa-wallet" />
              <span className="nav_anchor servicepage">Services</span>
              </Link>
            </li>
            <li>
              <Link className="li" to="/about">
                <Icon cls="fas fa-question" />
              <span className="nav_anchor  about">About</span>
            </Link>
            </li>
            <li>
              <Link className="li" to="/contact">
                <Icon cls="fas fa-phone" />
              <span className="nav_anchor contact">Contact</span>
              </Link>
            </li>
            <li>
              <Link className="li" to="/gallery">
                <Icon cls="fas fa-image" />
              <span className="nav_anchor gallery">Gallery</span>
              </Link>
            </li>
            {isLogged == false ? (
              <li>
                <Link className="li" to="/login">
                  <Icon cls="fas fa-sign-in-alt" />
                <span className="nav_anchor  login">Login</span>
          </Link>
              </li>
            ) : (
              <li>
                <Link className="li" to="/logout">
                  <Icon cls="fas fa-sign-out-alt" />
                <span className="nav_anchor logoutanchor">Logout</span>
                </Link>{" "}
              </li>
            )}

            {isLogged != true ? (
              <li>
                <Link className="li" to="/signup">
                  <Icon cls="fas fa-user-plus" />
                <span className="nav_anchor signup">Register</span>
                </Link>{" "}
              </li>
            ) : (
              ""()
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
