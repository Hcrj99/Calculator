import React from "react";
import '../styles/buttonClear.css'

const ButtonClear = (props) => (
  <button className='button__clear'>
    {props.children}
  </button>
);

export default ButtonClear;