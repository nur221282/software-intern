import React from 'react';
import logo from './logo.svg';
import './App.css';
import { constants } from 'buffer';

export const Button=()=> {
const handleClick=()=>{
  console.log("click")
}

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}


