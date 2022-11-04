import React from 'react';
import Toggle from '../components/toggle';
import { MdFace } from 'react-icons/md';
import Article from '../components/Article';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => { setIsHovering(true) };
  const handleMouseLeave = () => { setIsHovering(false) };
  const [isHovering2, setIsHovering2] = useState(false);
  const handleMouseEnter2 = () => { setIsHovering2(true) };
  const handleMouseLeave2 = () => { setIsHovering2(false) };
  return (
    <div className='wrapper'>
      <header>
        <Link to='/'><h1>Jiseong Blog</h1></Link>
        <Toggle />
      </header>
      <aside>
        <p>
          <MdFace /> Personal blog by&nbsp;
          <a
            href='https://github.com/jsgkim'
            target="_blank"
            style={{ textDecoration: isHovering ? 'none' : 'underline' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            Jiseong Kim
          </a>.
        </p>
      </aside>
      <main>
        <Link to='/ThinkingInReact'><Article>리액트로 생각하기</Article></Link>
      </main>
      <footer>
        <a
          href=''
          style={{ textDecoration: isHovering2 ? 'none' : 'underline' }}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}>
          contact
        </a>
      </footer>
    </div >
  );
}

export default Home;