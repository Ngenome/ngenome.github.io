var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;import{R as r,a as s,g as c,b as i,r as m,B as o,S as u,c as d,L as E}from"./vendor.2fafe629.js";function p(e){return r.createElement("div",{className:"btn_wrap"},r.createElement("button",{className:"title_btn"},e.btnname))}let h,f=!1,v="./src/images/archy2.png";function g(e){const[a,t]=r.useState("./images/archy2.jpg"),[n,l]=r.useState("invisible");return h=e=>{t(e)},setInterval((function(){f&&l("visible"),0==f&&l("invisible")}),1e3),r.useEffect((()=>{document.changing.src=a}),[a]),r.createElement("div",{className:n},r.createElement("div",{className:"x",onClick:()=>{f=!1}},r.createElement("i",{className:"fas fa-times-circle"})),r.createElement("img",{name:"changing",className:"gimg",src:a}))}function N(e){return r.useState(v),r.useEffect((()=>{}),[]),r.createElement("div",{onClick:function(){f=!0,h(e.src)},className:"gallery_image_container"},r.createElement("img",{src:e.src}))}function b(){const[e,a]=r.useState(v),[t,n]=r.useState([]);return r.useEffect((()=>{s({method:"get",url:"https://dummyapi.io/data/v1/user?limit=10",headers:{"app-id":"611d144c8b1a0883a7ddeaa1"}}).then((e=>{var a=e.data.data;n(a)}))}),[]),r.createElement("div",null,r.createElement("h2",{className:"gallery_h2"},"Our past Accomplished Designs"),r.createElement(g,{vs:f,src:e}),r.createElement("div",{className:"gallery_container"},t.map((e=>r.createElement(N,{src:e.picture})))))}function y(e){return r.createElement("div",{className:"card"},r.createElement("div",{className:"card_title"},r.createElement("i",{className:`fas fa-${e.icon}`}),r.createElement("h2",null,e.title," ")),r.createElement("div",{className:"card_description"},r.createElement("p",null," ",e.description),r.createElement("button",null,e.buttonText)))}function w(e){return r.createElement("div",{className:"tcard"},r.createElement("div",{className:"tImage"},r.createElement("img",{src:e.imagelink,alt:e.title})),r.createElement("div",{className:"tcard_title"},r.createElement("h2",null,e.title," ")),r.createElement("div",{className:"tcard_description"},r.createElement("p",null," ",e.description),r.createElement("div",{className:"tsocial"},r.createElement("a",{className:"tanchor_social",href:`${e.whatsapplink}`},r.createElement("i",{className:"fab fa-whatsapp tsicon "})),r.createElement("a",{className:"tanchor_social",href:`${e.iglink}`},r.createElement("i",{className:"fab fa-instagram tsicon"})),r.createElement("a",{className:"tanchor_social",href:`${e.fblink}`},r.createElement("i",{className:"fab fa-facebook tsicon"})))))}function _(){return r.createElement("div",{className:"Comment"},r.createElement("h2",{className:"comment_title"}," Comments"),r.createElement("form",{className:"comment_form"},r.createElement("textarea",{placeholder:"Write your comment here",className:"comment_textarea"}),r.createElement("button",{className:"post_button",onClick:""},r.createElement("i",{className:"fas fa-paper-plane"}))))}class k extends r.Component{componentDidMount(){VanillaTilt.init(this.rootNode,{max:25,speed:800})}render(){return r.createElement("div",{ref:e=>this.rootNode=e,className:"tilt-root"},r.createElement("div",{className:"tilt-child"},r.createElement("div",((e,r)=>{for(var s in r||(r={}))t.call(r,s)&&l(e,s,r[s]);if(a)for(var s of a(r))n.call(r,s)&&l(e,s,r[s]);return e})({className:"totally-centered"},this.props))))}}const x={max:25,speed:400,glare:!0,"max-glare":.1};function S(){const[e,a]=r.useState([]);return r.useEffect((()=>{s({method:"get",url:"https://dummyapi.io/data/v1/user?limit=8",headers:{"app-id":"611d144c8b1a0883a7ddeaa1"}}).then((e=>{var t=e.data.data;a(t)}))}),[]),r.createElement("div",{className:"service_flex"},r.createElement("div",{className:"services"},r.createElement("h2",{className:"st"},"Services"),r.createElement("div",{className:"tilts"},r.createElement(k,{options:x},r.createElement(y,{title:"Design and detailing",icon:"cog",description:"Our products are beautifully designed keeping in mind the fastest market trends, we have ensures top - quality product\n        \n        a team of skilled and experience designer 's that\n        \n        for our valuable clients\n        .",buttonText:"Engage"})),r.createElement(k,null,r.createElement(y,{title:"Engineering",icon:"hard-hat",description:"Our team of qualified and experienced engineers ensures any challenge product manufacturer and installation",buttonText:"More"})),r.createElement(k,null,r.createElement(y,{title:"Manufacturing",icon:"hammer",description:"\n        Our products are manufactured using high - quality materials, And all the applications like welding sewing tailoring are done with extensive care",buttonText:"Engage"})))),r.createElement("div",{className:"testimonials"},r.createElement("h2",null,"Testimonials"),r.createElement("div",{className:"testimonial_cards"},0===e.length?r.createElement("div",null,"loading"):e.map((e=>r.createElement(w,{title:e.firstName,imagelink:e.picture,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",iglink:"https://www.instagram.com",fblink:"https://www.facebook.com",whatsapplink:"https://www.whatsapp.com"}))))),r.createElement(_,null))}function j(e){return r.createElement("div",{className:"social_icons"},r.createElement("a",{className:"anchor_social",href:`${e.fblink}`},r.createElement("i",{className:"fab fa-facebook"})),r.createElement("a",{className:"anchor_social",href:`${e.twitterlink}`},r.createElement("i",{className:"fab fa-twitter"})),r.createElement("a",{className:"anchor_social",href:`${e.whatsapplink}`},r.createElement("i",{className:"fab fa-whatsapp"})),r.createElement("a",{className:"anchor_social",href:`${e.inlink}`},r.createElement("i",{className:"fab fa-linkedin"})),r.createElement("a",{className:"anchor_social",href:`https://${e.iglink}`},r.createElement("i",{className:"fab fa-instagram"})))}function O(){return r.createElement("div",{className:"about_flex"},r.createElement("div",{className:"about_image"},r.createElement("img",{src:"/assets/abt.64063cf9.jpg"})),r.createElement("div",{className:"about_desc"},r.createElement("div",{className:"about_desc_top"},r.createElement("h1",{className:"abt_title"},"About us"),r.createElement("div",{className:"hr"}),r.createElement("p",null,"We take pride in our wide knowledge in shading systems. Our specialty lies in luxury cottage tents,car shades,event tents, and dome tents.Our clientele ranges from hotels,resorts,organizations, estates and individuals. Our tents are guaranteed cocktail of aesthetic beauty, durability and versatility. Link up with us for more.")),r.createElement("div",{className:"about_desc_bottom"},r.createElement(j,{inlink:"www.linkedin.com",twitterlink:"www.twitter.com",fblink:"www.facebook.com",whatsapplink:"www.whatsapp.com",iglink:"www.instagram.com"}))))}const q=()=>(r.useEffect((()=>{c.to(".fa-paper-plane",{rotate:1.7,yoyo:!0,duration:5,repeat:-1,ease:"sine.inOut"})}),[]),r.createElement("div",{className:"contact-page"},r.createElement("h1",{className:"contact-title"},"Contact us "),r.createElement("div",null,r.createElement("form",{action:"",className:"contact-form"},r.createElement("div",{className:"wrap"},r.createElement("label",{htmlFor:"name",id:"name-label"},"Enter your Name"),r.createElement("input",{required:!0,type:"text",placeholder:"Enter your full name here",id:"name"})),r.createElement("div",{className:"wrap"},r.createElement("label",{htmlFor:"email",id:"mail-label"},"Email"),r.createElement("input",{required:!0,type:"text",placeholder:"Enter your email  here",id:"mailin"})),r.createElement("div",{className:"wrap"},r.createElement("label",{htmlFor:"url",id:"web-label"},"Website"),r.createElement("input",{type:"url",placeholder:"Enter your website url here",id:"webin"})),r.createElement("div",{className:"wrap"},r.createElement("label",{htmlFor:"message",id:"message-label"},"Message"),r.createElement("textarea",{name:"message",id:"mess-textarea",cols:"30",rows:"10"})),r.createElement("button",{className:"submit",type:"submit"},r.createElement("i",{className:"fas fa-paper-plane"}))))));var T="/assets/p01.fe20830a.jpg",L="/assets/p02.e0b8eb84.jpg",$="/assets/p03.3b555f9e.jpg";const C=[T,L,$,T,L,$];let A=1;function I(){c.from(".home_image",{duration:1,opacity:0,filter:"blur(5px)"}),document.home_image.src=C[A],A<5?A+=1:A=1}function M(){return r.useState("desktop"),r.useState(A),r.useState(1),m.exports.useEffect((()=>{c.from(".show",{duration:2,opacity:0,ease:"bounce"}),c.from(".title_btn",{opacity:0,duration:2,delay:4}),c.from(".jp",{opacity:0,duration:1,delay:0,stagger:1}),c.to(".span",{duration:2,opacity:1,delay:3,stagger:.4}),c.from(".span",{y:-8,delay:3,ease:"bounce",duration:1,stagger:1})}),[]),m.exports.useEffect((()=>{c.from(".home_image",{duration:1,opacity:0});var e=setInterval(I,8900);return()=>{clearInterval(e)}}),[]),r.useState(480),r.createElement("div",{className:"main-flex"},r.createElement("div",{className:"title_view"},r.createElement("div",{className:"show"},r.createElement("h2",null,r.createElement("span",{className:"jp"},"Jipas")," ",r.createElement("br",null),r.createElement("span",{className:"jp"},"Tensail"),r.createElement("br",null),r.createElement("span",{className:"jp"}," Architectural")),r.createElement("div",{className:"spans"},r.createElement("span",{className:"span span1"},"Quality tents. "),r.createElement("span",{className:"span span2"},"Quality living."))),r.createElement("div",{className:"btns"},r.createElement(E,{to:"/gallery"},r.createElement(p,{btnname:"See More"})))),r.createElement("div",{className:"home_slide"},r.createElement("div",{className:"home_slide_img_div"},r.createElement("img",{name:"home_image",className:"home_image",src:C[1]}))))}document.querySelector(".home_image");let F=0;function D(){return m.exports.useState("no"),r.useEffect((()=>{var e=document.querySelector(".burger");document.querySelector(".nav"),document.querySelector(".nav_list");var a=document.querySelector(".bars"),t=document.querySelectorAll(".nav_anchor");e.addEventListener("click",(()=>{0==F?(a.classList.remove("fa-bars"),a.classList.add("fa-times"),c.fromTo(".nav",{height:"5vh"},{height:"100vh",ease:"bounce",delay:2,duration:2}),c.fromTo(".nav",{width:"100vh"},{duration:2,width:"60vw"}),c.to(".nav_anchor",{duration:.5,left:25,opacity:1,stagger:.2,delay:4}),F=1):1==F&&(a.classList.remove("fa-times"),a.classList.add("fa-bars"),c.fromTo(".nav",{height:"100vh"},{duration:1,height:"5vh",delay:2}),c.to(".nav",{duration:2,width:"100vw",delay:3,ease:"bounce"}),c.to(".nav_anchor",{duration:1,opacity:0,stagger:.5}),c.to(".nav_anchor",{duration:.5,left:-70,stagger:.2,delay:.3}),F=0)})),t.forEach((e=>{e.addEventListener("click",(()=>{a.classList.remove("fa-times"),a.classList.add("fa-bars"),c.fromTo(".nav",{height:"100vh"},{duration:1,height:"5vh",delay:2}),c.to(".nav",{duration:2,width:"100vw",delay:4,ease:"bounce"}),c.to(".nav_anchor",{duration:1,opacity:0,stagger:.5}),c.to(".nav_anchor",{duration:.5,left:-70,stagger:.2,delay:.3}),F=0}))}))}),[]),r.createElement("nav",{className:"nav"},r.createElement("div",{className:"th2"},r.createElement("h2",null,"JT"),r.createElement("span",{className:"burger"},r.createElement("i",{className:"bars fas fa-bars"}))),r.createElement("ul",{className:"nav_list"},r.createElement(E,{className:"li",to:"/"},r.createElement("li",null,r.createElement("a",{className:"nav_anchor"},"Home"))),r.createElement(E,{className:"li",to:"/services"},r.createElement("li",null,r.createElement("a",{className:"nav_anchor"},"Services"))),r.createElement(E,{className:"li",to:"/about"},r.createElement("li",null,r.createElement("a",{className:"nav_anchor"},"About"))),r.createElement(E,{className:"li",to:"/contact"},r.createElement("li",null,r.createElement("a",{className:"nav_anchor"},"Contact")))))}function P(){return m.exports.useEffect((()=>{c.to("body",{opacity:1,duration:1})}),[]),r.createElement(o,null,r.createElement("div",{className:"App"},r.createElement(D,null),r.createElement(u,null,r.createElement(d,{path:"/",exact:!0,component:M}),r.createElement(d,{path:"/about",component:O}),r.createElement(d,{path:"/services",component:S}),r.createElement(d,{path:"/gallery",component:b}),r.createElement(d,{path:"/contact",component:q}))))}i.render(r.createElement(P,null),document.querySelector(".react-app"));
