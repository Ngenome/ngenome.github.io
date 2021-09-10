import React from 'react';
import ReactDOM from 'react-dom';
import { CsButton } from './title.jsx';
import axios from 'axios';
import { gsap } from 'gsap';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { changePage } from '../actions/index'
//const dispatch=useDispatch()
const Faq = (props) => {
  const collapsible = React.useRef(null);
  var [collapsed, setCollapsed] = React.useState(1)
  React.useLayoutEffect(() => {

    collapsible.current.classList.add('collapsed');
  }, [])
  const collapser = React.useRef(null);
  return (
    <div className='faq'>
    <h4 className='faq_title'>{props.title}</h4>
    <i  onClick={()=>{
    if (collapsed==0){
      collapsible.current.classList.toggle('collapsed');
      
      collapser.current.classList.remove('fa-chevron-down');
      
      collapser.current.classList.add('fa-chevron-up');
      
      setCollapsed(1)
    }
        else{
      collapsible.current.classList.toggle('collapsed');
      
      collapser.current.classList.remove('fa-chevron-up');
      
      collapser.current.classList.add('fa-chevron-down');
          setCollapsed(0)
        }
      
    }} ref={collapser} className='fas fa-chevron-down'></i>
    <div ref={collapsible} className='faq_collapse'>
    
    <p  className='faq_question'>
    {props.question}
    </p>
    </div>
    </div>

  )
}
export var metadesc = "Here you can find a list of frequently asked questions. If none of them answers your questions, feel free to contact us.."

export var metatitle = "Jipas Tentsail Architectural"
export var metaicon = "http://jipastentsail.pythonanywhere.com/media/images/109361632_106981647764696_8765227589641973587_n.jpg"
export var Meta = (props) => {
  return (
    <Helmet>
    
                        <title>Jipas Tentsail Architectural|{props.page}</title>
                        <link rel='icon' href='http://jipastentsail.pythonanywhere.com/media/images/109361632_106981647764696_8765227589641973587_n.jpg'/>
                        <meta name="description" content={props.desc} />
                        <meta name="theme-color" content="red" />
                        <meta property="og:image" content="http://jipastentsail.pythonanywhere.com/media/images/109361632_106981647764696_8765227589641973587_n.jpg"/>
                        <meta property="og:description" content={props.desc}/>
                        <meta property="og:title" content={props.title}/>
                      </Helmet>
  )
}
export const HelpPage = () => {
  const [visible, setVisible] = React.useState(0)
  const dispatch = useDispatch()
  dispatch(changePage('help'))

  return (
    <div className="contact-page">
  <Meta desc={metadesc} page='help' title={metatitle}/>
      <div className='wrap_contact_title'>
        <h1 className="contact-title">Help Center </h1></div>
        <div className="help">
          <h3 className='help_intro'>
            Here you can find a list of frequently asked questions. If none of
            them answers your questions, feel free to contact us.
          </h3>
          <div className="faqs">
          <Faq title='How much do you charge for a web app?' question='Our prices depend on many factors. To get a better idea of the cost of what you need, give us a quick phone call at +254 748 38 3000 or an email on info@snobole.com.'/>
          <Faq title='What is your development process like?' question='There are nine steps in our development process;

Discovery – If the project is a rebuild, we review your current content and make further recommendations for improvements. If it’s a new site, we start by discussing the subjects and functionality you envisage for your site and develop an outline for you.

Content - You compile all the content for the web app, including all text and images.

Preliminary Design - We create a home page concept including colors, fonts, image style, and layout.

Organization - When we have received all content in its final version, we review it to determine the best way to organize the information. The structure of the site is based on this organizational scheme and must be approved by you.

Design Revision - After reviewing the initial design, you have the opportunity to request changes.

Implementation - Once we’ve received your approval on the design, we move on to implementation. This is where the approved design becomes concrete and where we add site-specific features.

Page Content - When we have all the content that will be included on the site and an approved design, we will enter all the data.

Testing - We run through a final set of tests to be sure that everything is functional. You have an opportunity at this time to test the site as well.

Launch - Once we have your final approval, we launch the site. This marks the end of the project.'/>
          <Faq title='What are your payment terms?' question='Our prices depend on many factors. To get a better idea of the cost of what you need, give us a quick phone call at +254 748 38 3000 or an email on info@snobole.com.'/>
          
          </div>
          <div className="cannot">
            <h3> Cannot find what you're looking for?</h3>
             <Link to='/contact' >
               Contact us
             </Link>
          </div>
        </div>
      </div>
  );
}