import React from 'react';
import Toggle from '../components/toggle';
import { MdFace } from 'react-icons/md';
import Article from '../components/Article';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='wrapper'>
      <header>
        <Link to='/'><h1>Jiseong Blog</h1></Link>
        <Toggle />
      </header>
      <aside>
        <p>
          <MdFace /> Personal blog by <a href='https://github.com/jsgkim' target="_blank">Jiseong Kim</a>.
        </p>
      </aside>
      <main>
        <Link to='/ThinkingInReact'><Article>리액트로 생각하기</Article></Link>
      </main>
      <footer>
        <a href=''>contact</a>
      </footer>
    </div>
  );
}

export default Home;