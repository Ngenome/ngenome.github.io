Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;import{u as e,a,R as t,b as l,g as n,S as r,A as s,c,E as o,d as i,L as m,e as d,f as p,h as u,i as E,P as h,r as f,B as y,j as g,k as v,N,l as b,m as w}from"./vendor.a3bb6d52.js";var k="/assets/arch2.c3c89a6e.jpg";const _=e=>({type:"LOGIN",payload:e}),S={type:"LOGOUT"},x=e=>({type:"CHANGE",payload:e}),j=e=>({type:"CHANGE",payload:e});let q,L=!1,T="./src/images/archy2.png";function C(e){const[a,l]=t.useState("./images/archy2.jpg"),[r,s]=t.useState(0),[c,o]=t.useState("invisible");return q=(e,a)=>{l(e),s(a)},setInterval((function(){L&&o("visible"),0==L&&o("invisible")}),1e3),t.useLayoutEffect((()=>{n.to(".gimg",{opacity:0,duration:.1}),n.to(".gimg",{opacity:1,duration:1}),document.changing.src=a}),[a]),t.createElement("div",{id:"popup",className:c},t.createElement("div",{className:"x",onClick:()=>{L=!1}},t.createElement("i",{className:"fas fa-times-circle"})),t.createElement("div",{className:"popup_image_wrap"},t.createElement("div",{className:"main_image"},t.createElement("div",{className:"prev",onClick:function(){q(e.arr[r-1].image,r-1)}},t.createElement("i",{className:"fas fa-arrow-left"}))," ",t.createElement("img",{name:"changing",className:"gimg",src:a}),t.createElement("div",{className:"next",onClick:function(){q(e.arr[r+1].image,r+1)}},t.createElement("i",{className:"fas fa-arrow-right"}))),t.createElement("div",{className:"images_array"},e.arr.map(((e,a)=>t.createElement("img",{onClick:function(){L=!0,q(e.image,a)},src:e.image}))))))}function O(e){return t.useState(""),t.useState(T),t.useEffect((()=>{}),[]),t.createElement("div",{onClick:function(){L=!0,q(e.src,e.index)},className:"gallery_image_container"},t.createElement("img",{src:e.src}))}function F(){e((e=>{e.token}));a()(j("gallery"));const[n,r]=t.useState(T),[s,c]=t.useState([]);return t.useEffect((()=>{l({method:"get",url:"http://jipastentsail.pythonanywhere.com/jipasApi/imagelist",headers:{"content-type":"application/json"}}).then((e=>{var a=e.data;c(a)}))}),[]),t.createElement("div",null,t.createElement("div",{className:"gallery_h2_wrap"},t.createElement("h2",{className:"gallery_h2"},"Our past Accomplished Designs")),t.createElement(C,{vs:L,arr:s,src:n}),t.createElement("div",{className:"gallery_container"},s.map(((e,a)=>t.createElement(O,{src:e.image,index:a})))))}function A(e){return t.createElement("div",{className:"card"},t.createElement("div",{className:"card_title"},t.createElement("i",{className:`fas fa-${e.icon}`}),t.createElement("h2",null,e.title," ")),t.createElement("div",{className:"card_description"},t.createElement("p",null," ",e.description),t.createElement("button",null,e.buttonText)))}function I(e){return t.createElement("div",{className:"tcard"},t.createElement("div",{className:"tImage_wrap"},t.createElement("div",{className:"tImage"},t.createElement("img",{src:e.imagelink,alt:e.title}))),t.createElement("div",{className:"tcard_title"},t.createElement("div",{className:"head_wrap"},t.createElement("h2",null,e.title," "),t.createElement("h3",{className:"work_title"},e.prof))),t.createElement("div",{className:"tcard_description"},t.createElement("p",null," ",e.description),t.createElement("div",{className:"footer_icons"},t.createElement("a",{className:"footer_a",href:`${e.whatsapplink}`},t.createElement("i",{className:"fab fa-facebook"}," ")),t.createElement("a",{className:"footer_a",href:`${e.whatsapplink}`},t.createElement("i",{className:"fab fa-whatsapp"}," ")),t.createElement("a",{className:"footer_a",href:`${e.youtubelink}`},t.createElement("i",{className:"fab fa-youtube"}," ")))))}function P(){const a=e((e=>e.MyToken)),[n,r]=t.useState(0);return t.createElement("div",{className:"Comment"},t.createElement("div",{className:"pop"},t.createElement("div",{className:"popcheck"},t.createElement("i",{className:"fas fa-check"}),t.createElement("span",null,"Comment posted successfully"))),t.createElement("h2",{className:"comment_title"}," Comments"),t.createElement("form",{className:"comment_form"},t.createElement("textarea",{placeholder:"Write your comment here",className:"comment_textarea"}),t.createElement("div",{style:{color:"red",fontSize:"6px",fontFamily:"Poppins"},id:"errordiv"}),t.createElement("button",{className:"post_button",onClick:e=>{e.preventDefault();var t=document.querySelector(".comment_textarea"),n=document.querySelector("#errordiv");l({method:"POST",url:"http://jipastentsail.pythonanywhere.com/jipasApi/comments/",headers:{"Content-Type":"application/json",Authorization:`Token ${a}`},data:{comment:t.value}}).then((e=>{r(1),setTimeout((()=>{r(0)}),4e3)})).catch((e=>{alert(a),alert(JSON.stringify(e.response)),n.innerHTML=`Network Error,please try again later<br>\n      \n              here is the actual error\n              <br>${e.response.status}`}))}},t.createElement("i",{className:"fas fa-paper-plane"}))))}t.Component;function z(){const[e,n]=t.useState([]),c=a();return r.use([s]),t.useEffect((()=>{c(x("servicepage")),l({method:"get",url:"https://dummyapi.io/data/v1/user?limit=3",headers:{"app-id":"611d144c8b1a0883a7ddeaa1"}}).then((e=>{var a=e.data.data;n(a)}))}),[]),t.createElement("div",{className:"service_flex"},t.createElement("div",{className:"services"},t.createElement("h2",{className:"st"},"Our Services"),t.createElement("div",{className:"tilts"},t.createElement(A,{title:"Design and detailing",icon:"cog",description:"Our products are beautifully designed keeping in mind the fastest market trends, we have ensures top - quality product\n        \n        a team of skilled and experience designer 's that\n        \n        for our valuable clients\n        .",buttonText:"Engage"}),t.createElement(A,{title:"Engineering",icon:"hard-hat",description:"Our team of qualified and experienced engineers ensures any challenge product manufacturer and installation",buttonText:"More"}),t.createElement(A,{title:"Manufacturing",icon:"hammer",description:"\n        Our products are manufactured using high - quality materials, And all the applications like welding sewing tailoring are done with extensive care",buttonText:"Engage"}))),t.createElement("div",{className:"testimonials"},t.createElement("h2",{className:"testimonials_heading"},"What my clients say"),t.createElement("div",{className:"testimonial_cards"},0===e.length?t.createElement("div",null,"loading"):e.map((e=>t.createElement(I,{title:e.firstName,prof:"Senior Person at Somewhere",imagelink:e.picture,description:"Jipas is a very talented dynamic and creative architect. He takes time to think through whichever assignment. He designed my  restaurant which is very beautiful and my customers love it. ",iglink:"https://www.instagram.com",fblink:"https://www.facebook.com",whatsapplink:"https://www.whatsapp.com"}))))),t.createElement(P,null))}function D(e){return t.createElement("div",{className:"social_icons"},t.createElement("a",{id:e.size,className:"anchor_social",href:`${e.fblink}`},t.createElement("i",{className:"fab fa-facebook"})),t.createElement("a",{id:e.size,className:"anchor_social",href:`${e.twitterlink}`},t.createElement("i",{className:"fab fa-twitter"})),t.createElement("a",{id:e.size,className:"anchor_social",href:`${e.whatsapplink}`},t.createElement("i",{className:"fab fa-whatsapp"})),t.createElement("a",{id:e.size,className:"anchor_social",href:`${e.inlink}`},t.createElement("i",{className:"fab fa-linkedin"})),t.createElement("a",{id:e.size,className:"anchor_social",href:`https://${e.iglink}`},t.createElement("i",{className:"fab fa-instagram"})))}function H(){r.use([s]);const e=a();return t.useEffect((()=>{e(j("about"))}),[]),t.createElement("div",{className:"about_flex"},t.createElement("div",{className:"about_image"},t.createElement(c,{modules:[o],effect:"coverflow",autoplay:{delay:8e3},coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:!0,loop:!0,spaceBetween:50,slidesPerView:1,onSlideChange:()=>console.log("slide change"),onSwiper:e=>console.log(e)},t.createElement(i,null,t.createElement("img",{className:"swp",src:"/assets/abt.64063cf9.jpg"})),t.createElement(i,null,t.createElement("img",{className:"swp",src:k})),t.createElement(i,null,t.createElement("img",{className:"swp",src:"/assets/arch5.efe86193.jpg"})),t.createElement(i,null,t.createElement("img",{className:"swp",src:"/assets/arch6.36caee14.jpg"})))),t.createElement("div",{className:"about_desc"},t.createElement("div",{className:"about_desc_top"},t.createElement("h1",{className:"abt_title"},"About us"),t.createElement("div",{className:"hr"}),t.createElement("p",null,"We take pride in our wide knowledge in shading systems. Our specialty lies in luxury cottage tents,car shades,event tents, and dome tents.Our clientele ranges from hotels,resorts,organizations, estates and individuals. Our tents are guaranteed cocktail of aesthetic beauty, durability and versatility. Link up with us for more.")),t.createElement("div",{className:"about_desc_bottom"},t.createElement(D,{inlink:"https://www.linkedin.com",twitterlink:"https://www.instagram.com",fblink:"https://www.facebook.com",whatsapplink:"https://api.whatsapp.com/send?phone=254736886886",iglink:"www.instagram.com"}))))}const M=()=>{const[e,r]=t.useState(0),[s,c]=t.useState(!1);return a()(j("contact")),t.useEffect((()=>{n.to(".fa-paper-plane",{rotate:1.7,yoyo:!0,duration:5,repeat:-1,ease:"sine.inOut"})}),[]),t.useEffect((()=>{n.from(".contact-title",{y:-3,duration:2,delay:3})}),[]),t.useEffect((()=>{1==e?n.to(".pop",{display:"flex",duration:1}):n.to(".pop",{display:"none",duration:1})}),[e]),t.createElement("div",{className:"contact-page"},t.createElement("h1",{className:"contact-title"},"Contact us "),t.createElement("div",{className:"top_welcome"},"Got a question for the team at Jipas Tentsail? Please fill out the form below and we will get back to you as soon as possible. Alternatively, contact us by phone or whatsapp."),t.createElement("div",{className:"pop"},s?t.createElement("div",{className:"popcheck"},t.createElement("i",{className:"fas fa-check"}),t.createElement("span",null,"Email sent successfully")):t.createElement("div",{className:"loader"})),t.createElement("div",{className:"forms"},t.createElement("form",{action:"",className:"contact-form"},t.createElement("div",{className:"wrap"},t.createElement("label",{htmlFor:"name",id:"name-label"},"Enter your Name"),t.createElement("input",{required:!0,type:"text",placeholder:"Enter your full name here",id:"name"})),t.createElement("div",{className:"wrap"},t.createElement("label",{htmlFor:"email",id:"mail-label"},"Email"),t.createElement("input",{required:!0,type:"text",placeholder:"Enter your email  here",id:"mailin"})),t.createElement("div",{className:"wrap"},t.createElement("label",{htmlFor:"url",id:"web-label"},"Subject"),t.createElement("input",{type:"text",placeholder:"Enter the email subject here",id:"subject"})),t.createElement("div",{className:"wrap"},t.createElement("label",{htmlFor:"message",id:"message-label"},"Message"),t.createElement("textarea",{name:"message",id:"message-textarea",cols:"30",placeholder:"Enter the email body here",rows:"10"})),t.createElement("div",{style:{color:"red",fontSize:"14px",fontFamily:"Poppins"},id:"errordiv"}),t.createElement("button",{className:"submit",onClick:e=>{e.preventDefault(),r(1);var a=document.querySelector("#name"),t=document.querySelector("#subject"),n=document.querySelector("#message-textarea"),s=document.querySelector("#errordiv"),o=document.querySelector("#mailin");l({method:"post",url:"http://jipastentsail.pythonanywhere.com/jipasApi/sendemail/",headers:{"Content-Type":"Application/json"},data:{name:a.value,email:n.value,fromEmail:o.value,subject:t.value}}).then((e=>{c(!0),setTimeout((()=>{r(0)}),4e3)})).catch((e=>{s.innerHTML=`Network Error,please try again later<br>\n          here is the actual error${e}`}))},type:"submit"},t.createElement("i",{className:"fas fa-paper-plane"}))),t.createElement("div",{className:"lower-contacts",style:{display:"flex",justifyContent:"center"}},t.createElement("div",{className:"wrap-contact",style:{display:"flex",flexDirection:"column",justifyContent:"space-around"}},t.createElement("div",{className:"c-ds"}," ",t.createElement("i",{className:"fas fa-envelope"}),"  ",t.createElement("a",{href:"mailto:jipasgarments@gmail.com"},"Email us")),t.createElement("div",{className:"c-ds"},t.createElement("i",{className:"fab fa-whatsapp"}),t.createElement("a",{href:"https://api.whatsapp.com/send?phone=254736886886"},"Send Message")),t.createElement("div",{className:"c-ds"},t.createElement("i",{className:"fas fa-phone"}),t.createElement("a",{href:"tel:0736886886"},"Call us"))))))},$={already:{color:"purple",textDecoration:"none"}},G=()=>{e((e=>e.MyToken));const n=e((e=>e.isLogged)),r=a();return t.useEffect((()=>{r(j("login"))}),[]),n?t.createElement(d,{push:!0,to:"/"}):t.createElement("div",{className:"contact-page"},t.createElement("h1",{className:"contact-title"},t.createElement("i",{className:"fas fa-padlock"}),"Login "),t.createElement("div",null,t.createElement("form",{action:"",className:"contact-form"},t.createElement("div",{className:"wrap"},t.createElement("label",{htmlFor:"name",id:"name-label"},"Enter your Username"),t.createElement("input",{required:!0,type:"username",placeholder:"Enter your username",id:"username"})),t.createElement("div",{className:"wrap"},t.createElement("label",{htmlFor:"name",id:"name-label"},'Enter your password"'),t.createElement("input",{required:!0,type:"password",placeholder:"Enter your password",id:"password"}),t.createElement("div",{style:{color:"chartreuse",fontSize:"14px",fontFamily:"Poppins"},id:"already"},"Dont have an account ",t.createElement("span",null,t.createElement(m,{style:$.already,to:"/signup"},"Sign Up")),t.createElement("div",{style:{color:"red",fontSize:"14px",fontFamily:"Poppins"},id:"errordiv"})),t.createElement("button",{onClick:e=>{e.preventDefault();var a=document.querySelector("#password"),t=document.querySelector("#errordiv"),n=document.querySelector("#username");l({method:"post",url:"http://jipastentsail.pythonanywhere.com/auth/login",headers:{"Content-Type":"Application/json"},data:{username:n.value,password:a.value}}).then((e=>{r(_(e.data.token)),t.innerHTML="","undefined"!=typeof Storage?localStorage.setItem("jipasToken",e.data.token):alert("sorry we couldnt log you in ")})).catch((e=>{alert(e),t.innerHTML="wrong credentials ⚠️"}))},className:"submit",type:"submit"},"Login")))))},U=()=>{e((e=>{e.token}));const n=a();return t.useEffect((()=>{n(j("signup"))}),[]),t.createElement("div",{className:"contact-page"},t.createElement("h1",{className:"contact-title"},"Sign up "),t.createElement("div",null,t.createElement("form",{action:"",className:"contact-form"},t.createElement("div",{className:"wrap"},t.createElement("label",{htmlFor:"name",id:"name-label"},"Enter your Username"),t.createElement("input",{required:!0,type:"text",placeholder:"Enter your username",id:"susername"})),t.createElement("div",{className:"wrap"},t.createElement("label",{htmlFor:"email",id:"mail-label"},"Email"),t.createElement("input",{required:!0,type:"text",placeholder:"Enter your email  here",id:"semail"})),t.createElement("div",{className:"wrap"},t.createElement("label",{htmlFor:"name",id:"name-label"},"Enter your password"),t.createElement("input",{required:!0,type:"password",placeholder:"Enter your password",id:"spassword"})),t.createElement("div",{className:"wrap"},t.createElement("label",{htmlFor:"name",id:"name-label"},"Enter your password"),t.createElement("input",{required:!0,type:"password",placeholder:"Repeat your password",id:"srpassword"}),t.createElement("div",{style:{color:"chartreuse",fontSize:"14px",fontFamily:"Poppins"},id:"already"},"Already have an account? ",t.createElement("span",null,t.createElement(m,{style:$.already,to:"/login"},"Login"))),t.createElement("div",{style:{color:"red",fontSize:"14px",fontFamily:"Poppins"},id:"serrordiv"}),t.createElement("button",{className:"submit",type:"submit",onClick:e=>{e.preventDefault();var a=document.querySelector("#semail"),t=document.querySelector("#spassword"),r=document.querySelector("#serrordiv"),s=document.querySelector("#srpassword"),c=document.querySelector("#susername");t!=s?r.innerHTML=" sorry passwords didnt match":l({method:"post",url:"http://jipastentsail.pythonanywhere.com/auth/register",headers:{"Content-Type":"Application/json"},data:{username:c.value,email:a.value,password:t.value}}).then((e=>{alert("user created successfully"),n(_(e.data.token)),r.innerHTML="","undefined"!=typeof Storage?localStorage.setItem("jipasToken",e.data.token):alert("sorry we couldnt save your credentials you will have to login again next time")})).catch((e=>{r.innerHTML="wrong credentials  ⚠️"}))}},t.createElement("i",{className:"fas fa-paper-plane"})," Signup")))))},J=()=>(e((e=>e.token)),t.createElement("div",{className:"contact-page"},t.createElement("h1",{className:"contact-title"},"Upload"),t.createElement("div",null,t.createElement("div",{className:"contact-form"},t.createElement("div",{className:"wrap"},t.createElement("label",{htmlFor:"name",id:"name-label"},"Image Name"),t.createElement("input",{required:!0,type:"text",placeholder:"Enter image name",id:"name"})),t.createElement("div",{className:"wrap"},t.createElement("label",{htmlFor:"email",id:"mail-label"},"Image"),t.createElement("input",{name:"imgupload",required:!0,type:"file",id:"image"})),t.createElement("div",{className:"wrap"},t.createElement("label",{htmlFor:"name",id:"name-label"},"Image Description"),t.createElement("input",{required:!0,type:"text",placeholder:"Enter the image Description",id:"img-desc"})),t.createElement("button",{className:"submit",type:"submit",onClick:e=>{e.preventDefault();var a=new FormData,t=document.querySelector("#image");a.append("image",t.files[0]),a.append("title","testtitle"),a.append("description","testdesc"),a.append("category","yehheee"),l({method:"post",url:"http://localhost:8000/images",headers:{"Content-Type":"multipart/form-data",Authorization:" Token 11863571b36d91bd8b2a9d1c4f5bc5616f152debea73f974e86b9f8ecc991f0cyyyy"},data:a})}},t.createElement("i",{className:"fas fa-paper-plane"})," Upload"))))),R=p({MyToken:(e="",a)=>{switch(a.type){case"LOGIN":return a.payload;case"LOGOUT":return"";default:return e}},isLogged:(e=!1,a)=>{switch(a.type){case"LOGIN":return!0;case"LOGOUT":return!1;default:return e}},currentPage:(e="home",a)=>{switch(a.type){case"CHANGE":return a.payload;default:return e}}});const W=()=>{const e=a();return t.useEffect((()=>{e(x("logout"))}),[]),t.createElement("div",{className:"logout"},t.createElement("div",{className:"main"},t.createElement("span",{className:"logout_span"},"Do  you really want to Log out?"),t.createElement("button",{onClick:()=>{if(e(S),location.replace("/"),"undefined"!=typeof Storage)try{localStorage.removeItem("jipasToken")}catch(a){console.log(a)}},className:"logout_button"},t.createElement("span",null,"  Log out"))))};const B=u(R);function Q(){const e=a();return r.use([s]),t.useState("desktop"),t.useState(1),t.useState(1),f.exports.useEffect((()=>{e(j("home")),n.from(".show",{duration:2,opacity:0,ease:"bounce"}),n.from(".title_btn",{opacity:0,duration:2,delay:4}),n.from(".jp",{opacity:0,duration:1,delay:0,stagger:1}),n.to(".span",{duration:2,opacity:1,delay:3,stagger:.4}),n.from(".span1",{y:-8,delay:3,ease:"bounce",duration:1}),n.from(".span2",{y:-8,delay:3.5,ease:"bounce",duration:1}),n.from(".span2",{opacity:0,delay:3,duration:1})}),[]),t.useEffect((()=>{n.from(".jtp",{opacity:0,delay:3,duration:1})}),[]),t.useState(480),t.createElement("div",{className:"main-flex"},t.createElement("div",{className:"title_view"},t.createElement("div",{className:"show"},t.createElement("h2",null,t.createElement("span",{className:"jp"},"Jipas")," ",t.createElement("br",null),t.createElement("span",{className:"jp"},"Tensail"),t.createElement("br",null),t.createElement("span",{className:"jp"}," Architectural")),t.createElement("div",{className:"spans"},t.createElement("span",{className:"span span1"},"Quality tents. "),t.createElement("span",{className:"span span2"},"Quality living."))),t.createElement("div",{className:"btns"})),t.createElement("div",{className:"home_slide"},t.createElement("div",{className:"home_slide_img_div"},t.createElement(c,{modules:[N,b,w],autoplay:{delay:8e3},navigation:!0,pagination:{clickable:!0,bulletClass:"swiper-pagination-bullet"},scrollbar:{draggable:!0},loop:!0,spaceBetween:50,slidesPerView:1,onSlideChange:()=>console.log("slide change")},t.createElement(i,null,t.createElement("div",{className:"swipe_wrap"},t.createElement("img",{className:"swp",src:k}),t.createElement("p",{className:"jtp"},"Flexible, on-demand talent to help you develop architectural solutions for your business"))),t.createElement(i,null,t.createElement("div",{className:"swipe_wrap"},t.createElement("img",{className:"swp",src:"/assets/arch.2c5cba53.jpg"}),t.createElement("p",{className:"jtp"},"Quality and attractive design"))),t.createElement(i,null,t.createElement("div",{className:"swipe_wrap"},t.createElement("img",{className:"swp",src:"/assets/arch4.97eb51fe.jpg"}),t.createElement("p",{className:"jtp"},"Nothing less than the best")))))))}let V=0;function K(e){return t.createElement("i",{id:"nav_icon",className:e.cls})}function X(){return t.createElement("footer",{className:"footer"},t.createElement("div",null,t.createElement("ul",{className:"footer_list"},t.createElement("li",{className:"footer_li"},t.createElement(m,{className:"footer_anchor",to:"/contact"},"Contact us")),t.createElement("li",{className:"footer_li"},t.createElement(m,{className:"footer_anchor",to:"/help"},"Help Center")),t.createElement("li",{className:"footer_li"},t.createElement(m,{className:"footer_anchor",to:"/help#refund"},"Refund Policy"))),t.createElement("div",{className:"footer_icons"},t.createElement("a",{className:"footer_a",href:"#"},t.createElement("i",{className:"fab fa-facebook"}," ")),t.createElement("a",{className:"footer_a",href:"#"},t.createElement("i",{className:"fab fa-whatsapp"}," ")),t.createElement("a",{className:"footer_a",href:"#"},t.createElement("i",{className:"fab fa-youtube"}," ")))),t.createElement("span",null," Jipas Tentsail © 2021 |",t.createElement("br",null),"Designed and developed with ",t.createElement("i",{className:"fas fa-heart"}," "),"by ",t.createElement("a",{href:"https://interstellarcodegit.github.io"},"Interstellar Code")))}function Y(){const[a,l]=f.exports.useState(0),r=e((e=>e.isLogged));return e((e=>e.currentPage)),t.useEffect((()=>{var e=document.querySelector(".burger");document.querySelector(".nav"),document.querySelector(".nav_list");var t=document.querySelector(".bars"),r=document.querySelectorAll(".li");r.forEach((e=>{e.addEventListener("click",(()=>{l(0===a?1:0)}))})),window.innerWidth<=768&&(e.addEventListener("click",(()=>{0==V?(t.classList.remove("fa-bars"),t.classList.add("fa-times"),n.to(".nav",{width:"60vw",opacity:1,display:"flex",height:"100vh",background:"rgba(0,0,0,0.9)",backdropFilter:"blur(5px)",zIndex:5,delay:0,duration:1}),n.to(".li",{duration:.5,x:15,opacity:1,stagger:.2,delay:2,display:"block"}),n.to(".nav_anchor",{duration:.5,opacity:1,stagger:.5,delay:3}),n.to("#nav_icon",{duration:1,opacity:1,stagger:.2,delay:2}),V=1):1==V&&(t.classList.remove("fa-times"),t.classList.add("fa-bars"),n.to(".nav",{width:"100vw",opacity:0,zIndex:-10,display:"none",height:"5vh",background:"rgba(0,0,0,0.9)",backdropFilter:"blur(5px)",delay:2,duration:2}),n.to(".li",{duration:.5,x:-15,opacity:0,stagger:.2,delay:0,display:"none"}),n.to(".nav_anchor",{duration:.5,opacity:0,stagger:.2,delay:0}),V=0)})),r.forEach((e=>{e.addEventListener("click",(()=>{t.classList.add("fa-bars"),t.classList.remove("fa-times"),n.to(".nav",{width:"100vw",opacity:0,zIndex:-10,display:"none",height:"5vh",background:"rgba(0,0,0,0.9)",backdropFilter:"blur(5px)",delay:2,duration:2}),n.to(".li",{duration:.5,x:-15,opacity:0,stagger:.2,delay:0,display:"none"}),n.to(".nav_anchor",{duration:.5,opacity:0,stagger:.2,delay:0}),V=0}))})))}),[]),t.createElement("div",null,t.createElement("h2",{className:"jt"},"JT"),t.createElement("span",{className:"burger"},t.createElement("i",{className:"bars fas fa-bars"})),t.createElement("nav",{className:"nav"},t.createElement("div",{className:"th2"},t.createElement("h2",null,"JT")),t.createElement("div",{className:"nav-wrap"},t.createElement("ul",{className:"nav_list"},t.createElement(m,{className:"li",to:"/"},t.createElement("li",null,"  ",t.createElement(K,{cls:"fas fa-home"}),t.createElement("a",{className:"nav_anchor home"},"Home"))),t.createElement(m,{className:"li",to:"/services"},t.createElement("li",null,t.createElement(K,{cls:"fas fa-wallet"}),t.createElement("a",{className:"nav_anchor servicepage"},"Services"))),t.createElement(m,{className:"li",to:"/about"},t.createElement("li",null,t.createElement(K,{cls:"fas fa-question"}),t.createElement("a",{className:"nav_anchor about"},"About"))),t.createElement(m,{className:"li",to:"/contact"},t.createElement("li",null,t.createElement(K,{cls:"fas fa-phone"}),t.createElement("a",{className:"nav_anchor contact"},"Contact"))),t.createElement(m,{className:"li",to:"/gallery"},t.createElement("li",null,t.createElement(K,{cls:"fas fa-image"}),t.createElement("a",{className:"nav_anchor gallery"},"Gallery"))),0==r?t.createElement(m,{className:"li",to:"/login"},t.createElement("li",null,t.createElement(K,{cls:"fas fa-sign-in-alt"}),t.createElement("a",{className:"nav_anchor login"},"Login"))):t.createElement(m,{className:"li",to:"/logout"},t.createElement("li",null,t.createElement(K,{cls:"fas fa-sign-out-alt"}),t.createElement("a",{className:"nav_anchor logoutanchor"},"Logout"))),1!=r?t.createElement(m,{className:"li",to:"/signup"},t.createElement("li",null,t.createElement(K,{cls:"fas fa-user-plus"}),t.createElement("a",{className:"nav_anchor signup"},"Register"))):""))))}function Z(){e((e=>e.isLogged));const l=a();return f.exports.useEffect((()=>{if("undefined"!=typeof Storage)try{const e=localStorage.getItem("jipasToken");null!=e&&l(_(e))}catch(e){console.log(e)}n.to("body",{opacity:1,duration:1})}),[]),t.createElement(y,null,t.createElement("div",{className:"App"},t.createElement(Y,null),t.createElement(g,null,t.createElement(v,{path:"/",exact:!0,component:Q}),t.createElement(v,{path:"/about",component:H}),t.createElement(v,{path:"/services",component:z}),t.createElement(v,{path:"/gallery",component:F}),t.createElement(v,{path:"/contact",component:M}),t.createElement(v,{path:"/login",component:G}),t.createElement(v,{path:"/signup",component:U}),t.createElement(v,{path:"/upload",component:J}),t.createElement(v,{path:"/logout",component:W})),t.createElement(X,null)))}E.render(t.createElement(h,{store:B},t.createElement(Z,null)),document.querySelector(".react-app"));