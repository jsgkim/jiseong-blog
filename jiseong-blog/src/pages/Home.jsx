import React from 'react';
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
    <div>
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
        <Link to='/ThinkingInReact'><Article>Thinking In React</Article></Link>
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