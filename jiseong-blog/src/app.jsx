import './app.css';
import Toggle from './components/toggle';
import { MdFace } from 'react-icons/md';
import Article from './components/Article';

function App() {
  return (
    <div className='wrapper'>
      <header>
        <h1>Jiseong Blog</h1>
        <Toggle />
      </header>
      <aside>
        <p>
          <MdFace /> Personal blog by <a href='https://github.com/jsgkim'>Jiseong Kim</a>.
        </p>
      </aside>
      <main>
        <Article date='August 30, 2022'>Components and Props</Article>
        <Article date='August 30, 2022'>Rendering Elements</Article>
      </main>
      <footer>
        <a href=''>contact</a>
      </footer>
    </div>
  );
}

export default App;