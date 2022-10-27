import './app.css';
import Toggle from './components/toggle';
import { MdFace } from 'react-icons/md';

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

      </main>
      <footer>
        <a href=''>contact</a>
      </footer>
    </div>
  );
}

export default App;
