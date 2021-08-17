import React from 'react';
import ReactDOM from 'react-dom';

export function MainTitlePage(){
  <div className='main-flex'>
  <div>
  <h2>Jipas Tensail Architectural</h2>
  </div>
   <div></div>
  </div>
}
export function CsButton(props){
  return(
    <button className='title_btn'>
    {props.btnname}
    </button>
    )
}
export function BlueButton(props) {
  return (
    <button className='bl_title_btn'>
    {props.btnname}
    </button>
  )
}