import React from 'react';
import { useEffect, useState } from 'react';
import './toggle.scss';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    return setToggle(!toggle);
  };
  useEffect(() => {
    if (toggle === true) {
      document.body.className = 'dark';
    } else { document.body.className = 'light' }
  }, [toggle]);
  return (
    <div className='toggleWrapper'>
      <toggle className='toggle' onClick={handleToggle}>
        {toggle ? <MdDarkMode /> : <MdLightMode />}</toggle>
    </div>
  );
}

export default Toggle;