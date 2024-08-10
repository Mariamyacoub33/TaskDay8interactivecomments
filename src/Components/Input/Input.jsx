
import React, {useState} from 'react';
import './Input.css'

import Imgjuli from "../../assets/image-juliusomo.png";

const Input = (props) => {
   const [inputvalue, setInputvalue] = useState ("") ;

   function handleOnclick(){
    props.addpost(inputvalue);
    setInputvalue("");
   }

   function handleOnchange(event){
    setInputvalue(event.target.value);
   }

  return (
    <div id='inputdiv'>
      <img src={Imgjuli}/>
      <input id='inputvalue' value={inputvalue} onChange={handleOnchange}></input>
      <button className='SubmitBtn' onClick={handleOnclick}>SEND</button>
    </div>
  )
};

export default Input ;
