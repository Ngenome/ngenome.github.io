var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;import{R as c,a as s,b as r,B as i,S as m,c as o,r as u,g as d,L as E}from"./vendor.2fafe629.js";function p(e){return c.createElement("button",{className:"title_btn"},e.btnname)}let f,h=!1,g="./src/images/archy2.png";function N(e){const[t,a]=c.useState("./images/archy2.jpg"),[n,l]=c.useState("invisible");return f=e=>{a(e)},setInterval((function(){h&&l("visible"),0==h&&l("invisible")}),1e3),c.useEffect((()=>{document.changing.src=t}),[t]),c.createElement("div",{className:n},c.createElement("div",{className:"x",onClick:()=>{h=!1}},c.createElement("i",{className:"fas fa-times-circle"})),c.createElement("img",{name:"changing",className:"gimg",src:t}))}function v(e){return c.useState(g),c.useEffect((()=>{}),[]),c.createElement("div",{onClick:function(){h=!0,f(e.src)},className:"gallery_image_container"},c.createElement("img",{src:e.src}))}function b(){const[e,t]=c.useState(g),[a,n]=c.useState([]);return c.useEffect((()=>{s({method:"get",url:"https://dummyapi.io/data/v1/user?limit=10",headers:{"app-id":"611d144c8b1a0883a7ddeaa1"}}).then((e=>{var t=e.data.data;n(t)}))}),[]),c.createElement("div",null,c.createElement("h2",{className:"gallery_h2"},"Our past Accomplished Designs"),c.createElement(N,{vs:h,src:e}),c.createElement("div",{className:"gallery_container"},a.map((e=>c.createElement(v,{src:e.picture})))))}function w(e){return c.createElement("div",{className:"card"},c.createElement("div",{className:"card_title"},c.createElement("i",{className:`fas fa-${e.icon}`}),c.createElement("h2",null,e.title," ")),c.createElement("div",{className:"card_description"},c.createElement("p",null," ",e.description),c.createElement("button",null,e.buttonText)))}function _(e){return c.createElement("div",{className:"tcard"},c.createElement("div",{className:"tImage"},c.createElement("img",{src:e.imagelink,alt:e.title})),c.createElement("div",{className:"tcard_title"},c.createElement("h2",null,e.title," ")),c.createElement("div",{className:"tcard_description"},c.createElement("p",null," ",e.description),c.createElement("div",{className:"tsocial"},c.createElement("a",{className:"tanchor_social",href:`${e.whatsapplink}`},c.createElement("i",{className:"fab fa-whatsapp tsicon "})),c.createElement("a",{className:"tanchor_social",href:`${e.iglink}`},c.createElement("i",{className:"fab fa-instagram tsicon"})),c.createElement("a",{className:"tanchor_social",href:`${e.fblink}`},c.createElement("i",{className:"fab fa-facebook tsicon"})))))}function k(){return c.createElement("div",{className:"Comment"},c.createElement("h2",{className:"comment_title"}," Comments"),c.createElement("form",{className:"comment_form"},c.createElement("textarea",{placeholder:"Write your comment here",className:"comment_textarea"}),c.createElement("button",{className:"post_button",onClick:""},c.createElement("i",{className:"fas fa-paper-plane"}))))}class y extends c.Component{componentDidMount(){VanillaTilt.init(this.rootNode,{max:25,speed:400,glare:!0,"max-glare":.6})}render(){return c.createElement("div",{ref:e=>this.rootNode=e,className:"tilt-root"},c.createElement("div",{className:"tilt-child"},c.createElement("div",((e,c)=>{for(var s in c||(c={}))a.call(c,s)&&l(e,s,c[s]);if(t)for(var s of t(c))n.call(c,s)&&l(e,s,c[s]);return e})({className:"totally-centered"},this.props))))}}const x={scale:1.2,speed:1e3,max:30};function S(){const[e,t]=c.useState([]);return c.useEffect((()=>{s({method:"get",url:"https://dummyapi.io/data/v1/user?limit=8",headers:{"app-id":"611d144c8b1a0883a7ddeaa1"}}).then((e=>{var a=e.data.data;t(a)}))}),[]),c.createElement("div",{className:"service_flex"},c.createElement("div",{className:"services"},c.createElement("h2",{className:"st"},"Services"),c.createElement("div",{className:"tilts"},c.createElement(y,{options:x},c.createElement(w,{title:"Design and detailing",icon:"cog",description:"Our products are beautifully designed keeping in mind the fastest market trends, we have ensures top - quality product\n        \n        a team of skilled and experience designer 's that\n        \n        for our valuable clients\n        .",buttonText:"Engage"})),c.createElement(y,null,c.createElement(w,{title:"Engineering",icon:"hard-hat",description:"Our team of qualified and experienced engineers ensures any challenge product manufacturer and installation",buttonText:"More"})),c.createElement(y,null,c.createElement(w,{title:"Manufacturing",icon:"hammer",description:"\n        Our products are manufactured using high - quality materials, And all the applications like welding sewing tailoring are done with extensive care",buttonText:"Engage"})))),c.createElement("div",{className:"testimonials"},c.createElement("h2",null,"Testimonials"),c.createElement("div",{className:"testimonial_cards"},e.map((e=>c.createElement(_,{title:e.firstName,imagelink:e.picture,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",iglink:"https://www.instagram.com",fblink:"https://www.facebook.com",whatsapplink:"https://www.whatsapp.com"}))))),c.createElement(k,null))}function j(e){return c.createElement("div",{className:"social_icons"},c.createElement("a",{className:"anchor_social",href:`${e.fblink}`},c.createElement("i",{className:"fab fa-facebook"})),c.createElement("a",{className:"anchor_social",href:`${e.twitterlink}`},c.createElement("i",{className:"fab fa-twitter"})),c.createElement("a",{className:"anchor_social",href:`${e.whatsapplink}`},c.createElement("i",{className:"fab fa-whatsapp"})),c.createElement("a",{className:"anchor_social",href:`${e.inlink}`},c.createElement("i",{className:"fab fa-linkedin"})),c.createElement("a",{className:"anchor_social",href:`https://${e.iglink}`},c.createElement("i",{className:"fab fa-instagram"})))}function q(){return c.createElement("div",{className:"about_flex"},c.createElement("div",{className:"about_image"},c.createElement("img",{src:"/assets/abt.64063cf9.jpg"})),c.createElement("div",{className:"about_desc"},c.createElement("div",{className:"about_desc_top"},c.createElement("h1",{className:"abt_title"},"About us"),c.createElement("div",{className:"hr"}),c.createElement("p",null,"Jipas tensail architectural is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore praesentium, distinctio saepe quidem nobis, qui debitis, suscipit laboriosam quis impedit quisquam autem? Deleniti voluptatum, nihil eos atque. A, fuga? Design & Detailing")),c.createElement("div",{className:"about_desc_bottom"},c.createElement(j,{inlink:"www.linkedin.com",twitterlink:"www.twitter.com",fblink:"www.facebook.com",whatsapplink:"www.whatsapp.com",iglink:"www.instagram.com"}))))}const O=["/assets/arch.2c5cba53.jpg","/assets/arch2.c3c89a6e.jpg","/assets/arch3.d561cb74.jpg","/assets/arch4.97eb51fe.jpg","/assets/arch5.efe86193.jpg","/assets/arch6.36caee14.jpg"];let $=1;function T(){$<5?$+=1:$=1}function A(){const[e,t]=c.useState($);c.useState(1);var a=setInterval(T,3e3),n=setInterval((function(){t($)}),5600);return u.exports.useEffect((()=>{d.from(".title_view",{duration:2,opacity:0,ease:"bounce"})}),[]),u.exports.useEffect((()=>(d.from(".home_image",{duration:2,opacity:0}),()=>{clearInterval(a),clearInterval(n)})),[e]),c.createElement("div",{className:"main-flex"},c.createElement("div",{className:"title_view"},c.createElement("h2",null,"Jipas ",c.createElement("br",null)," Tensail Architectural"),c.createElement("div",{className:"btns"},c.createElement(E,{to:"/gallery"},c.createElement(p,{btnname:"See More"})))),c.createElement("div",{className:"home_slide"},c.createElement("div",{className:"home_slide_img_div"},c.createElement("img",{name:"home_image",className:"home_image",src:O[e]}))))}function C(){return c.createElement("nav",{className:"nav"},c.createElement("h2",null,"JT"),c.createElement("ul",null,c.createElement(E,{className:"li",to:"/"},c.createElement("li",null,c.createElement("a",{className:"nav_anchor"},"Home"))),c.createElement(E,{className:"li",to:"/services"},c.createElement("li",null,c.createElement("a",{className:"nav_anchor"},"Services"))),c.createElement(E,{className:"li",to:"/about"},c.createElement("li",null,c.createElement("a",{className:"nav_anchor"},"About"))),c.createElement(E,{className:"li",to:"/gallery"},c.createElement("li",null,c.createElement("a",{className:"nav_anchor"},"Contact")))))}function I(){return c.createElement(i,null,c.createElement("div",{className:"App"},c.createElement(C,null),c.createElement(m,null,c.createElement(o,{path:"/",exact:!0,component:A}),c.createElement(o,{path:"/about",component:q}),c.createElement(o,{path:"/services",component:S}),c.createElement(o,{path:"/gallery",component:b}))))}r.render(c.createElement(I,null),document.querySelector(".react-app"));
