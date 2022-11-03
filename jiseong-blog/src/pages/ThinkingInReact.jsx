import React from "react";
import { Link } from "react-router-dom";
import Toggle from '../components/toggle';

const ThinkingInReact = () => {
  return (
    <div className='wrapper'>
      <header>
        <Link to='/'><h1 style={{ color: '#ffa7c4', fontSize: '22px' }}>Jiseong Blog</h1></Link>
        <Toggle />
      </header>
      <h1>Thinking In React</h1>
    </div >
  )
}

export default ThinkingInReact;