Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;import{u as e,a as t,R as a,b as n,g as l,S as r,A as s,c,E as o,d as i,H as m,L as p,e as d,f as u,h,i as E,P as f,r as y,B as g,j as v,k as N,N as w,l as b,m as _}from"./vendor.c5f46ecc.js";var k="/assets/arch2.c3c89a6e.jpg";const S=e=>({type:"LOGIN",payload:e}),j={type:"LOGOUT"},x=e=>({type:"CHANGE",payload:e}),q=e=>({type:"CHANGE",payload:e});let T,L=!1,C="./src/images/archy2.png";function O(e){const[t,n]=a.useState("./images/archy2.jpg"),[r,s]=a.useState(0),[c,o]=a.useState("invisible");return T=(e,t)=>{n(e),s(t)},setInterval((function(){L&&o("visible"),0==L&&o("invisible")}),1e3),a.useLayoutEffect((()=>{l.to(".gimg",{opacity:0,duration:.1}),l.to(".gimg",{opacity:1,duration:1}),document.changing.src=t}),[t]),a.createElement("div",{id:"popup",className:c},a.createElement("div",{className:"x",onClick:()=>{L=!1}},a.createElement("i",{className:"fas fa-times-circle"})),a.createElement("div",{className:"popup_image_wrap"},a.createElement("div",{className:"main_image"},a.createElement("div",{className:"prev",onClick:function(){T(e.arr[r-1].image,r-1)}},a.createElement("i",{className:"fas fa-arrow-left"}))," ",a.createElement("img",{name:"changing",className:"gimg",src:t}),a.createElement("div",{className:"next",onClick:function(){T(e.arr[r+1].image,r+1)}},a.createElement("i",{className:"fas fa-arrow-right"}))),a.createElement("div",{className:"images_array"},e.arr.map(((e,t)=>a.createElement("img",{onClick:function(){L=!0,T(e.image,t)},src:e.image}))))))}function A(e){return a.useState(""),a.useState(C),a.useEffect((()=>{}),[]),a.createElement("div",{onClick:function(){L=!0,T(e.src,e.index)},className:"gallery_image_container"},a.createElement("img",{src:e.src}))}function F(){e((e=>{e.token}));t()(q("gallery"));const[l,r]=a.useState(C),[s,c]=a.useState([]);return a.useEffect((()=>{n({method:"get",url:"http://jipastentsail.pythonanywhere.com/jipasApi/imagelist",headers:{"content-type":"application/json"}}).then((e=>{var t=e.data;c(t)}))}),[]),a.createElement("div",null,a.createElement("div",{className:"gallery_h2_wrap"},a.createElement("h2",{className:"gallery_h2"},"Our past Accomplished Designs")),a.createElement(O,{vs:L,arr:s,src:l}),a.createElement("div",{className:"gallery_container"},s.map(((e,t)=>a.createElement(A,{src:e.image,index:t})))))}function I(e){return a.createElement("div",{className:"card"},a.createElement("div",{className:"card_title"},a.createElement("i",{className:`fas fa-${e.icon}`}),a.createElement("h2",null,e.title," ")),a.createElement("div",{className:"card_description"},a.createElement("p",null," ",e.description),a.createElement("button",null,e.buttonText)))}function P(e){return a.createElement("div",{className:"tcard"},a.createElement("div",{className:"tImage_wrap"},a.createElement("div",{className:"tImage"},a.createElement("img",{src:e.imagelink,alt:e.title}))),a.createElement("div",{className:"tcard_title"},a.createElement("div",{className:"head_wrap"},a.createElement("h2",null,e.title," "),a.createElement("h3",{className:"work_title"},e.prof))),a.createElement("div",{className:"tcard_description"},a.createElement("p",null," ",e.description),a.createElement("div",{className:"footer_icons"},a.createElement("a",{className:"footer_a",href:`${e.whatsapplink}`},a.createElement("i",{className:"fab fa-facebook"}," ")),a.createElement("a",{className:"footer_a",href:`${e.whatsapplink}`},a.createElement("i",{className:"fab fa-whatsapp"}," ")),a.createElement("a",{className:"footer_a",href:`${e.youtubelink}`},a.createElement("i",{className:"fab fa-youtube"}," ")))))}a.Component;function z(){const[l,c]=a.useState([]),o=t();r.use([s]);const[i,m]=a.useState(!1),p=e((e=>e.MyToken)),[d,u]=a.useState(0);return a.useEffect((()=>{gsap.to(".pop",{display:"none",duration:.1})}),[]),a.useEffect((()=>{1==d?gsap.to(".pop",{display:"flex",duration:1}):gsap.to(".pop",{display:"none",duration:1})}),[d]),a.useEffect((()=>{o(x("servicepage")),n({method:"get",url:"https://dummyapi.io/data/v1/user?limit=3",headers:{"app-id":"611d144c8b1a0883a7ddeaa1"}}).then((e=>{var t=e.data.data;c(t)}))}),[]),a.createElement("div",{className:"service_flex"},a.createElement("div",{className:"pop"},i?a.createElement("div",{className:"popcheck"},a.createElement("i",{className:"fas fa-check"}),a.createElement("span",null,"Comment added  successfully")):a.createElement("div",{className:"loader"})),a.createElement("div",{className:"services"},a.createElement("h2",{className:"st"},"Our Services"),a.createElement("div",{className:"tilts"},a.createElement(I,{title:"Design and detailing",icon:"cog",description:"Our products are beautifully designed keeping in mind the fastest market trends, we have ensures top - quality product\n        \n        a team of skilled and experience designer 's that\n        \n        for our valuable clients\n        .",buttonText:"Engage"}),a.createElement(I,{title:"Engineering",icon:"hard-hat",description:"Our team of qualified and experienced engineers ensures any challenge product manufacturer and installation",buttonText:"More"}),a.createElement(I,{title:"Manufacturing",icon:"hammer",description:"\n        Our products are manufactured using high - quality materials, And all the applications like welding sewing tailoring are done with extensive care",buttonText:"Engage"}))),a.createElement("div",{className:"testimonials"},a.createElement("h2",{className:"testimonials_heading"},"What my clients say"),a.createElement("div",{className:"testimonial_cards"},0===l.length?a.createElement("div",{className:"centered_content"},a.createElement("div",{className:"loader"})):l.map((e=>a.createElement(P,{title:e.firstName,prof:"Senior Person at Somewhere",imagelink:e.picture,description:"Jipas is a very talented dynamic and creative architect. He takes time to think through whichever assignment. He designed my  restaurant which is very beautiful and my customers love it. ",iglink:"https://www.instagram.com",fblink:"https://www.facebook.com",whatsapplink:"https://www.whatsapp.com"}))))),a.createElement("div",{className:"Comment"},a.createElement("h2",{className:"comment_title"}," Comments"),a.createElement("form",{className:"comment_form"},a.createElement("textarea",{placeholder:"Write your comment here",className:"comment_textarea"}),a.createElement("div",{style:{color:"red",fontSize:"6px",fontFamily:"Poppins"},id:"errordiv"}),a.createElement("button",{className:"post_button",onClick:e=>{e.preventDefault(),u(1),e.preventDefault();var t=document.querySelector(".comment_textarea"),a=document.querySelector("#errordiv");n({method:"POST",url:"http://jipastentsail.pythonanywhere.com/jipasApi/comments/",headers:{"Content-Type":"application/json",Authorization:`Token ${p}`},data:{comment:t.value}}).then((e=>{u(1),m(!0),setTimeout((()=>{u(0)}),4e3)})).catch((e=>{alert(p),alert(JSON.stringify(e.response)),a.innerHTML=`Network Error,please try again later<br>\n                  \n                          here is the actual error\n                          <br>${e.response.status}`}))}},a.createElement("i",{className:"fas fa-paper-plane"})))))}function H(e){return a.createElement("div",{className:"social_icons"},a.createElement("a",{id:e.size,className:"anchor_social",href:`${e.fblink}`},a.createElement("i",{className:"fab fa-facebook"})),a.createElement("a",{id:e.size,className:"anchor_social",href:`${e.twitterlink}`},a.createElement("i",{className:"fab fa-twitter"})),a.createElement("a",{id:e.size,className:"anchor_social",href:`${e.whatsapplink}`},a.createElement("i",{className:"fab fa-whatsapp"})),a.createElement("a",{id:e.size,className:"anchor_social",href:`${e.inlink}`},a.createElement("i",{className:"fab fa-linkedin"})),a.createElement("a",{id:e.size,className:"anchor_social",href:`https://${e.iglink}`},a.createElement("i",{className:"fab fa-instagram"})))}function D(){r.use([s]);const e=t();return a.useEffect((()=>{e(q("about"))}),[]),a.createElement("div",{className:"about_flex"},a.createElement("div",{className:"about_image"},a.createElement(c,{modules:[o],effect:"coverflow",autoplay:{delay:8e3},coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:!0,loop:!0,spaceBetween:50,slidesPerView:1,onSlideChange:()=>console.log("slide change"),onSwiper:e=>console.log(e)},a.createElement(i,null,a.createElement("img",{className:"swp",src:"/assets/abt.64063cf9.jpg"})),a.createElement(i,null,a.createElement("img",{className:"swp",src:k})),a.createElement(i,null,a.createElement("img",{className:"swp",src:"/assets/arch5.efe86193.jpg"})),a.createElement(i,null,a.createElement("img",{className:"swp",src:"/assets/arch6.36caee14.jpg"})))),a.createElement("div",{className:"about_desc"},a.createElement("div",{className:"about_desc_top"},a.createElement("h1",{className:"abt_title"},"About us"),a.createElement("div",{className:"hr"}),a.createElement("p",null,"We take pride in our wide knowledge in shading systems. Our specialty lies in luxury cottage tents,car shades,event tents, and dome tents.Our clientele ranges from hotels,resorts,organizations, estates and individuals. Our tents are guaranteed cocktail of aesthetic beauty, durability and versatility. Link up with us for more.")),a.createElement("div",{className:"about_desc_bottom"},a.createElement(H,{inlink:"https://www.linkedin.com",twitterlink:"https://www.instagram.com",fblink:"https://www.facebook.com",whatsapplink:"https://api.whatsapp.com/send?phone=254736886886",iglink:"www.instagram.com"}))))}const J=()=>{const[e,r]=a.useState(0),[s,c]=a.useState(!1);return t()(q("contact")),a.useEffect((()=>{l.to(".fa-paper-plane",{rotate:1.7,yoyo:!0,duration:5,repeat:-1,ease:"sine.inOut"})}),[]),a.useEffect((()=>{l.from(".contact-title",{y:-3,duration:2,delay:3})}),[]),a.useEffect((()=>{1==e?l.to(".pop",{display:"flex",duration:1}):l.to(".pop",{display:"none",duration:1})}),[e]),a.createElement("div",{className:"contact-page"},a.createElement(m,null,a.createElement("title",null,"Jipas Tentsail Architectural|Contact"),a.createElement("link",{rel:"icon",href:"http://jipastentsail.pythonanywhere.com/media/images/109361632_106981647764696_8765227589641973587_n.jpg"}),a.createElement("meta",{name:"description",content:"Jipas Tensail is an architectural company that provides Flexible, on-demand talent to help you develop architectural solutions for your business. Got a question for the team at Jipas Tentsail? Please fill out the form below and we will get back to you as soon as possible. Alternatively, contact us by phone or whatsapp."}),a.createElement("meta",{name:"theme-color",content:"red"}),a.createElement("meta",{property:"og:image",content:"http://jipastentsail.pythonanywhere.com/media/images/109361632_106981647764696_8765227589641973587_n.jpg"}),a.createElement("meta",{property:"og:description",content:"Got a question for the team at Jipas Tentsail? Please fill out the form below and we will get back to you as soon as possible. Alternatively, contact us by phone or whatsapp."}),a.createElement("meta",{property:"og:title",content:"Jipas Tensail Architectural|Contact "})),a.createElement("div",{className:"wrap_contact_title"},a.createElement("h1",{className:"contact-title"},"Contact us ")),a.createElement("div",{className:"top_welcome"},"Got a question for the team at Jipas Tentsail? Please fill out the form below and we will get back to you as soon as possible. Alternatively, contact us by phone or whatsapp."),a.createElement("div",{className:"pop"},s?a.createElement("div",{className:"popcheck"},a.createElement("i",{className:"fas fa-check"}),a.createElement("span",null,"Email sent successfully")):a.createElement("div",{className:"loader"})),a.createElement("div",{className:"forms"},a.createElement("form",{action:"",className:"contact-form"},a.createElement("div",{className:"wrap"},a.createElement("label",{htmlFor:"name",id:"name-label"},"Enter your Name"),a.createElement("input",{required:!0,type:"text",placeholder:"Enter your full name here",id:"name"})),a.createElement("div",{className:"wrap"},a.createElement("label",{htmlFor:"email",id:"mail-label"},"Email"),a.createElement("input",{required:!0,type:"text",placeholder:"Enter your email  here",id:"mailin"})),a.createElement("div",{className:"wrap"},a.createElement("label",{htmlFor:"url",id:"web-label"},"Subject"),a.createElement("input",{type:"text",placeholder:"Enter the email subject here",id:"subject"})),a.createElement("div",{className:"wrap"},a.createElement("label",{htmlFor:"message",id:"message-label"},"Message"),a.createElement("textarea",{name:"message",id:"message-textarea",cols:"30",placeholder:"Enter the email body here",rows:"10"})),a.createElement("div",{style:{color:"red",fontSize:"14px",fontFamily:"Poppins"},id:"errordiv"}),a.createElement("button",{className:"submit",onClick:e=>{e.preventDefault(),r(1);var t=document.querySelector("#name"),a=document.querySelector("#subject"),l=document.querySelector("#message-textarea"),s=document.querySelector("#errordiv"),o=document.querySelector("#mailin");n({method:"post",url:"http://jipastentsail.pythonanywhere.com/jipasApi/sendemail/",headers:{"Content-Type":"Application/json"},data:{name:t.value,email:l.value,fromEmail:o.value,subject:a.value}}).then((e=>{c(!0),setTimeout((()=>{r(0)}),4e3)})).catch((e=>{s.innerHTML=`Network Error,please try again later<br>\n          here is the actual error${e}`}))},type:"submit"},a.createElement("i",{className:"fas fa-paper-plane"}))),a.createElement("div",{className:"lower-contacts",style:{display:"flex",justifyContent:"center"}},a.createElement("div",{className:"wrap-contact",style:{display:"flex",flexDirection:"column",justifyContent:"space-around"}},a.createElement("div",{className:"c-ds"}," ",a.createElement("i",{className:"fas fa-envelope"}),"  ",a.createElement("a",{href:"mailto:jipasgarments@gmail.com"},"Email us")),a.createElement("div",{className:"c-ds"},a.createElement("i",{className:"fab fa-whatsapp"}),a.createElement("a",{href:"https://api.whatsapp.com/send?phone=254722786776"},"Send Message")),a.createElement("div",{className:"c-ds"},a.createElement("i",{className:"fas fa-phone"}),a.createElement("a",{href:"tel:0736886886"},"Call us"))))))},M={already:{color:"purple",textDecoration:"none"}},G=()=>{e((e=>e.MyToken));const l=e((e=>e.isLogged)),r=t();return a.useEffect((()=>{r(q("login"))}),[]),l?a.createElement(d,{push:!0,to:"/"}):a.createElement("div",{className:"contact-page"},a.createElement("h1",{className:"contact-title"},a.createElement("i",{className:"fas fa-padlock"}),"Login "),a.createElement("div",null,a.createElement("form",{action:"",className:"contact-form"},a.createElement("div",{className:"wrap"},a.createElement("label",{htmlFor:"name",id:"name-label"},"Enter your Username"),a.createElement("input",{required:!0,type:"username",placeholder:"Enter your username",id:"username"})),a.createElement("div",{className:"wrap"},a.createElement("label",{htmlFor:"name",id:"name-label"},'Enter your password"'),a.createElement("input",{required:!0,type:"password",placeholder:"Enter your password",id:"password"}),a.createElement("div",{style:{color:"chartreuse",fontSize:"14px",fontFamily:"Poppins"},id:"already"},"Dont have an account ",a.createElement("span",null,a.createElement(p,{style:M.already,to:"/signup"},"Sign Up")),a.createElement("div",{style:{color:"red",fontSize:"14px",fontFamily:"Poppins"},id:"errordiv"})),a.createElement("button",{onClick:e=>{e.preventDefault();var t=document.querySelector("#password"),a=document.querySelector("#errordiv"),l=document.querySelector("#username");n({method:"post",url:"http://jipastentsail.pythonanywhere.com/auth/login",headers:{"Content-Type":"Application/json"},data:{username:l.value,password:t.value}}).then((e=>{r(S(e.data.token)),a.innerHTML="","undefined"!=typeof Storage?localStorage.setItem("jipasToken",e.data.token):alert("sorry we couldnt log you in ")})).catch((e=>{alert(e),a.innerHTML="wrong credentials ⚠️"}))},className:"submit",type:"submit"},"Login")))))},$=()=>{e((e=>{e.token}));const l=e((e=>e.isLogged)),r=t();return a.useEffect((()=>{r(q("signup"))}),[]),l?a.createElement(d,{push:!0,to:"/"}):a.createElement("div",{className:"contact-page"},a.createElement("h1",{className:"contact-title"},"Sign up "),a.createElement("div",null,a.createElement("form",{action:"",className:"contact-form"},a.createElement("div",{className:"wrap"},a.createElement("label",{htmlFor:"name",id:"name-label"},"Enter your Username"),a.createElement("input",{required:!0,type:"text",placeholder:"Enter your username",id:"susername"})),a.createElement("div",{className:"wrap"},a.createElement("label",{htmlFor:"email",id:"mail-label"},"Email"),a.createElement("input",{required:!0,type:"text",placeholder:"Enter your email  here",id:"semail"})),a.createElement("div",{className:"wrap"},a.createElement("label",{htmlFor:"name",id:"name-label"},"Enter your password"),a.createElement("input",{required:!0,type:"password",placeholder:"Enter your password",id:"spassword"})),a.createElement("div",{className:"wrap"},a.createElement("label",{htmlFor:"name",id:"name-label"},"Enter your password"),a.createElement("input",{required:!0,type:"password",placeholder:"Repeat your password",id:"srpassword"}),a.createElement("div",{style:{color:"chartreuse",fontSize:"14px",fontFamily:"Poppins"},id:"already"},"Already have an account? ",a.createElement("span",null,a.createElement(p,{style:M.already,to:"/login"},"Login"))),a.createElement("div",{style:{color:"red",fontSize:"14px",fontFamily:"Poppins"},id:"serrordiv"}),a.createElement("button",{className:"submit",type:"submit",onClick:e=>{e.preventDefault();var t=document.querySelector("#semail"),a=document.querySelector("#spassword"),l=document.querySelector("#serrordiv"),s=document.querySelector("#srpassword"),c=document.querySelector("#susername");a.value!=s.value?l.innerHTML=" sorry passwords didnt match":n({method:"post",url:"http://jipastentsail.pythonanywhere.com/auth/register",headers:{"Content-Type":"Application/json"},data:{username:c.value,email:t.value,password:a.value}}).then((e=>{alert("user created successfully"),r(S(e.data.token)),l.innerHTML="","undefined"!=typeof Storage?localStorage.setItem("jipasToken",e.data.token):alert("sorry we couldnt save your credentials you will have to login again next time")})).catch((e=>{l.innerHTML="wrong credentials  ⚠️"}))}},a.createElement("i",{className:"fas fa-paper-plane"})," Signup")))))},W=()=>(e((e=>e.token)),a.createElement("div",{className:"contact-page"},a.createElement("h1",{className:"contact-title"},"Upload"),a.createElement("div",null,a.createElement("div",{className:"contact-form"},a.createElement("div",{className:"wrap"},a.createElement("label",{htmlFor:"name",id:"name-label"},"Image Name"),a.createElement("input",{required:!0,type:"text",placeholder:"Enter image name",id:"name"})),a.createElement("div",{className:"wrap"},a.createElement("label",{htmlFor:"email",id:"mail-label"},"Image"),a.createElement("input",{name:"imgupload",required:!0,type:"file",id:"image"})),a.createElement("div",{className:"wrap"},a.createElement("label",{htmlFor:"name",id:"name-label"},"Image Description"),a.createElement("input",{required:!0,type:"text",placeholder:"Enter the image Description",id:"img-desc"})),a.createElement("button",{className:"submit",type:"submit",onClick:e=>{e.preventDefault();var t=new FormData,a=document.querySelector("#image");t.append("image",a.files[0]),t.append("title","testtitle"),t.append("description","testdesc"),t.append("category","yehheee"),n({method:"post",url:"http://localhost:8000/images",headers:{"Content-Type":"multipart/form-data",Authorization:" Token 11863571b36d91bd8b2a9d1c4f5bc5616f152debea73f974e86b9f8ecc991f0cyyyy"},data:t})}},a.createElement("i",{className:"fas fa-paper-plane"})," Upload"))))),U=u({MyToken:(e="",t)=>{switch(t.type){case"LOGIN":return t.payload;case"LOGOUT":return"";default:return e}},isLogged:(e=!1,t)=>{switch(t.type){case"LOGIN":return!0;case"LOGOUT":return!1;default:return e}},currentPage:(e="home",t)=>{switch(t.type){case"CHANGE":return t.payload;default:return e}}});const R=()=>{const e=t();return a.useEffect((()=>{e(x("logout"))}),[]),a.createElement("div",{className:"logout"},a.createElement("div",{className:"main"},a.createElement("span",{className:"logout_span"},"Do  you really want to Log out?"),a.createElement("button",{onClick:()=>{if(e(j),location.replace("/"),"undefined"!=typeof Storage)try{localStorage.removeItem("jipasToken")}catch(t){console.log(t)}},className:"logout_button"},a.createElement("span",null,"  Log out"))))},B=e=>{const t=a.useRef(null);var[n,l]=a.useState(1);a.useLayoutEffect((()=>{t.current.classList.add("collapsed")}),[]);const r=a.useRef(null);return a.createElement("div",{className:"faq"},a.createElement("h4",{className:"faq_title"},e.title),a.createElement("i",{onClick:()=>{0==n?(t.current.classList.toggle("collapsed"),r.current.classList.remove("fa-chevron-down"),r.current.classList.add("fa-chevron-up"),l(1)):(t.current.classList.toggle("collapsed"),r.current.classList.remove("fa-chevron-up"),r.current.classList.add("fa-chevron-down"),l(0))},ref:r,className:"fas fa-chevron-down"}),a.createElement("div",{ref:t,className:"faq_collapse"},a.createElement("p",{className:"faq_question"},e.question)))};var Q=e=>a.createElement(m,null,a.createElement("title",null,"Jipas Tentsail Architectural|",e.page),a.createElement("link",{rel:"icon",href:"http://jipastentsail.pythonanywhere.com/media/images/109361632_106981647764696_8765227589641973587_n.jpg"}),a.createElement("meta",{name:"description",content:e.desc}),a.createElement("meta",{name:"theme-color",content:"red"}),a.createElement("meta",{property:"og:image",content:"http://jipastentsail.pythonanywhere.com/media/images/109361632_106981647764696_8765227589641973587_n.jpg"}),a.createElement("meta",{property:"og:description",content:e.desc}),a.createElement("meta",{property:"og:title",content:e.title}));const V=()=>{a.useState(0);return t()(q("help")),a.createElement("div",{className:"contact-page"},a.createElement(Q,{desc:"Here you can find a list of frequently asked questions. If none of them answers your questions, feel free to contact us..",page:"help",title:"Jipas Tentsail Architectural"}),a.createElement("div",{className:"wrap_contact_title"},a.createElement("h1",{className:"contact-title"},"Help Center ")),a.createElement("div",{className:"help"},a.createElement("h3",{className:"help_intro"},"Here you can find a list of frequently asked questions. If none of them answers your questions, feel free to contact us."),a.createElement("div",{className:"faqs"},a.createElement(B,{title:"How much do you charge for a web app?",question:"Our prices depend on many factors. To get a better idea of the cost of what you need, give us a quick phone call at +254 748 38 3000 or an email on info@snobole.com."}),a.createElement(B,{title:"What is your development process like?",question:"There are nine steps in our development process;\n\nDiscovery – If the project is a rebuild, we review your current content and make further recommendations for improvements. If it’s a new site, we start by discussing the subjects and functionality you envisage for your site and develop an outline for you.\n\nContent - You compile all the content for the web app, including all text and images.\n\nPreliminary Design - We create a home page concept including colors, fonts, image style, and layout.\n\nOrganization - When we have received all content in its final version, we review it to determine the best way to organize the information. The structure of the site is based on this organizational scheme and must be approved by you.\n\nDesign Revision - After reviewing the initial design, you have the opportunity to request changes.\n\nImplementation - Once we’ve received your approval on the design, we move on to implementation. This is where the approved design becomes concrete and where we add site-specific features.\n\nPage Content - When we have all the content that will be included on the site and an approved design, we will enter all the data.\n\nTesting - We run through a final set of tests to be sure that everything is functional. You have an opportunity at this time to test the site as well.\n\nLaunch - Once we have your final approval, we launch the site. This marks the end of the project."}),a.createElement(B,{title:"What are your payment terms?",question:"Our prices depend on many factors. To get a better idea of the cost of what you need, give us a quick phone call at +254 748 38 3000 or an email on info@snobole.com."})),a.createElement("div",{className:"cannot"},a.createElement("h3",null," Cannot find what you're looking for?"),a.createElement(p,{to:"/contact"},"Contact us"))))};const Y=h(U);function K(){const e=t();return r.use([s]),a.useState("desktop"),a.useState(1),a.useState(1),y.exports.useEffect((()=>{e(q("home")),l.from(".show",{duration:2,opacity:0,ease:"bounce"}),l.from(".title_btn",{opacity:0,duration:2,delay:4}),l.from(".jp",{opacity:0,duration:1,delay:0,stagger:1}),l.to(".span",{duration:2,opacity:1,delay:3,stagger:.4}),l.from(".span1",{y:-8,delay:3,ease:"bounce",duration:1}),l.from(".span2",{y:-8,delay:3.5,ease:"bounce",duration:1}),l.from(".span2",{opacity:0,delay:3,duration:1})}),[]),a.useEffect((()=>{l.from(".jtp",{opacity:0,delay:0,duration:1})}),[]),a.useState(480),a.createElement("div",{className:"main-flex"},a.createElement(m,null,a.createElement("title",null,"Jipas Tentsail Architectural|Home"),a.createElement("link",{rel:"icon",href:"http://jipastentsail.pythonanywhere.com/media/images/109361632_106981647764696_8765227589641973587_n.jpg"}),a.createElement("meta",{name:"description",content:"Jipas Tensail is an architectural company that provides Flexible, on-demand talent to help you develop architectural solutions for your business"}),a.createElement("meta",{name:"theme-color",content:"red"}),a.createElement("meta",{property:"og:image",content:"http://jipastentsail.pythonanywhere.com/media/images/109361632_106981647764696_8765227589641973587_n.jpg"}),a.createElement("meta",{property:"og:description",content:"Jipas Tensail is an architectural company that provides Flexible, on-demand talent to help you develop architectural solutions for your business"}),a.createElement("meta",{property:"og:title",content:"Jipas Tensail Architectural|Home"})),a.createElement("div",{className:"title_view"},a.createElement("div",{className:"show"},a.createElement("h2",null,a.createElement("span",{className:"jp"},"Jipas")," ",a.createElement("br",null),a.createElement("span",{className:"jp"},"Tensail"),a.createElement("br",null),a.createElement("span",{className:"jp"}," Architectural")),a.createElement("div",{className:"spans"},a.createElement("span",{className:"span span1"},"Quality tents. "),a.createElement("span",{className:"span span2"},"Quality living."))),a.createElement("div",{className:"btns"})),a.createElement("div",{className:"home_slide"},a.createElement("div",{className:"home_slide_img_div"},a.createElement(c,{modules:[w,b,_],autoplay:{delay:8e3},navigation:!0,pagination:{clickable:!0,bulletClass:"swiper-pagination-bullet"},scrollbar:{draggable:!0},loop:!0,spaceBetween:50,slidesPerView:1,onSlideChange:()=>console.log("slide change")},a.createElement(i,null,a.createElement("div",{className:"swipe_wrap"},a.createElement("img",{className:"swp",src:k}),a.createElement("p",{className:"jtp"},"Flexible, on-demand talent to help you develop architectural solutions for your business"))),a.createElement(i,null,a.createElement("div",{className:"swipe_wrap"},a.createElement("img",{className:"swp",src:"/assets/arch.2c5cba53.jpg"}),a.createElement("p",{className:"jtp"},"Combine elegance and functionality with our amazing range of architectural structures with fabric. This semi-permanent garden canopy is ideal for hotels, apartment and office suites and institutions.."))),a.createElement(i,null,a.createElement("div",{className:"swipe_wrap"},a.createElement("img",{className:"swp",src:"/assets/arch4.97eb51fe.jpg"}),a.createElement("p",{className:"jtp"},"Nothing less than the best")))))))}let X=0;function Z(e){return a.createElement("i",{id:"nav_icon",className:e.cls})}function ee(){return a.createElement("div",{className:"footer"},a.createElement("div",null,a.createElement("ul",{className:"footer_list"},a.createElement("li",{className:"footer_li"},a.createElement(p,{className:"footer_anchor",to:"/contact"},"Contact us")),a.createElement("li",{className:"footer_li"},a.createElement(p,{className:"footer_anchor",to:"/help"},"Help Center")),a.createElement("li",{className:"footer_li"},a.createElement(p,{className:"footer_anchor",to:"/help#refund"},"Refund Policy"))),a.createElement("div",{className:"footer_icons"},a.createElement("a",{className:"footer_a",href:"https://m.facebook.com/jipastensail"},a.createElement("i",{className:"fab fa-facebook"}," ")),a.createElement("a",{className:"footer_a",href:"#"},a.createElement("i",{className:"fab fa-whatsapp"}," ")),a.createElement("a",{className:"footer_a",href:"#"},a.createElement("i",{className:"fab fa-youtube"}," ")))),a.createElement("span",null," Jipas Tentsail © 2021 |",a.createElement("br",null),"Designed and developed with ",a.createElement("i",{className:"fas fa-heart"}," "),"by ",a.createElement("a",{href:"https://interstellarcodegit.github.io"},"Interstellar Code")))}function te(){const[t,n]=y.exports.useState(0),r=e((e=>e.isLogged));return e((e=>e.currentPage)),a.useEffect((()=>{var e=document.querySelector(".burger");document.querySelector(".nav"),document.querySelector(".nav_list");var a=document.querySelector(".bars"),r=document.querySelectorAll(".li");r.forEach((e=>{e.addEventListener("click",(()=>{n(0===t?1:0)}))})),window.innerWidth<=768&&(e.addEventListener("click",(()=>{0==X?(a.classList.remove("fa-bars"),a.classList.add("fa-times"),l.to(".nav",{width:"60vw",opacity:1,display:"flex",height:"100vh",background:"rgba(0,0,0,0.7)",backdropFilter:"blur(5px)",zIndex:5,delay:0,duration:1}),l.to(".li",{duration:.5,x:15,opacity:1,stagger:.2,delay:2,display:"block"}),l.to(".nav_anchor",{duration:.5,opacity:1,stagger:.5,delay:3}),l.to("#nav_icon",{duration:1,opacity:1,stagger:.2,delay:2}),X=1):1==X&&(a.classList.remove("fa-times"),a.classList.add("fa-bars"),l.to(".nav",{width:"100vw",opacity:0,zIndex:-10,display:"none",height:"5vh",background:"rgba(0,0,0,0.9)",backdropFilter:"blur(5px)",delay:2,duration:2}),l.to(".li",{duration:.5,x:-15,opacity:0,stagger:.2,delay:0,display:"none"}),l.to(".nav_anchor",{duration:.5,opacity:0,stagger:.2,delay:0}),X=0)})),r.forEach((e=>{e.addEventListener("click",(()=>{a.classList.add("fa-bars"),a.classList.remove("fa-times"),l.to(".nav",{width:"100vw",opacity:0,zIndex:-10,display:"none",height:"5vh",background:"rgba(0,0,0,0.9)",backdropFilter:"blur(5px)",delay:2,duration:2}),l.to(".li",{duration:.5,x:-15,opacity:0,stagger:.2,delay:0,display:"none"}),l.to(".nav_anchor",{duration:.5,opacity:0,stagger:.2,delay:0}),X=0}))})))}),[]),a.createElement("div",null,a.createElement("h2",{className:"jt"},"JT"),a.createElement("span",{className:"burger"},a.createElement("i",{className:"bars fas fa-bars"})),a.createElement("nav",{className:"nav"},a.createElement("div",{className:"th2"},a.createElement("h2",null,"JT")),a.createElement("div",{className:"nav-wrap"},a.createElement("ul",{className:"nav_list"},a.createElement(p,{className:"li",to:"/"},a.createElement("li",null,"  ",a.createElement(Z,{cls:"fas fa-home"}),a.createElement("a",{className:"nav_anchor home"},"Home"))),a.createElement(p,{className:"li",to:"/services"},a.createElement("li",null,a.createElement(Z,{cls:"fas fa-wallet"}),a.createElement("a",{className:"nav_anchor servicepage"},"Services"))),a.createElement(p,{className:"li",to:"/about"},a.createElement("li",null,a.createElement(Z,{cls:"fas fa-question"}),a.createElement("a",{className:"nav_anchor about"},"About"))),a.createElement(p,{className:"li",to:"/contact"},a.createElement("li",null,a.createElement(Z,{cls:"fas fa-phone"}),a.createElement("a",{className:"nav_anchor contact"},"Contact"))),a.createElement(p,{className:"li",to:"/gallery"},a.createElement("li",null,a.createElement(Z,{cls:"fas fa-image"}),a.createElement("a",{className:"nav_anchor gallery"},"Gallery"))),0==r?a.createElement(p,{className:"li",to:"/login"},a.createElement("li",null,a.createElement(Z,{cls:"fas fa-sign-in-alt"}),a.createElement("a",{className:"nav_anchor login"},"Login"))):a.createElement(p,{className:"li",to:"/logout"},a.createElement("li",null,a.createElement(Z,{cls:"fas fa-sign-out-alt"}),a.createElement("a",{className:"nav_anchor logoutanchor"},"Logout"))),1!=r?a.createElement(p,{className:"li",to:"/signup"},a.createElement("li",null,a.createElement(Z,{cls:"fas fa-user-plus"}),a.createElement("a",{className:"nav_anchor signup"},"Register"))):""))))}function ae(){e((e=>e.isLogged));const n=t();return y.exports.useEffect((()=>{if("undefined"!=typeof Storage)try{const e=localStorage.getItem("jipasToken");null!=e&&n(S(e))}catch(e){console.log(e)}l.to("body",{opacity:1,duration:1})}),[]),a.createElement(g,null,a.createElement("div",{className:"App"},a.createElement(te,null),a.createElement(v,null,a.createElement(N,{path:"/",exact:!0,component:K}),a.createElement(N,{path:"/about",component:D}),a.createElement(N,{path:"/services",component:z}),a.createElement(N,{path:"/gallery",component:F}),a.createElement(N,{path:"/contact",component:J}),a.createElement(N,{path:"/login",component:G}),a.createElement(N,{path:"/signup",component:$}),a.createElement(N,{path:"/upload",component:W}),a.createElement(N,{path:"/logout",component:R}),a.createElement(N,{path:"/help",component:V})),a.createElement(ee,null)))}E.render(a.createElement(f,{store:Y},a.createElement(ae,null)),document.querySelector(".react-app"));
